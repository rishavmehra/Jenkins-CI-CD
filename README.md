# Jenkins CI/CD
## CI/CD pipeline for integrating with Jenkins & deploy the code on GCP Server

In this Project, we will build a simple Node.js app that hosted on GCP VM instance. Furthermore, we are going to configure automation server and host Jenkins on a separate GCP VM instance.Jenkins will help us to automate the CI/CD process. For every code change from our Node.js app repository.

#### In this Project?
* VM Setup (GCP)
* Installing Jenkins
* Configuring Firewall Settings
* Complete Jenkins First Setup


### VM Setup:

- Log into your GCP console search for and Compute Engine

![alt text](https://github.com/rishavmehra/Jenkins-CI-CD/blob/main/images/compute-Engine.png)

- Select Create Instance
![alt text](https://github.com/rishavmehra/Jenkins-CI-CD/blob/main/images/instance.png)

- Create Instance with ec2-medium(2 vCPU, 4GB Memory)</br>
Now, change *Boot disk* **Debian** GNU/Linux 10 (buster) to  **Ubuntu** 18.04 LTS
- **Access scopes** = Allow full access to all Cloud APIs
- **Firewall** check both http and https traffic</br>
  Click on **Create** 

Come back to Compute Engine Dashboard and do *SSH*(Secure Shell) with your instance. After SSH, we have to install Jenkins in our instance.</br>
first thing first we need to install java in our instance because jenkins bulid in java.</br>
To install java copy paste these command in your your ubuntu machine
```
sudo apt update
sudo apt install openjdk-8-jdk openjdk-8-jre
java -version
``` 
Now we are going to install jenkins in our ubuntu

This is the Debian package repository of Jenkins to automate installation and upgrade. To use this repository, first add the key to your system:

```
 curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo tee \
    /usr/share/keyrings/jenkins-keyring.asc > /dev/null 
```
Then add a Jenkins apt repository entry:
```
  echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
    https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
    /etc/apt/sources.list.d/jenkins.list > /dev/null
```

Update your local package index, then finally install Jenkins:

```
  sudo apt-get update
  sudo apt-get install jenkins
```

Now we are good to go
