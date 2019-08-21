# Simple-SharePoint-Metrics

We can use SharePoint Search, to provide a simple metrics overview about the usage of our site and content. This sample will show the steps.

First create a new library named "Scripts" in the site collection that should be used. Copy the content of the folder "Header Scripts" of this repository to this new library.

Upload the js-files from the folder "Display Templates" to folder "Display Templates/Search" in the Masterpage gallery. You can upload them directly to this folder or you can create a separate subfolder (I prefer using a subfolder). After the upload, set the metadata for each of the js-files as shown in the following image.

<img src="https://github.com/OlafD/Simple-SharePoint-Metrics/blob/master/img/Display%20Template%20Metadata.PNG" />

The value for the field "Managed Property Mappings" could be taken from the corresponding html-files.

Next create a new Wiki Page in the Pages library. Put a Search Box webpart, a Content Editor webpart and a Search Results webpart to this new page.

<img src="https://github.com/OlafD/Simple-SharePoint-Metrics/blob/master/img/Wikipage-Webparts.PNG" />

Configure the Content Editor webpart to use the corresponding header-file from the library "Scripts" for your needs and set the webpart to not show a title.

Configure the Search Results webpart to use the query "Path:{searchboxquery}" and configure the Display Templates section to use one of the uploaded display templates, corresponding to the used header-file in the Content Editor webpart.

<img src="https://github.com/OlafD/Simple-SharePoint-Metrics/blob/master/img/Configure%20Display%20Template.PNG" />

Save the wiki page, enter a site url in the search box and click the search icon. This will show the results for this site and the content below the entered web address.

<img src="https://github.com/OlafD/Simple-SharePoint-Metrics/blob/master/img/Sample.PNG" />

By configuring the Search Results webpart with additional query settings, it is possible to limit the search results. For example to show just the usage of the Site Pages.
