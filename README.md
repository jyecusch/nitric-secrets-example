<p align="center"><a href="https://nitric.io" target="_blank"><img src="https://raw.githubusercontent.com/nitrictech/nitric/main/docs/assets/nitric-logo.svg" height="120"></a></p>

## About Nitric

[Nitric](https://nitric.io) is a framework for rapid development of cloud-native and serverless applications. Define your apps in terms of the resources they need, then write the code for serverless function based APIs, event subscribers and scheduled jobs.

Apps built with Nitric can be deployed to AWS, Azure or Google Cloud all from the same code base so you can focus on your products, not your cloud provider.

Nitric makes it easy to:

- Create smart [serverless functions and APIs](https://nitric.io/docs/apis)
- Build reliable distributed apps that use [events](https://nitric.io/docs/messaging/topics) and/or [queues](https://nitric.io/docs/messaging/queues)
- Securely store, retrieve and rotate [secrets](https://nitric.io/docs/secrets)
- Read and write files from [buckets](https://nitric.io/docs/storage)

## Learning Nitric

Nitric provides detailed and intuitive [documentation](https://nitric.io/docs) and [guides](https://nitric.io/docs/getting-started) to help you get started quickly.

If you'd rather chat with the maintainers or community, come and join our [Discord](https://discord.gg/Webemece5C) server, [GitHub Discussions](https://github.com/nitrictech/nitric/discussions) or find us on [Twitter](https://twitter.com/nitric_io).

## Nitric Secrets Example

To run this example project you'll need the [Nitric CLI](https://nitric.io/docs/installation) installed. You can then use the CLI commands to run, build or deploy the project.

Start by installing the project's dependencies.

```bash
npm install
```

Next, you can run locally to ensure everything starts correctly.

```bash
nitric run
```

If you're ready to deploy the project start by creating a new `stack` linking this project to a deployment target (e.g. an AWS Account and Region).

```bash
nitric stack new
```

With your stack created you can now deploy the project to the cloud.

```bash
nitric stack up -s [your_stack_name]
```