<H1>Jenkins setup</H1>
This is the Jenkins setup. Based on default jenkins/jenkins docker image with some additions

<H2>Building</H2>
To build the image:
> docker build -t skonk/myjenkins .

<H2>Running</H2>
> docker run -p 8080:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home skonk/myjenkins
> (add -d for detached)

This will automatically create a 'jenkins_home' docker volume on the host machine, that will survive the container stop/restart/deletion. See: https://github.com/jenkinsci/docker/blob/master/README.md


<H2>Setting up</H2>
Initial admin passwork found at: /var/jenkins_home/secrets/initialAdminPassword. Log in to localhost:8080 to set it up