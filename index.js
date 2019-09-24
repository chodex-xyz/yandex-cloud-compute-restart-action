const core = require('@actions/core');

const {Session}      = require('yandex-cloud');
const { InstanceService } = require('yandex-cloud/api/compute/v1');

// most @actions toolkit packages have async methods
async function run() {
  try {
    const oauthToken = core.getInput('oauthToken');
    const folderId = core.getInput('folderId');

    const session = new Session({ oauthToken });
    const instanceService = new InstanceService(session);

    let response = await instanceService.list({folderId})

    let restarted = []

    for (let instance of response.instances) {
      if (instance.status === 4){
        let result = await instanceService.start({instanceId: instance.id})
        core.info(result.description, result.id);
        restarted.push({instance: instance.name})
      }
    }

    core.setOutput('restarted', restarted)
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
