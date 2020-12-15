(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{107:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return r})),t.d(a,"metadata",(function(){return c})),t.d(a,"rightToc",(function(){return s})),t.d(a,"default",(function(){return l}));var n=t(3),o=t(7),i=(t(0),t(141)),r={id:"2_cassandra_configuration",title:"Cassandra Configuration",sidebar_label:"Cassandra Configuration"},c={unversionedId:"3_configuration_deployment/2_cassandra_configuration",id:"3_configuration_deployment/2_cassandra_configuration",isDocsHomePage:!1,title:"Cassandra Configuration",description:"Cassandra bootstrap",source:"@site/docs/3_configuration_deployment/5_cassandra_configuration.md",slug:"/3_configuration_deployment/2_cassandra_configuration",permalink:"/casskop/docs/3_configuration_deployment/2_cassandra_configuration",editUrl:"https://github.com/Orange-OpenSource/casskop/edit/master/website/docs/3_configuration_deployment/5_cassandra_configuration.md",version:"current",sidebar_label:"Cassandra Configuration",sidebar:"docs",previous:{title:"Cluster topology - Cassandra rack aware deployments",permalink:"/casskop/docs/3_configuration_deployment/4_cluster_topology"},next:{title:"Sidecars",permalink:"/casskop/docs/3_configuration_deployment/5_sidecars"}},s=[{value:"Cassandra bootstrap",id:"cassandra-bootstrap",children:[{value:"Initcontainer 1 : init-config",id:"initcontainer-1--init-config",children:[]},{value:"Initcontainer 2 : bootstrap",id:"initcontainer-2--bootstrap",children:[]}]},{value:"Nodes per rack",id:"nodes-per-rack",children:[]},{value:"Configuration override using configMap",id:"configuration-override-using-configmap",children:[{value:"Configuration pre_run.sh script",id:"configuration-pre_runsh-script",children:[]}]},{value:"JVM options",id:"jvm-options",children:[{value:"Memory",id:"memory",children:[]},{value:"GarbageCollector output",id:"garbagecollector-output",children:[]}]},{value:"Authentication and authorizations",id:"authentication-and-authorizations",children:[]}],p={rightToc:s};function l(e){var a=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"cassandra-bootstrap"},"Cassandra bootstrap"),Object(i.b)("p",null,"The configuration of the Cassandra image has been delegated to two init-containers that are executed prior to the Cassandra\ncontainer when the pod is started."),Object(i.b)("p",null,"There is a specific bootstrap image that is build from the docker directory and contains all required files or scripts\nto work with CassKop."),Object(i.b)("h3",{id:"initcontainer-1--init-config"},"Initcontainer 1 : init-config"),Object(i.b)("p",null,"The init container is responsible for the following actions :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"copy the default Cassandra configuration from user's provided Cassandra image.")),Object(i.b)("p",null,"Configuration:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The init-config container is by default the baseImage Cassandra image that can be changed using\n",Object(i.b)("inlineCode",{parentName:"li"},"Spec.initContainerImage"),"."),Object(i.b)("li",{parentName:"ul"},"The default command executed by the init-container is:")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cp -vr /etc/cassandra/* /bootstrap\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"This command can be changed using  ",Object(i.b)("inlineCode",{parentName:"li"},"Spec.initContainerCmd"))),Object(i.b)("h3",{id:"initcontainer-2--bootstrap"},"Initcontainer 2 : bootstrap"),Object(i.b)("p",null,"The bootstrap Container :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"applying files and additional jar from the bootstrap image to the default configuration"),Object(i.b)("li",{parentName:"ul"},"applying the user's configmap custom configuration (if any) on top of the default configuration"),Object(i.b)("li",{parentName:"ul"},"modifying the configuration to be suitable to run with Casskop:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"update cluster name"),Object(i.b)("li",{parentName:"ul"},"configure dc/rack properties"),Object(i.b)("li",{parentName:"ul"},"applying seedlist"),Object(i.b)("li",{parentName:"ul"},"add cassandra exporter and jolokia agent"),Object(i.b)("li",{parentName:"ul"},"..")))),Object(i.b)("p",null,"We provide the bootstrap image, but you can change it using ",Object(i.b)("inlineCode",{parentName:"p"},"Spec.bootstrapImage")," but you need to comply with the\nrequired actions, see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Orange-OpenSource/casskop/tree/master/docker/bootstrap"}),"Bootstrap"),"."),Object(i.b)("h2",{id:"nodes-per-rack"},"Nodes per rack"),Object(i.b)("p",null,"One of the requirements for CassKop is to always keep the same number of nodes in each of its racks per Cassandra DCs. The number of nodes used for the Cassandra Cluster is configured using the ",Object(i.b)("inlineCode",{parentName:"p"},"CassandraCluster.spec.nodesPerRacks"),"\nproperty."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"If you have not specify a Cluster Topology, then you'll have a default datacenter named ",Object(i.b)("inlineCode",{parentName:"p"},"dc1")," and a default rack named\n",Object(i.b)("inlineCode",{parentName:"p"},"rack1"))),Object(i.b)("p",null,"CassKop will keep the same number of nodes in each Cassandra rack as it is a good practice for Cassandra."),Object(i.b)("p",null,"You can define different numbers of replicas for racks in different Cassandra DataCenters using the ",Object(i.b)("inlineCode",{parentName:"p"},"nodesPerRacks")," property at the datacenter level. (in ",Object(i.b)("inlineCode",{parentName:"p"},"CassandraCluster.spec.topology.dc[<idx>].nodesPerRacks"),"). If\nspecified on the datacenter level, this parameter takes priority over the global ",Object(i.b)("inlineCode",{parentName:"p"},"CassandraCluster.spec.nodesPerRacks"),"."),Object(i.b)("p",null,"Example:\nexample to scale up the nodesPerRacks in DC2 :"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"  topology:\n    dc:\n      - name: dc1\n        rack:\n          - name: rack1\n          - name: rack2\n      - name: dc2\n        nodesPerRacks: 3        <--- We increase by one this value\n        rack:\n          - name: rack1\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The number of Cassandra nodes will be the multiplication of the number of racks * the nodesPerRacks value.")),Object(i.b)("p",null,"If we changes on of these properties then CassKop will trigger either a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/casskop/docs/5_operations/1_cluster_operations#scaleup"}),"ScaleUp"),"\nor a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/casskop/docs/5_operations/1_cluster_operations#scaledown"}),"ScaleDown")," operation."),Object(i.b)("h2",{id:"configuration-override-using-configmap"},"Configuration override using configMap"),Object(i.b)("p",null,"CassKop allows you to customize the configuration of Apache Cassandra nodes by specifying a dedicated ",Object(i.b)("inlineCode",{parentName:"p"},"ConfigMap"),"\nname in the ",Object(i.b)("inlineCode",{parentName:"p"},"CassandraCluster.spec.configMapName")," containing configuration files to be overwritten above the default\nconfiguration files of the dedicated Docker Image."),Object(i.b)("p",null,"We have a specific Cassandra Docker image startup script that will overwrite each file in the directory\n",Object(i.b)("inlineCode",{parentName:"p"},"/etc/cassandra"),", from the one specified in the configMap if they exist."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You can surcharge any files in the docker image ",Object(i.b)("inlineCode",{parentName:"p"},"/etc/cassandra")," with the ConfigMap.")),Object(i.b)("p",null,"Typical overwriting files may be :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"cassandra.yaml"),Object(i.b)("li",{parentName:"ul"},"jvm.options"),Object(i.b)("li",{parentName:"ul"},"specifying a pre_run.sh script")),Object(i.b)("p",null,"See the example below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: cassandra-configmap-v1\ndata:\n\n  pre_run.sh: |-\n    echo "  ** this is pre_run.sh script executed before run.sh **"\n    #Examples:\n    echo "Change default Authenticator & Authorizer"\n    sed -ri \'s/(authenticator:).*/\\1 PasswordAuthenticator/\' /etc/cassandra/cassandra.yaml\n    sed -ri \'s/(authorizer:).*/\\1 CassandraAuthorizer/\' /etc/cassandra/cassandra.yaml\n    #test "$(hostname)" == \'cassandra-demo-dc1-rack2-0\' && echo "update param" && sed -i \'s/windows_timer_interval: 1/windows_timer_interval: 2/\' /etc/cassandra/cassandra.yaml\n    #test "$(hostname)" == \'cassandra-demo-dc1-rack3-0\' && echo "-Dcassandra.replace_address_first_boot=172.31.183.209" > /etc/cassandra/jvm.options\n    #test "$(hostname)" == \'cassandra-demo-dc2-rack1-0\' && echo "-Dcassandra.override_decommission=true" > /etc/cassandra/jvm.options\n    echo "  ** end of pre_run.sh script, continue with run.sh **"\n  post_run.sh: |-\n    echo "Check Configured seeds by bootstrap"\n    grep "seeds:" /etc/cassandra/cassandra.yaml\n')),Object(i.b)("p",null,"You can create the ConfigMap above from the repo:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'kubectl apply -f config/cassandra-configmap-v1.yaml\nconfigmap "cassandra-configmap-v1" created\n')),Object(i.b)("p",null,"Now you can add the ",Object(i.b)("inlineCode",{parentName:"p"},"configMapName: cassandra-configmap-v1")," to the Spec section of your CassandraCluster definition\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Orange-OpenSource/casskop/tree/master/samples/cassandracluster.yaml"}),"example")),Object(i.b)("p",null,"If you edit the ConfigMap it won't be detected neither by CassKop nor by the statefulsets/pods (unless you reboot the\npods).\nIt is recommended for configuration changes, to version the configmap and to create apply new configmap in the CRD, this\nwill trigger a rollingRestart of the whole cluster applying the new configuration."),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"each time you specify a new configMap CassKop will start a ",Object(i.b)("inlineCode",{parentName:"p"},"rollingUpdate")," of all nodes\nin the cluster. more info on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/casskop/docs/5_operations/1_cluster_operations#updateconfigmap"}),"UpdateConfigMap")))),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"At this time CassKop won't allow you to specify only excerpt of the configurations files, your\nConfigMap ",Object(i.b)("strong",{parentName:"p"},"MUST")," contain valid and complete configuration files"))),Object(i.b)("h3",{id:"configuration-pre_runsh-script"},"Configuration pre_run.sh script"),Object(i.b)("p",null,"In case you need to make some specific actions on a particular node, such as make use of the ",Object(i.b)("strong",{parentName:"p"},"CASSANDRA_REPLACE_NODE"),"\nvariable, you can use the pre_run.sh script in the ConfigMap. If present, the cassandra docker will execute this script\nprior to the ",Object(i.b)("inlineCode",{parentName:"p"},"run.sh")," script from the docker image."),Object(i.b)("p",null,"Example of a configMap with the pre_run.sh script :"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: cassandra-configmap-pre-run\ndata:\n  pre_run.sh: |-\n    echo "** this is a pre-scrip for run.sh that can be edit with configmap"\n    test "$(hostname)" == \'cassandra-demo-dc1-rack1-0\' && export CASSANDRA_REPLACE_NODE=10.233.93.174\n    echo "** end of pre_run.sh script, continue with run.sh"\n')),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"In the case you use the configmap for one-time specific action, don't forget to edit again to remove\nthe specific treatment once it is no more needed."))),Object(i.b)("h2",{id:"jvm-options"},"JVM options"),Object(i.b)("h3",{id:"memory"},"Memory"),Object(i.b)("p",null,"Apache Cassandra is running inside a Java Virtual Machine (JVM). JVM has many configuration options to optimize the\nperformance for different platforms and architectures."),Object(i.b)("p",null,"CassKop allows configuring these values by adding a ",Object(i.b)("inlineCode",{parentName:"p"},"jvm.options")," in the user ",Object(i.b)("inlineCode",{parentName:"p"},"ConfigMap"),"."),Object(i.b)("p",null,"The default value used for ",Object(i.b)("inlineCode",{parentName:"p"},"-Xmx")," depends on whether there is a memory request configured for the container :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"If there is a memory request, the JVM's maximum memory must be set to a value corresponding to the limit.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'When there is no memory request, CassKop will limit it to "2048M".')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"set the memory request and the memory limit to the same value, so that the pod is in guarantee mode"))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"CassKop will automatically compute the env var CASSANDRA_MAX_HEAP which is used to define ",Object(i.b)("inlineCode",{parentName:"p"},"-Xms")," and ",Object(i.b)("inlineCode",{parentName:"p"},"-Xmx")," in the\n",Object(i.b)("inlineCode",{parentName:"p"},"/run.sh")," docker image script, from 1/4 of container Memory Limit.")),Object(i.b)("h3",{id:"garbagecollector-output"},"GarbageCollector output"),Object(i.b)("p",null,"We have a specific parameter in the CRD ",Object(i.b)("inlineCode",{parentName:"p"},"spec.gcStdout: true/false")," which specify if we want to send the JVM garbage collector logs\nin the stdout of the container or inside a specific file in the container."),Object(i.b)("p",null,"Default value is true, so it sends GC logs in stdout along with cassandra's logs."),Object(i.b)("h2",{id:"authentication-and-authorizations"},"Authentication and authorizations"),Object(i.b)("p",null,"CassKop uses Jolokia from the cassandra-image to communicate. We can add\nauthentication on Jolokia by defining a secret :"),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),"apiVersion: v1\nkind: Secret\nmetadata:\n  name: jolokia-auth\ntype: Opaque\ndata:\n  password: TTBucDQ1NXcwcmQ=\n  username: am9sb2tpYS11c2Vy\n")),Object(i.b)("p",null,"and in the CRD you will define ",Object(i.b)("inlineCode",{parentName:"p"},"spec.imageJolokiaSecret")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),"...\n  imageJolokiaSecret:\n    name: jolokia-auth\n...\n")),Object(i.b)("p",null,"CassKop will propagate the secrets in Cassandra so that it can configure Jolokia and use it to connect."))}l.isMDXComponent=!0},141:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return m}));var n=t(0),o=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var a=o.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},b=function(e){var a=l(e.components);return o.a.createElement(p.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},u=o.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(t),u=n,m=b["".concat(r,".").concat(u)]||b[u]||d[u]||i;return t?o.a.createElement(m,c(c({ref:a},p),{},{components:t})):o.a.createElement(m,c({ref:a},p))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,r=new Array(i);r[0]=u;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var p=2;p<i;p++)r[p]=t[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);