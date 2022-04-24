@echo off
cls

SET CURR_DIR=%cd%

SET TOMCAT_WEBAPP_DIR=C:\CUSTOM_INSTALLATION\apache-tomcat-8.5.72-test\webapps

call mvn clean install

copy %CURR_DIR%\bce-gui\target\bce-gui.war %TOMCAT_WEBAPP_DIR%\bce-gui.war /y
copy %CURR_DIR%\Exporter\target\Exporter.war %TOMCAT_WEBAPP_DIR%\Exporter.war /y

cd %CURR_DIR%