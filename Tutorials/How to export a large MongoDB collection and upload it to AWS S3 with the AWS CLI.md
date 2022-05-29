---
Aliases: []
Tags: [evergreen]
publish: true
---

## Overview

This tutorial will show you how to export a large MongoDB collection as a JSON file and upload it to AWS S3 using the AWS CLI. The AWS CLI is used for larger files because there is a file size limit when uploading files to S3 via the AWS management console.

## Requirements

- Install [mongoexport](https://docs.mongodb.com/database-tools/mongoexport/)
- Install the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) and [configure it](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

## 1. Export the collection using mongoexport

In the example below, replace the uri connection string with your own.

```bash

mongoexport --uri="mongodb+srv://username:password@example-mongodb.example.mongodb.net/" --db=example --collection=example --out=example.json

```

You can also put your credentials into a separate configuration file and reference it.

```bash

mongoexport --config=config.yaml --db=example --collection=example --type=json --out=example.json

```

## 2. Generate an md5 checksum

After we have exported our file from MongoDB, we want to generate a hash which uniquely identifies the data. It will be used in the next step to verify that the data was uploaded correctly in S3.

```bash

openssl md5 -binary example.json | base64

```

The generated md5 hash should look similar to: `t8oeOvMA7tKvxzZoEcYawQ==`

## 3. [Initiate copy to S3](https://aws.amazon.com/premiumsupport/knowledge-center/s3-multipart-upload-cli/)

Using the S3 copy command below, specify your file, the destination you want to send it to in S3, and the md5 hash generated previously.

```bash

aws s3 cp example.json s3://example-bucket/example.json --metadata md5="example"

```

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Tutorials/How%20to%20export%20a%20large%20MongoDB%20collection%20and%20upload%20it%20to%20AWS%20S3%20with%20the%20AWS%20CLI.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Tutorials/How%20to%20export%20a%20large%20MongoDB%20collection%20and%20upload%20it%20to%20AWS%20S3%20with%20the%20AWS%20CLI.md "git-hub-copy-note") </span>
