var GFGameSHCP = {
  
  //
  // [ SET INITIAL VALUES ]
  //
  //
  characters : [
    {
      personaje : "administrador",
      clave : 1,
      texto : "Trabajas en Hacienda",
      ramos : ["6", "32"],
      modificable : 1,
      limites : [0, 4000000000000]
    },
    {
      personaje : "ambientalista",
      clave : 2,
      texto : "vives en un árbol",
      ramos : ["31", "8", "16"],
      modificable : 1,
      limites : [0, 4000000000000]
    },
    {
      personaje : "educador",
      clave : 3,
      texto : "la letra con sangre entra",
      ramos : ["11", "42"],
      modificable : 1,
      limites : [0, 4000000000000]
    },
    {
      personaje : "emprendedor",
      clave : 4,
      texto : "Hipster",
      ramos : ["10", "5", "21", "14", "41"],
      modificable : 1,
      limites : [0, 4000000000000]
    },
    {
      personaje : "humanista",
      clave : 5,
      texto : "chairo",
      ramos : ["20", "15", "35", "47"],
      modificable : 1,
      limites : [0, 4000000000000]
    },
    {
      personaje : "Institucionalista",
      clave : 6,
      texto : "Se ve que sí pasaste por la universidad",
      ramos : ["22", "1", "40", "2", "27", "44", "37"],
      modificable : 1,
      limites : [0, 4000000000000]
    },
    {
      personaje : "inversionista",
      clave : 7,
      texto : "Estás cabrón",
      ramos : ["52", "53", "9", "18", "45", "46"],
      modificable : 1,
      limites : [0, 4000000000000]
    },
    {
      personaje : "justiciero / héroe",
      clave : 8,
      texto : "abuelita de batman",
      ramos : ["7", "4", "3", "13", "17"],
      modificable : 1,
      limites : [0, 4000000000000]
    },
    {
      personaje : "saludable",
      clave : 9,
      texto : "just do it",
      ramos : ["50", "51", "12"],
      modificable : 1,
      limites : [0, 4000000000000]
    },
    {
      personaje : "tecnológico",
      clave : 10,
      texto : "nerd",
      ramos : ["38", "42"],
      modificable : 1,
      limites : [0, 4000000000000]
    },
    {
      personaje : "HAcker",
      clave : 13,
      texto : "Eres la mera avena",
      ramos : ["28", "24", "52", "34", "30", "53", "33", "19", "23", "25"],
      modificable : 0,
      limites : [null, null]
    },

  ],
  branchContainer : "GF-game-ramos",
  data      : null,
  pef_total : 0,
  branches  : null,
  branchTemplate : _.template("<p><%=ramo%>:$<%=actual%></p>" +
                              "<p><input disabled></p>" +
                              "<p>$<%=pef%></p>" +
                              "<p><a class='gf-minus-btn' href='#'>[ - ]</a>" +
                              " <a class='gf-pef-btn' href='#'>[ pef ]</a>" +
                              " <a class='gf-plus-btn' href='#'>[ + ]</a></p>" +
                              "<p><a href=</p>"),

  //
  // [ INITIALIZE APP ]
  //
  //
  initialize : function(){
    this.getData();
  },

  //
  // [ LOAD DATA AND TRIGGER THE DATA AND VIEW CONFIG ]
  //
  //
  getData  : function(){
    var that = this;
    d3.csv("ramos_programas.csv", function(err, data){
      that.setData(data);
      that.render();
    });
  },

  //
  // SETUP THE DATA
  //
  //
  setData : function(data){
    this.data      = data;
    this.pef_total = data.map(function(m){
      return Math.round(+m.total);
    }).reduce(function(sum, val){
      return sum+val;
    });
    this.branches  = [];
    this._branches = _.uniq(_.pluck(data, "nombre"));
    this._branches.splice(0, 40);

    this._branches.forEach(function(br){
      var d = data.filter(function(item){
        return item.nombre == br;
      });
      var t = d.map(function(m){
        return Math.round(+m.total);
      }).reduce(function(sum, val){
        return sum+val;
      });
      var el = this.makeRamoLI({
        nombre : br,
        pef    : t
      });

      this.branches.push({
        nombre  : br, // el nombre del ramo
        el      : el, // el <li>
        ramo    : d[0].ramo,
        data    : d,  // los pp del ramo
        total   : t,  // el dinero total del ramo
        current : 0,  // dinero del pdf disponible
        change  : false, // indica si la cantidad ha sido modificada
        rules   : [null, null] // las reglas de cada ramo
      });
    }, this);
  },

  //
  // [ RENDER ONE BRANCH ]
  //
  //
  makeRamoLI : function(branch){
    var li            = document.createElement("li"),
        actualOptions = this.branchTemplate({
          ramo   : branch.nombre,
          actual : 0,
          pef    : branch.pef
        });
    li.innerHTML = actualOptions;
    return li;
  },

  //
  // [ ADD MONEY TO A BRANCH ]
  //
  //
  addMoney : function(el){
    var available = this.pef_total,
        current   = el.current,
        _plus     = Math.round(el.total*.1),
        plus      = available >= _plus ? _plus : available,
        new_curr  = current + plus;
    this.pef_total = this.pef_total - plus;
    return new_curr;
  },

  //
  // [ REMOVE MONEY TO A BRANCH ]
  //
  //
  removeMoney : function(el){
    var current = el.current,
    _minus      = Math.round(el.total*.1),
    minus       = current >= _minus ? _minus : current,
    new_curr    = current - minus;
    this.pef_total = this.pef_total + minus;
    return new_curr;
  },

  //
  // [ ENABLE INTERACTION ]
  //
  //
  render : function(){
    var that = this;

    // ENABLE EXPORT BTN
    document.querySelector(".GF-game-get-results").addEventListener("click", function(e){
      e.preventDefault();
      console.log(that.branches);
      var d = that.branches.filter(function(b){
        return b.change;
      });
      that.exportData(d);
    });

    // ENABLE BRANCH INTERACTION 
    this.branches.forEach(function(b){
      var monitor = b.el.getElementsByTagName("input")[0];
      document.getElementById(this.branchContainer).appendChild(b.el);
      
      b.el.querySelector(".gf-pef-btn").addEventListener("click", function(e){
        e.preventDefault();
        that.pef_total = that.pef_total + b.current - b.total;
        b.current      = b.total;
        b.change       = true;
        monitor.value  = b.current;
        console.log("pef_total:" + that.pef_total);
      });

      b.el.querySelector(".gf-plus-btn").addEventListener("click", function(e){
        e.preventDefault();
        b.current     = that.addMoney(b);
        b.change      = true;
        monitor.value = b.current;
        console.log("pef_total:" + that.pef_total);
      });

      b.el.querySelector(".gf-minus-btn").addEventListener("click", function(e){
        e.preventDefault();
        b.current     = that.removeMoney(b);
        b.change      = true;
        monitor.value = b.current;
        console.log("pef_total:" + that.pef_total);
      });
    }, this);
  },

  //
  // [ EXPORT DATA TO CSV ]
  //
  //
  exportData : function(d){
    var rows = d.map(function(r){
      return [r.nombre, r.total, r.current];
    });

    rows.unshift(["ramo", "valor-original", "nuevo-valor"]);

    var csv = d3.csvFormatRows(rows);

    var container = document.querySelector(".GF-game-textarea-dev");
    console.log(container);
    container.value= csv;
  }
};

GFGameSHCP.initialize();