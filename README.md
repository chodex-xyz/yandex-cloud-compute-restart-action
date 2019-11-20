# Yandex cloud auto restart stopped compute instances github action

```yaml
name: "Restart instances if they stopped"
on:
  schedule:
    - cron:  '*/10 * * * *'

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/setup-node@v1
      with:
        node-version: '12.x'
        registry-url: 'https://registry.npmjs.org'

    - uses: actions/checkout@v1

    - run: npm install

    - uses: kcrebound/yandex-cloud-compute-restart-action@master
      with:
        oauthToken: ${{ secrets.YANDEX_OAUTH_TOKEN }}
        folderId: ${{ secrets.YANDEX_FOLDER_ID }}
```

## Launch

  1. Set github repo [Secrets](https://help.github.com/en/articles/virtual-environments-for-github-actions#creating-and-using-secrets-encrypted-variables):
  1. Install [Yandex Cloud CLI](https://cloud.yandex.ru/docs/cli/quickstart)
  1. Login
    ```bash
    yc init
    ```
  1. Get token and folder id
    ```bash
    yc config list
    ```