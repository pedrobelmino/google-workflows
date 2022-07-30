LAB para criação de fluxo de consulta e persistência de pokemons utilizando Google Cloud Workflows e cloud functions
============================

**Pré-requisitos**
- Nodejs
- Uma conta google cloud

**Criação de service account**
```bash
gcloud config set compute/region southamerica-east1
gcloud services enable workflows.googleapis.com
gcloud iam service-accounts create $SA
gcloud projects add-iam-policy-binding $SA --member "serviceAccount:$SA@$PROJECT.iam.gserviceaccount.com" --role "roles/logging.logWriter"
```

**Provisionamento dos recuros**
```bash
gcloud functions deploy savePokemon --runtime nodejs16 --trigger-http --allow-unauthenticated
gcloud workflows deploy pokedex-workflows --source=pokedex.workflows.yaml --service-account=$SA@$PROJECT.iam.gserviceaccount.com
```

**Execucução dos fluxos**
```bash
gcloud workflows run pokedex-workflows --data="{\""pokemon\"":\""pikachu\""}"
gcloud workflows run pokedex-workflows --data="{\""pokemon\"":\""bulbasaur\""}"
```

**Referências**
- https://www.opus-software.com.br/arquitetura-de-microsservicos-em-camadas/
- https://cloud.google.com/workflows/docs/create-workflow-gcloud?hl=pt-br#yaml
- https://cloud.google.com/workflows/docs/migrate-from-step-functions#:~:text=One%20key%20difference%20is%20that,information%2C%20see%20Conditions%20and%20Steps.
- https://medium.com/cwi-software/introdu%C3%A7%C3%A3o-%C3%A0-integra%C3%A7%C3%A3o-de-sistemas-utilizando-apache-camel-888983e91528


**Seja feliz!**

