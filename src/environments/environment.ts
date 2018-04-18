// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  kibana: {
    graphs: {
      prediction: 'http://ec2-13-209-26-201.ap-northeast-2.compute.amazonaws.com/app/kibana#/visualize/edit/1a067a20-42eb-11e8-bd14-7bd0e7247ef0?embed=true&_g=()'
    }
  }
};
