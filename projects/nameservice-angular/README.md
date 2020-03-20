# NameserviceAngular

This package is an Angular service that helps query the Mailchain API nameservice endpoint.

## Installing

```sh
npm install @mailchain/nameservice-angular --save
```

## Usage

In an Angular component file, eg. `my-component.component.tx`, add the following:

``` ts
  // import the service
  import { NameserviceService } from '@mailchain/nameserver-angular';

  // add to constructor
  constructor(
    private nameserviceService: NameserviceService,
  ) { }

  // add to function and then execute logic in the callback
  async myFunction() {
    const protocol = "ethereum" // change accordingly or use function params
    const network = "mainnet" // change accordingly or use function params

    const obs = await this.nameserviceService.resolveName(
      protocol,
      network,
      value
    )

    obs.subscribe(obs => {
      console.log(obs['body']) // Expect: { address: "0x1234....", status: 0}
    })
  }

  // or execute as async function
  myFunction() {
    const protocol = "ethereum" // change accordingly or use function params
    const network = "mainnet" // change accordingly or use function params

    this.nameserviceService.resolveName(
      protocol,
      network,
      value
    ).subscribe(obs => {
      console.log(obs['body']) // Expect: { address: "0x1234....", status: 0}
    })
  }

```

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

## Code scaffolding

Run `ng generate component component-name --project nameservice-angular` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project nameservice-angular`.
> Note: Don't forget to add `--project nameservice-angular` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build nameservice-angular` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build nameservice-angular`, go to the dist folder `cd dist/nameservice-angular` and run `npm publish`.

## Running unit tests

Run `ng test nameservice-angular` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
