# Gatsby Authentication with AWS Amplify

Note: this auth starter was adopted from the original starter by [dabit3](https://github.com/dabit3/gatsby-auth-starter-aws-amplify).

This auth starter implements a basic authentication flow for signing up signing in users as well as protected client side routing using [AWS Amplify](https://amplify.aws). Auth features:

- User sign up
- User sign in
- Multi-factor Authentication
- User sign-out
- Password Reset
- Error Feedback

# Run locally

1. Create the project

```sh
gatsby new new-auth-site https://github.com/ben-siewert/gatsby-starter-auth-aws-amplify
```

2. Change into the new directory

```sh
cd new-auth-site
```

3. Install dependencies

```sh
yarn
# or
npm install
```

4. Install & configure the AWS Amplify CLI.

```sh
npm install -g @aws-amplify/cli

amplify configure
```

5. Create a new AWS Amplify Project

```
amplify init
```

> Here, walk through the following steps:

- Enter a name for the project **YOURPROJECTNAME**
- Enter a name for the environment **master**
- Choose your default editor: **Visual Studio Code** (or your editor of choice)
- Choose the type of app that you're building **javascript**
- What javascript framework are you using **react**
- Source Directory Path: **src**
- Distribution Directory Path: **public**
- Build Command: **npm run build**
- Start Command: **npm run dev**

The CLI will then initialize a project in the cloud.

6. Add Auth to the Ampliy project it will configure a CloudFormation template that has an Amazon Cognito resource that enables user authentication.

```sh
amplify add auth
```

> Here, walk through the following steps:

- Default configuration: **(recommended)**
- How do you want users to be able to sign in?: **recommended: (Email) or (Email and Phone Number)**
- Do you want to configure advanced settings?: **recommended: (NO, I am done.) or (Yes, I want to make some additional changes)**

7. Finally, Push the updated project configuration to AWS. It will deploy a CloudFormation template that has an Amazon Cognito resource that enables user authentication.

```sh
amplify push
```

8. Then you can run it by:

```sh
gatsby develop
```
