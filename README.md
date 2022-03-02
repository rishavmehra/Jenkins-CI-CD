# Jenkins CI/CD
## CI/CD pipeline for integrating with Jenkins & deploy the code on GCP Server

In this Project, we will build a simple Node.js app that hosted on GCP VM instance. Furthermore, we are going to configure automation server and host Jenkins on a separate GCP VM instance.Jenkins will help us to automate the CI/CD process. For every code change from our Node.js app repository.

#### In this Project?
* VM Setup (GCP)
* Installing Jenkins
* Configuring Firewall Settings
* Complete Jenkins First Setup


### VM Setup:

* Log into your GCP console search for and Compute Engine

![alt text](https://github.com/rishavmehra/Jenkins-CI-CD/blob/main/images/compute-Engine.png)

* Select Create Instance
![alt text](https://github.com/rishavmehra/Jenkins-CI-CD/blob/main/images/instance.png)

Create Instance with ec2-medium(2 vCPU, 4GB Memory)
Now, change *Boot disk* Debian GNU/Linux 10 (buster) to  Ubuntu 18.04 LTS