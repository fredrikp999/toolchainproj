<H1> Toolchain example </H1>
This project aims to be a reference for setting up development environment
including the complete toolchain. Examples of a couple of microservices running in K8s


<H2>Development environment - execution</H2>
For quick execution, a VM is setup with the help of Vagrant. This contains a base os and the needed tools such as node & modules, git etc.

<H2>Development environment - Coding/IDE</H2>
Visual studio code is used from the host (PC/Mac). Source files are kept in a folder which is synced with the Vagrant VM

<H2>Service 1: jokes</H2>
An example back-end service developed in nodejs using the express module. Has a couple of end-points. API described in OpenAPI

<H2>Service 2: jokes front-end</H2>
Front-end service serving webpages with jokes retreived from the jokes service


<H2>Folder structure</H2>
- Root  

- jokes-ms
  - code (source code. javascript, dockerfile)
  - data (data files, e.g. jokes library)
  - doc (documentation, e.g. OpenAPI spec)
  - test (tests and CI)
- jokesfrontend
  - code
  - data
  - doc
  - test
- devenv (vagrant VM setup)
- kubernetes ()
- test (integration level tests)
- images (the built docker images)



