# Jenkins CI/CD
## CI/CD pipeline for integrating with Jenkins & deploy the code on GCP Server

In this Project, we will build a simple Node.js app that hosted on GCP VM instance. Furthermore, we are going to configure automation server and host Jenkins on a separate GCP VM instance.Jenkins will help us to automate the CI/CD process. For every code change from our Node.js app repository.

#### In this Project?
* VM Setup (GCP)
* Installing Jenkins
* Configuring Firewall Settings
* Complete Jenkins First Setup


### VM Setup:

- Log into your GCP console search for Compute Engine

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
- Now we are going to install jenkins in our ubuntu

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
  clear
  service jenkins status
```
![alt text](https://github.com/rishavmehra/Jenkins-CI-CD/blob/main/images/jenkins.png)

Now we are good to **GO**

---

To access the Jenkins dashboard use this your instance IP and port 8080 "http://Instance-IP:8080"

![alt text](https://github.com/rishavmehra/Jenkins-CI-CD/blob/main/images/admin.png)


Run this Command to know your Aadministrator Password:

```
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```
- Now in the next step choose -> install suggested plugins and wait for the plugins to install.

![alt text](https://github.com/rishavmehra/Jenkins-CI-CD/blob/main/images/plugins.png)

Next create first admin user and provide your admin credentials.(You can use any credentials, I'm using admin)
![alt text](https://github.com/rishavmehra/Jenkins-CI-CD/blob/main/images/createuser.png)

---

NOW, We are in the Jenkins Dashboard.
 We are going to deploy NodeJS app in Jenkins.

![alt text](https://github.com/rishavmehra/Jenkins-CI-CD/blob/main/images/image.png)

Install some additional Plugins in jenkins like NodeJs plugins. TO install this plugins follow these steps:
- Click on **Manage Jenkins**
- Next, click on **Manage Plugins**
- Go to Available, and search for ***NodeJS***
- install this Plugins without restart

After installing *NoedJS* plugin, go to Global Tool Configuration and follow these steps:
- Go to NodeJS section
- Click Add NodeJS to add NodeJS installation options that we want to provide to project which will use it. For now, we will add the latest version of NodeJS provided by Jenkins and another version
- Click Save
  ![alt text](https://github.com/rishavmehra/Jenkins-CI-CD/blob/main/images/nodever.png)

### Create a new Jenkins Job
- Select New Item sidebar menu on Jenkins
- Type “JenkinsCICD” for the Jenkins Job’s name
- Select Freestyle project

![alt text](https://github.com/rishavmehra/Jenkins-CI-CD/blob/main/images/newitem.png)
![alt text](https://github.com/rishavmehra/Jenkins-CI-CD/blob/main/images/newitem2.png)

- Click OK
- On Source Code Management section, paste “node-app” GitHub repository url to Repository URL field. You could specify which branch of the repository you want to use to build your project. Now, we will select master branch
![alt text](https://github.com/rishavmehra/Jenkins-CI-CD/blob/main/images/git.png)

- On Build Enviroment, check on the *Provide Node & npm bin/ folder to PATH*
  
![alt text](https://github.com/rishavmehra/Jenkins-CI-CD/blob/main/images/builden.png)

- Now click on ***Build***, and these commands
```
echo "hey Rishav!"
npm install
npm run serve
```
![alt text](https://github.com/rishavmehra/Jenkins-CI-CD/blob/main/images/build.png)

- Click on *Save*
- If you want to do the Build manually you could click on Build Now which is on the sidebar menu of your JenkinsCICD project
  
  ![alt text](https://github.com/rishavmehra/Jenkins-CI-CD/blob/main/images/final.png)

### Reuslt:
http://Instance-IP:8081
  ![alt text](https://github.com/rishavmehra/Jenkins-CI-CD/blob/main/images/final2.png)