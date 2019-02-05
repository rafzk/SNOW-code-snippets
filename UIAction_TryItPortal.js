/*
https://community.servicenow.com/community?id=community_blog&sys_id=1f6d2e29dbd0dbc01dcaf3231f9619e0
*/

Requeriment: Try It (Portal) ui action/button

Description: Great and simple way to quick have a look into the portal view without having two windows and reloading it on one of them 

Action Name: try_it_catalog
Show insert: Yes
Show update: Yes

Condition:
current.active == true && current.canWrite()&&new CatalogItemTypeProcessor().canTryIt(current.getRecordClassName()) && !(current.getRecordClassName() == "sc_cat_item_content" && current.content_type == "external")

Script:
if (current.changes())
  current.update();

//var url = GlideappCatalogURLGenerator.getItemBaseURLFromGR(current);

var url = '/sp?id=sc_cat_item&sys_id=' + current.sys_id.toString();
gs.setRedirect(url);
