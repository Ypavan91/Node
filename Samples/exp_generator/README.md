Express:

This is a demo project which is installed by using express-generator. It uses the application generator tool express, to quickly create an application skeleton.

Installation:

There are two ways you can install the Express in your system i.e. globally and locally.

For globally : npm install -g express
For locally or In project installation : npm install --save express

Setup

Next we are going to setup express project. Run command "express .", if express is not installed globally you might get an error like 'express' is not recognized as an internal or external command, operable program or batch file.

To fix the above error either you need to install express globally using command npm install -g express or you can create a cmd file (filename "express") with the below content in the same directory.

@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\node_modules\express-generator\bin\express" %*) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\node_modules\express-generator\bin\express" %*
)

Then run "express .", it will ask you destination is not empty, continue? [y/N]. Type y. It will create your app with the following folder structure.

Then we need to run npm install to install the dependencies.

Run

To run the app use npm start and visit http://localhost:3000.
