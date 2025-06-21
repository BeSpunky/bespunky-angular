---
applyTo: '**'
---
This repo is the home of various Angular related libraries produced by BeSpunky as open source projects

Each library has its official site with docs, showcase and live examples

This is an Nx monorepo

Most libraries in this repo will be Angular libraries, with possible exception of shared utils or other pure TypeScript/JavaScript tools

Always consult Nx MCP tools and [nx instructions file](./.github/instructions/nx.instructions.md)

Always use the latest Angular API
ALWAYS Consult the Angular website for the latest API

These will help you navigate the latest Angular practices:
- https://angular.dev/llms.txt - A mapping of concepts to their related docs on the site
- https://angular.dev/llms-full.txt - A more elaborate explenation of Angular practices

Libraries are designed to be publishable

Each library is an installable npm package with secondary entrypoints for tree-shakability

Main projects (libraries):
- angular-google-maps - An amazing wrapper of the native Google Maps API for Angular
- angular-zen - General reusable tools for common tasks when working with Angular
- angular-cdk - Tools for creating components
