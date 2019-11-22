# Yandex Cloud Compute Restart Github Actions

Auto restart stopped compute instances

## Usage

  1. Create a new file `custom-workflow.yml` in the `.github/workflow` directory with the following example code.

    ```yaml
    name: "Restart instances if they stopped"
    on:
      schedule:
        - cron:  '*/10 * * * *'

    jobs:
      test:
        runs-on: ubuntu-latest
        steps:
        - uses: kcrebound/yandex-cloud-compute-restart-action@master
          with:
            oauthToken: ${{ secrets.YANDEX_OAUTH_TOKEN }}
            folderId: ${{ secrets.YANDEX_FOLDER_ID }}
    ```

  1. Set github repo [Secrets](https://help.github.com/en/articles/virtual-environments-for-github-actions#creating-and-using-secrets-encrypted-variables)

  1. Install [Yandex Cloud CLI](https://cloud.yandex.ru/docs/cli/quickstart)

  1. Login

    ```bash
    yc init
    ```
  
  1. Get token and folder id and setup secrets

    ```bash
    yc config list
    ```
