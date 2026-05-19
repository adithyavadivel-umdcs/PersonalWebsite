# Deployment

This portfolio remains hosted the same way it is today:

- React + Vite app
- Static files deployed to Amazon S3
- Amazon CloudFront in front of the bucket
- Route 53 custom domain
- HTTPS via AWS Certificate Manager

The change is that deployment can now run automatically from GitHub Actions whenever code is pushed to `main`.

## Build and deploy flow

The GitHub Actions workflow is in [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

On every push to `main`, GitHub Actions will:

1. Check out the repository
2. Set up Node.js
3. Install dependencies with `npm ci`
4. Build the app with `npm run build`
5. Upload the generated `dist/` files to the S3 bucket with `aws s3 sync --delete`
6. Create a CloudFront invalidation for `/*`

## Project build details

- Install command: `npm ci`
- Build command: `npm run build`
- Vite output folder: `dist/`

`dist/` is the default Vite output directory because `vite.config.js` does not define a custom `build.outDir`.

## Required GitHub repository secrets

Add these repository secrets in GitHub:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `S3_BUCKET_NAME`
- `CLOUDFRONT_DISTRIBUTION_ID`

GitHub path:

1. Open the repository on GitHub
2. Go to `Settings`
3. Go to `Secrets and variables` -> `Actions`
4. Add each secret under `Repository secrets`

## AWS IAM setup

Create a dedicated IAM user for GitHub Actions. Do not reuse a personal admin account.

### Recommended approach

1. Create an IAM user such as `github-actions-portfolio-deploy`
2. Enable `Programmatic access` credentials
3. Attach a least-privilege policy scoped to:
   - the specific S3 bucket used for the portfolio
   - the specific CloudFront distribution used for the portfolio
4. Save the access key ID and secret access key
5. Store them in GitHub repository secrets

### Example least-privilege IAM policy

Replace:

- `YOUR_BUCKET_NAME`
- `YOUR_CLOUDFRONT_DISTRIBUTION_ID`
- `YOUR_AWS_ACCOUNT_ID`

with your actual values.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "ListBucket",
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket"
      ],
      "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME"
    },
    {
      "Sid": "ManageBucketObjects",
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject"
      ],
      "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
    },
    {
      "Sid": "CreateCloudFrontInvalidation",
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation",
        "cloudfront:GetInvalidation",
        "cloudfront:ListInvalidations"
      ],
      "Resource": "arn:aws:cloudfront::YOUR_AWS_ACCOUNT_ID:distribution/YOUR_CLOUDFRONT_DISTRIBUTION_ID"
    }
  ]
}
```

## AWS values you need to know

- `AWS_REGION`: the AWS region where your S3 bucket and deployment credentials are managed
- `S3_BUCKET_NAME`: the exact bucket name receiving the built site
- `CLOUDFRONT_DISTRIBUTION_ID`: the distribution ID for your portfolio CDN

Examples:

- `AWS_REGION`: `us-east-1`
- `S3_BUCKET_NAME`: `my-portfolio-site-prod`
- `CLOUDFRONT_DISTRIBUTION_ID`: `E123ABC456XYZ`

## GitHub Actions file behavior

The workflow:

- triggers on pushes to `main`
- can also be run manually with `workflow_dispatch`
- uses `npm ci` for reproducible installs
- deletes removed files from S3 via `aws s3 sync --delete`
- invalidates all cached CloudFront paths after deployment

## Setup checklist

1. Commit and push `.github/workflows/deploy.yml`
2. Create the IAM user and attach the least-privilege policy
3. Copy the access key ID and secret access key
4. Add all five GitHub repository secrets
5. Push to `main`
6. Open the `Actions` tab in GitHub and confirm the deployment completes successfully

## Notes

- This does not replace your existing S3, CloudFront, Route 53, or ACM setup
- It only automates the build, upload, and invalidation steps
- If you later rename the default branch, update `.github/workflows/deploy.yml`
