(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{185:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return r})),n.d(a,"metadata",(function(){return i})),n.d(a,"rightToc",(function(){return c})),n.d(a,"default",(function(){return d}));var t=n(2),o=n(9),s=(n(0),n(199)),r={id:"4_cluster_topology",title:"Cluster topology - Cassandra rack aware deployments",sidebar_label:"Cluster topology"},i={id:"3_configuration_deployment/4_cluster_topology",title:"Cluster topology - Cassandra rack aware deployments",description:"CassKop rack awareness feature helps to spread the Cassandra nodes replicas among different racks in the",source:"@site/docs/3_configuration_deployment/4_cluster_topology.md",permalink:"/casskop/docs/3_configuration_deployment/4_cluster_topology",editUrl:"https://github.com/Orange-OpenSource/casskop/edit/master/website/docs/3_configuration_deployment/4_cluster_topology.md",sidebar_label:"Cluster topology",sidebar:"docs",previous:{title:"Storage",permalink:"/casskop/docs/3_configuration_deployment/3_storage"},next:{title:"Cassandra Configuration",permalink:"/casskop/docs/3_configuration_deployment/2_cassandra_configuration"}},c=[{value:"Quick overview",id:"quick-overview",children:[]},{value:"Kubernetes nodes labels",id:"kubernetes-nodes-labels",children:[]},{value:"Configuring pod scheduling",id:"configuring-pod-scheduling",children:[{value:"Cassandra node placement in the Kubernetes cluster",id:"cassandra-node-placement-in-the-kubernetes-cluster",children:[]},{value:"Configuring hard antiAffinity in Cassandra cluster",id:"configuring-hard-antiaffinity-in-cassandra-cluster",children:[]}]},{value:"Cassandra notion of dc and racks",id:"cassandra-notion-of-dc-and-racks",children:[]},{value:"Configure the CassandraCluster CRD for dc &amp; rack",id:"configure-the-cassandracluster-crd-for-dc--rack",children:[]},{value:"How CassKop configures dc and rack in Cassandra",id:"how-casskop-configures-dc-and-rack-in-cassandra",children:[]}],l={rightToc:c};function d(e){var a=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},l,n,{components:a,mdxType:"MDXLayout"}),Object(s.b)("p",null,"CassKop rack awareness feature helps to spread the Cassandra nodes replicas among different racks in the\nkubernetes infrastructure. Enabling rack awareness helps to improve availability of Cassandra nodes and the data they\nare hosting, through correct use of Cassandra's replication factor."),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"Rack might represent an availability zone, data center or an actual physical rack in your data center."))),Object(s.b)("h2",{id:"quick-overview"},"Quick overview"),Object(s.b)("p",null,"CassKop awareness can be configured in the ",Object(s.b)("inlineCode",{parentName:"p"},"CassandraCluster.spec.topology")," section."),Object(s.b)("p",null,"If the ",Object(s.b)("inlineCode",{parentName:"p"},"topology")," section is missing then CassKop will create a default Cassandra DC ",Object(s.b)("inlineCode",{parentName:"p"},"dc1")," and a default Rack\n",Object(s.b)("inlineCode",{parentName:"p"},"rack1"),".\nIn this case, CassKop will not use specific kubernetes nodes labels for placement and in consequence the cluster is\nnot rack aware."),Object(s.b)("p",null,"In the ",Object(s.b)("inlineCode",{parentName:"p"},"topology")," section we can declare all the Cassandra Datacenters (DCs) and Racks, and for each of them we provide\nlabels which will need to match the labels assigned to the Kubernetes cluster nodes."),Object(s.b)("p",null,"Each of our rack targets Kubernetes nodes having the combination of labels defined in the ",Object(s.b)("inlineCode",{parentName:"p"},"dc")," section and in the ",Object(s.b)("inlineCode",{parentName:"p"},"rack"),"\nsection. The labels are used in Kubernetes when scheduling the Cassandra pods to kubernetes nodes.\nThis has the effect of spreading the Cassandra nodes across physical zones."),Object(s.b)("div",{className:"admonition admonition-important alert alert--info"},Object(s.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(s.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"CassKop doesn't rely on specific labels and will adapt to any topology you may define in your\ndatacenter or cloud provider."))),Object(s.b)("h2",{id:"kubernetes-nodes-labels"},"Kubernetes nodes labels"),Object(s.b)("p",null,"Cassandra will run on Kubernetes nodes, which may already have some labels representing their geographic topology."),Object(s.b)("p",null,"Example :"),Object(s.b)("p",null,Object(s.b)("img",Object(t.a)({parentName:"p"},{src:"/static/slides/assets/kubernetes-operators/topology-custom-example.png",alt:null}))),Object(s.b)("p",null,"Example of labels for node001 in our dc:"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"location.myorg.com/bay=1\nlocation.myorg.com/building=building\nlocation.myorg.com/label=SC_K08_-_KUBERNETES\nlocation.myorg.com/room=Salle_1\nlocation.myorg.com/site=SiteName\nlocation.myorg.com/street=Rue_3\n")),Object(s.b)("p",null,"In the cloud the labels used for topology may better look like :"),Object(s.b)("p",null,Object(s.b)("img",Object(t.a)({parentName:"p"},{src:"/static/slides/assets/kubernetes-operators/topology-gke-example.png",alt:null}))),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"beta.kubernetes.io/fluentd-ds-ready=true\nfailure-domain.beta.kubernetes.io/region=europe-west1\nkubernetes.io/hostname=gke-demo-default-pool-0c404f82-0100\nbeta.kubernetes.io/arch=amd64\nfailure-domain.beta.kubernetes.io/zone=europe-west1-d\nbeta.kubernetes.io/os=linux\ncloud.google.com/gke-os-distribution=cos\nbeta.kubernetes.io/instance-type=n1-standard-4\ncloud.google.com/gke-nodepool=default-pool\n")),Object(s.b)("p",null,"The idea is to use the Kubernetes nodes labels which refer to their physical position in the datacenters to allow or\nnot Cassandra Pods placement."),Object(s.b)("p",null,"Because CassKop manages its Cassandra node pods through\n",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"}),"statefulsets"),",\neach pod will inherit the placement configuration of its parent statefulset.\nIn order to place pods on different racks, we need to associate a new statefulset with specialized node\nplacement constraints for each Cassandra rack we define."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Because the AZ feature was not yet available for statefulsets when we began to develop CassKop, we chose to\nimplement 1 statefulset for 1 Cassandra Rack. Hopefully, we will be able to benefit of improvements about the\ntopology-aware dynamic provisioning feature proposed in future version of K8S (more information here :\n",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"https://kubernetes.io/blog/2018/10/11/topology-aware-volume-provisioning-in-kubernetes/"}),"https://kubernetes.io/blog/2018/10/11/topology-aware-volume-provisioning-in-kubernetes/"))),Object(s.b)("p",null,"See an example of configuration with topology : ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"/samples/cassandracluster-demo-gke.yaml"}),"cassandracluster-demo-gke.yaml")),Object(s.b)("h2",{id:"configuring-pod-scheduling"},"Configuring pod scheduling"),Object(s.b)("p",null,"When two applications are scheduled to the same Kubernetes node, both applications might use the same resources like\ndisk I/O and impact performances. It may be recommended to schedule Cassandra nodes in a way that avoids sharing nodes\nwith other critical workloads. Using the right nodes or dedicated a set of nodes only for cassandra are the best ways to\navoid such problems."),Object(s.b)("p",null,Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/configuration/assign-pod-node/"}),"Placement of Pods")," in a Statefulsets are done\nusing ",Object(s.b)("strong",{parentName:"p"},"NodeAffinity")," and ",Object(s.b)("strong",{parentName:"p"},"PodAntiAffinity")," :"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(t.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/configuration/assign-pod-node/"}),"nodeAffinity")," will be used to select specific\nnodes which have specific targeted labels."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(t.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#affinity-and-anti-affinity"}),"podAntiAffinity")," can\nbe used to ensure that critical applications are never scheduled on the same node.")),Object(s.b)("h3",{id:"cassandra-node-placement-in-the-kubernetes-cluster"},"Cassandra node placement in the Kubernetes cluster"),Object(s.b)("h4",{id:"node-affinity"},"Node affinity"),Object(s.b)("p",null,"To target a Specific Kubernetes group of Nodes CassKop needs to define a specific ",Object(s.b)("strong",{parentName:"p"},"nodeAffinity"),"\nsection in the targeted ",Object(s.b)("inlineCode",{parentName:"p"},"dc-rack")," statefulset to match specific kubernetes nodes labels."),Object(s.b)("p",null,"Example. If we want to deploy our statefulset only on nodes which have these labels :"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"location.myorg.com/site=Valbonne\nlocation.myorg.com/building=HT2\nlocation.myorg.com/room=Salle_1\nlocation.myorg.com/street=Rue_11\n")),Object(s.b)("p",null,"CassKop need to add this section in the Statefulset definition :"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"  affinity:\n    nodeAffinity:\n      requiredDuringSchedulingIgnoredDuringExecution:\n        nodeSelectorTerms:\n          - key: location.myorg.com/building\n            operator: In\n            values:\n            - HT2\n          - key: location.myorg.com/room\n            operator: In\n            values:\n            - Salle_1\n          - key: location.myorg.com/site\n            operator: In\n            values:\n            - Valbonne\n          - key: location.myorg.com/street\n            operator: In\n            values:\n            - Rue_9\n")),Object(s.b)("p",null,"All Pods that will be created from this statefulset will target only nodes which have these 4 labels.\nIf there is no kubernetes nodes available with these labels, then the statefulset will remain stuck in a pending state,\nuntil we correct either labels on nodes, or deployment constraints definition of the statefulset."),Object(s.b)("p",null,"We can also use specific labels to dedicate some kubernetes nodes to some type of work, for instance dedicated some\nnodes for Cassandra."),Object(s.b)("p",null,"You can define custom labels on kubernetes nodes :"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"kubectl label node <your-node> <label-name>=<label-value>\n")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"This is done automatically by combining the labels you specify in the Cassandra CRD definition in the ",Object(s.b)("inlineCode",{parentName:"p"},"Topology"),"\nsection.")),Object(s.b)("h4",{id:"pod-anti-affinity"},"Pod anti affinity"),Object(s.b)("p",null,"If we lose a Kubernetes node, then we may want to limit the impact to loosing only one Cassandra node. Otherwise,\ndepending on the replication factor, we may have a data loss."),Object(s.b)("p",null,"In our CassandraCluster, the statefulset will target a pool of Kubernetes nodes using it's NodeSelector we just saw\nabove.\nAll these Pods will inherit the specific labels from the Statefulset."),Object(s.b)("p",null,'To implement the limitation "one Cassandra Pod per Kubernetes node", we use the pod definition section\n',Object(s.b)("inlineCode",{parentName:"p"},"podAntiAffinity"),". This tells kubernetes that it can't deploy to a Kubernetes node, if a pod having the same labels\nalready exist."),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"    podAntiAffinity:\n      requiredDuringSchedulingIgnoredDuringExecution:\n      - podAffinityTerm:\n          labelSelector:\n            matchLabels:\n              app: cassandracluster\n              cassandracluster: cassandra\n              cluster: k8s.kaas\n          topologyKey: kubernetes.io/hostname\n        weight: 100\n")),Object(s.b)("p",null,"This Tells that we ",Object(s.b)("strong",{parentName:"p"},"Require")," not deploy to a node if a pod already exists with these existing labels."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"This is configured by default by CassKop")),Object(s.b)("h4",{id:"using-dedicated-nodes"},"Using dedicated nodes"),Object(s.b)("p",null,"Cluster administrators can mark selected kubernetes nodes as tainted. Nodes with taints are excluded from regular\nscheduling and normal pods will not be scheduled to run on them. Only services which can tolerate the taint set on the\nnode can be scheduled on it. The only other services running on such nodes will be kubernetes system services such  as\nlog collectors or software defined networks"),Object(s.b)("p",null,"Taints can be used to create dedicated nodes. Running Cassandra on dedicated nodes can have many advantages. There will\nbe no other applications running on the same nodes which could cause disturbance or consume the resources needed  for\nCassandra. That can lead to improved performance and stability."),Object(s.b)("p",null,"Example of tainting a node :"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"kubectl taint node <your-node> dedicated=Cassandra:NoSchedule\n")),Object(s.b)("p",null,"Additionally, add a label to the selected nodes as well"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"kubectl label node <your-node> dedicated=Cassandra\n")),Object(s.b)("p",null,"Pod tolerations like pod annotations can be added to created pods by using the pod entry in the spec section of the cassandracluster object as below :"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),'kind: "CassandraCluster"\n...\nspec:\n  ...\n  pod:\n    tolerations:\n    - key: "dedicated"\n      operator: "Equal"\n      value: "Cassandra"\n      effect: "NoSchedule"\n...\n')),Object(s.b)("div",{className:"admonition admonition-important alert alert--info"},Object(s.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(s.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"toleration must be used with node affinity on the same labels"))),Object(s.b)("h3",{id:"configuring-hard-antiaffinity-in-cassandra-cluster"},"Configuring hard antiAffinity in Cassandra cluster"),Object(s.b)("p",null,"In development environment, we may have other concern than in production and we may allow our cluster to deploy several\nnodes on the same kubernetes nodes."),Object(s.b)("p",null,"The boolean ",Object(s.b)("inlineCode",{parentName:"p"},"hardAntiAffinity")," parameter in ",Object(s.b)("inlineCode",{parentName:"p"},"CassandraCluster.spec")," will define if we want the constraint to be\n",Object(s.b)("strong",{parentName:"p"},"Required")," or ",Object(s.b)("strong",{parentName:"p"},"Preferred")),Object(s.b)("p",null,"If ",Object(s.b)("inlineCode",{parentName:"p"},"hardAntiAffinity=false")," then the podAntiAffinity will be ",Object(s.b)("strong",{parentName:"p"},"preferred")," instead of ",Object(s.b)("strong",{parentName:"p"},"required")," and then kubernetes\nwill try to not put the cassandra node on the kubernetes node ",Object(s.b)("strong",{parentName:"p"},"BUT")," it will allow to do it if it has no other choices."),Object(s.b)("h2",{id:"cassandra-notion-of-dc-and-racks"},"Cassandra notion of dc and racks"),Object(s.b)("p",null,"As we previously see, the Cassandra rack awareness is defined using several Cassandra datacenters ",Object(s.b)("inlineCode",{parentName:"p"},"dc"),"s and ",Object(s.b)("inlineCode",{parentName:"p"},"rack"),"s.\nThe ",Object(s.b)("inlineCode",{parentName:"p"},"CassandraCluster.spec.topology")," section allows us to define the virtual notion of DC & Rack.\nFor each we will define Kubernetes ",Object(s.b)("inlineCode",{parentName:"p"},"labels")," that will be used for pod placement."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"The name and numbers of labels used to define a DC & rack is not defined in advance and will be defined in each\nCassandraCluster manifests, depending on labels presents on Kubernetes Nodes and the required topology")),Object(s.b)("h2",{id:"configure-the-cassandracluster-crd-for-dc--rack"},"Configure the CassandraCluster CRD for dc & rack"),Object(s.b)("p",null,"If the section topology is missing:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"then CassKop will deploy without label constraints to any available kubernetes nodes in the cluster"),Object(s.b)("li",{parentName:"ul"},"there will be only one DC defined named by default ",Object(s.b)("strong",{parentName:"li"},"dc1")),Object(s.b)("li",{parentName:"ul"},"there will be only one Rack defined named by default ",Object(s.b)("strong",{parentName:"li"},"rack1"))),Object(s.b)("p",null,"If the ",Object(s.b)("strong",{parentName:"p"},"topology")," section is defined, this will enable to create specific Cassandra dcs and racks: this creates a\nspecific statefulset for each rack and deploys on Kubernetes nodes matching the desired Node Labels (the concatenation\nof DC labels + Rack labels for each statefulset)"),Object(s.b)("p",null,"Example of topology section:"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"...\n  nodesPerRacks: 3\n...\n  topology:\n    dc:\n      - name: dc1\n        labels:\n          location.k8s.myorg.com/site : Valbonne\n          location.k8s.myorg.com/building : HT2\n        rack:\n          - name: rack1\n            labels:\n              location.k8s.myorg.com/room : Salle_1\n              location.k8s.myorg.com/street : Rue_9\n          - name: rack2\n            labels:\n              location.k8s.myorg.com/room : Salle_1\n              location.k8s.myorg.com/street : Rue_10\n      - name: dc2\n        nodesPerRacks: 4\n        labels:\n          location.k8s.myorg.com/site : Valbonne\n          location.k8s.myorg.com/building : HT2\n        rack:\n          - name: rack1\n            labels:\n              location.k8s.myorg.com/room : Salle_1\n              location.k8s.myorg.com/street : Rue_11\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"This will create 2 Cassandra DC (",Object(s.b)("inlineCode",{parentName:"li"},"dc1")," & ",Object(s.b)("inlineCode",{parentName:"li"},"dc2"),")",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"For DC ",Object(s.b)("inlineCode",{parentName:"li"},"dc1")," it will create 2 Racks : ",Object(s.b)("inlineCode",{parentName:"li"},"rack1")," and ",Object(s.b)("inlineCode",{parentName:"li"},"rack2"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"In each of these Racks there will be 3 Cassandra nodes"),Object(s.b)("li",{parentName:"ul"},"The ",Object(s.b)("inlineCode",{parentName:"li"},"dc1")," will have 6 nodes"))),Object(s.b)("li",{parentName:"ul"},"For DC ",Object(s.b)("inlineCode",{parentName:"li"},"dc2")," it will create 1 Rack : ",Object(s.b)("inlineCode",{parentName:"li"},"rack1"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"the ",Object(s.b)("inlineCode",{parentName:"li"},"dc2")," overwrite the global parameter ",Object(s.b)("inlineCode",{parentName:"li"},"nodesPerRacks=3")," with a value of ",Object(s.b)("inlineCode",{parentName:"li"},"4"),"."),Object(s.b)("li",{parentName:"ul"},"The ",Object(s.b)("inlineCode",{parentName:"li"},"dc2")," will have 4 nodes")))))),Object(s.b)("div",{className:"admonition admonition-important alert alert--info"},Object(s.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(s.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"We want to have the same numbers of Cassandra nodes in each Rack for a dedicated\nDatacenter. We can still have different values for different datacenters."))),Object(s.b)("p",null,"The NodeSelectors labels for each Rack will be the aggregation of labels of the DC and the labels for the Racks :"),Object(s.b)("p",null,"For instance with this example, NodeSelectors labels for ",Object(s.b)("inlineCode",{parentName:"p"},"dc1")," / ",Object(s.b)("inlineCode",{parentName:"p"},"rack2")," will be :"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-text"}),"location.k8s.myorg.com/site : Valbonne\nlocation.k8s.myorg.com/building : HT2\nlocation.k8s.myorg.com/room : Salle_1\nlocation.k8s.myorg.com/street : Rue_10\n")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"The ",Object(s.b)("inlineCode",{parentName:"p"},"dc")," / ",Object(s.b)("inlineCode",{parentName:"p"},"rack")," topology definition is generic and does not rely on particular labels. It uses the ones\ncorresponding to your needs.")),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"The names for the dc and rack must be lowercase and respect Kubernetes DNS naming which follow ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"http://tools.ietf.org/html/rfc1123#section-2"}),"RFC 1123\ndefinition")," which can be expressed with this regular expression :\n",Object(s.b)("inlineCode",{parentName:"p"},"[a-z0-9]([-a-z0-9]*[a-z0-9])?")))),Object(s.b)("h2",{id:"how-casskop-configures-dc-and-rack-in-cassandra"},"How CassKop configures dc and rack in Cassandra"),Object(s.b)("p",null,"CassKop will add 2 specific labels on each created Pod to tell them in witch Cassandra DC and Rack they belong :"),Object(s.b)("p",null,"Example :"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-text"}),"cassandraclusters.db.orange.com.dc=dc1\ncassandraclusters.db.orange.com.rack=rack1\n")),Object(s.b)("p",null,"Using the Kubernetes DownwardAPI, CassKop will inject into the Cassandra Image 2 environment variables, from these\n2 labels. Excerpt from the Statefulset template :"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-go"}),'...\nv1.EnvVar{\n  Name: "CASSANDRA_DC",\n  ValueFrom: &v1.EnvVarSource{\n    FieldRef: &v1.ObjectFieldSelector{\n    FieldPath: "metadata.labels[\'cassandraclusters.db.orange.com.dc\']",\n    },\n  },\n},\nv1.EnvVar{\n  Name: "CASSANDRA_RACK",\n  ValueFrom: &v1.EnvVarSource{\n    FieldRef: &v1.ObjectFieldSelector{\n      FieldPath: "metadata.labels[\'cassandraclusters.db.orange.com.rack\']",\n    },\n  },\n},\n...\n')),Object(s.b)("p",null,"In order to allow configuring Cassandra with the DC and Rack information, we use a specific ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/Orange-OpenSource/cassandra-image/"}),"Cassandra\nImage"),", which has a startup script that will retrieve\nthese environment variables, and configure the Cassandra ",Object(s.b)("inlineCode",{parentName:"p"},"cassandra-rackdc.properties")," file with the values for dc and\nrack."),Object(s.b)("p",null,"The Cassandra Image makes us of the ",Object(s.b)("inlineCode",{parentName:"p"},"GossipingPropertyFileSnitch")," Cassandra Snitch, so that both Kubernetes and\nCassandra are aware of the chosen topology."))}d.isMDXComponent=!0},199:function(e,a,n){"use strict";n.d(a,"a",(function(){return b})),n.d(a,"b",(function(){return m}));var t=n(0),o=n.n(t);function s(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){s(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var a=o.a.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},b=function(e){var a=d(e.components);return o.a.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},u=o.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,s=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=d(n),u=t,m=b["".concat(r,".").concat(u)]||b[u]||p[u]||s;return n?o.a.createElement(m,i(i({ref:a},l),{},{components:n})):o.a.createElement(m,i({ref:a},l))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var s=n.length,r=new Array(s);r[0]=u;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,r[1]=i;for(var l=2;l<s;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);