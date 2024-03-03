(function() {
    angular
        .module('users')
        .directive("experiment", directiveFunction)
})();

var hall_effect_stage, exp_canvas; 

var current, thickness, insertprobe_var, showvoltage_var;

var choose_material, rotation, carrier_concentration, magnetic_field, voltcurrent_count, voltage_count, current_count, hall_coefficient;

var ELECTRON_CHARGE, MAGNETIC_CONST;

var probeFlag, voltageFlag, whiteprobe_moveflag, twistedwire_insertflag, twistedwire_moveflag, twistedwooden_moveflag, move_flag;

/** Arrays declarations */
var choose_material_array =[]; 

function directiveFunction() {
    return {
        restrict: "A",
        link: function(scope, element, attrs, dialogs) {
            /** Variable that decides if something should be drawn on mouse move */
            var experiment = true;
            if (element[0].width > element[0].height) {
                element[0].width = element[0].height;
                element[0].height = element[0].height;
            } else {
                element[0].width = element[0].width;
                element[0].height = element[0].width;
            }
            if (element[0].offsetWidth > element[0].offsetHeight) {
                element[0].offsetWidth = element[0].offsetHeight;
            } else {
                element[0].offsetWidth = element[0].offsetWidth;
                element[0].offsetHeight = element[0].offsetWidth;
            }
            exp_canvas = document.getElementById("demoCanvas");
            exp_canvas.width = element[0].width;
            exp_canvas.height = element[0].height;

            /** Initialisation of stage */
            hall_effect_stage = new createjs.Stage("demoCanvas");
			queue = new createjs.LoadQueue(true);       
			/** Preloading the images */
			queue.loadManifest([{
				id: "background",
				src: "././images/background.svg",
				type: createjs.LoadQueue.IMAGE
			}, {
				id: "wooden_stand_open",
				src: "././images/wooden_stand_open.svg",
				type: createjs.LoadQueue.IMAGE
			}, {
				id: "wooden_stand_closed",
				src: "././images/wooden_stand_closed.svg",
				type: createjs.LoadQueue.IMAGE
			}, {
				id: "gauss_meter",
				src: "././images/gauss_meter.svg",
				type: createjs.LoadQueue.IMAGE
			}, {
				id: "whiteprobe",
				src: "././images/whiteprobe.svg",
				type: createjs.LoadQueue.IMAGE
			}, {
				id: "equipments",
				src: "././images/equipments.svg",
				type: createjs.LoadQueue.IMAGE
			}, {
				id: "whiteprobe_connected",
				src: "././images/whiteprobe_connected.svg",
				type: createjs.LoadQueue.IMAGE 
			}, {
				id: "whiteprobe_move",
				src: "././images/whiteprobe_move.svg",
				type: createjs.LoadQueue.IMAGE 
			}, {
				id: "solenoid",
				src: "././images/solenoid.svg",
				type: createjs.LoadQueue.IMAGE 
			}, {
				id: "needle",
				src: "././images/needle.svg",
				type: createjs.LoadQueue.IMAGE 
			}, {
				id: "needle_top",
				src: "././images/needle_top.svg",
				type: createjs.LoadQueue.IMAGE 
			}, {
				id: "big_arrow_left",
				src: "././images/big_arrow_left.svg",
				type: createjs.LoadQueue.IMAGE 
			}, {
				id: "big_arrow_right",
				src: "././images/big_arrow_right.svg",
				type: createjs.LoadQueue.IMAGE 
			}, {
				id: "tooltip",
				src: "././images/tooltip.svg",
				type: createjs.LoadQueue.IMAGE 
			}, {
				id: "white_rotate",
				src: "././images/white_rotate.svg",
				type: createjs.LoadQueue.IMAGE 
			}, {
				id: "volt_current_switches",
				src: "././images/volt_current_switches.svg",
				type: createjs.LoadQueue.IMAGE 
			}, {
				id: "white_rotate",
				src: "././images/white_rotate.svg",
				type: createjs.LoadQueue.IMAGE 
			}, {
				id: "small_arrow_left",
				src: "././images/small_arrow_left.svg",
				type: createjs.LoadQueue.IMAGE 
			}, {
				id: "small_arrow_right",
				src: "././images/small_arrow_right.svg",
				type: createjs.LoadQueue.IMAGE 
			}, {
				id: "tiny_arrow_left",
				src: "././images/tiny_arrow_left.svg",
				type: createjs.LoadQueue.IMAGE 
			}, {
				id: "tiny_arrow_right",
				src: "././images/tiny_arrow_right.svg",
				type: createjs.LoadQueue.IMAGE 
			}, {
				id: "volt_current_light",
				src: "././images/volt_current_light.svg",
				type: createjs.LoadQueue.IMAGE 
			}, {
				id: "twisted_wire",
				src: "././images/twisted_wire.svg",
				type: createjs.LoadQueue.IMAGE 
			}, {
				id: "twisted_wire_connected",
				src: "././images/twisted_wire_connected.svg",
				type: createjs.LoadQueue.IMAGE 
			}, {
				id: "twisted_wire_move",
				src: "././images/twisted_wire_move.svg",
				type: createjs.LoadQueue.IMAGE 
			}]);      
                   
            queue.on("complete", handleComplete, this);            
            loadingProgress(queue,hall_effect_stage,exp_canvas.width);            
            hall_effect_stage.enableDOMEvents(true);
            hall_effect_stage.enableMouseOver();
            createjs.Touch.enable(hall_effect_stage);
      			
            function handleComplete() { 
                /** Loading images, text and containers */					
				loadImages(queue.getResult("background"), "background", 0, 0, ""); 
				loadImages(queue.getResult("wooden_stand_open"), "wooden_stand_open", 0, 0, "pointer"); 	
				loadImages(queue.getResult("wooden_stand_closed"), "wooden_stand_closed", 0, 0, "pointer"); 					
				loadImages(queue.getResult("equipments"), "equipments", 0, 0, ""); 	
				loadImages(queue.getResult("gauss_meter"), "gauss_meter", 0, 0, ""); 
				loadImages(queue.getResult("whiteprobe"), "whiteprobe", 0, 0, ""); 			
				loadImages(queue.getResult("whiteprobe_connected"), "whiteprobe_connected", 0, 0, ""); 
				loadImages(queue.getResult("whiteprobe_move"), "whiteprobe_move", 0, 0, ""); 
				loadImages(queue.getResult("solenoid"), "solenoid", 0, 0, ""); 
				loadImages(queue.getResult("needle"), "needle", 165, 560, ""); 
				loadImages(queue.getResult("needle_top"), "needle_top", 0, 0, ""); 
				loadImages(queue.getResult("big_arrow_left"), "big_arrow_left", 0, 0, "pointer"); 
				loadImages(queue.getResult("big_arrow_right"), "big_arrow_right", 0, 0, "pointer"); 
				loadImages(queue.getResult("tooltip"), "tooltip", 0, 0, ""); 
				loadImages(queue.getResult("white_rotate"), "white_rotate", 243, 530, ""); 
				loadImages(queue.getResult("volt_current_switches"), "volt_current_switches", 0, 0, ""); 
				loadImages(queue.getResult("small_arrow_left"), "small_arrow_left", 0, 0, "pointer"); 
				loadImages(queue.getResult("small_arrow_right"), "small_arrow_right", 0, 0, "pointer"); 
				loadImages(queue.getResult("tiny_arrow_left"), "tiny_arrow_left", 0, 0, ""); 
				loadImages(queue.getResult("tiny_arrow_right"), "tiny_arrow_right", 0, 0, ""); 
				loadImages(queue.getResult("volt_current_light"), "volt_current_light", 587, 520, ""); 
				loadImages(queue.getResult("twisted_wire"), "twisted_wire", 0, 0, ""); 
				loadImages(queue.getResult("twisted_wire_connected"), "twisted_wire_connected", 0, 0, ""); 
				loadImages(queue.getResult("twisted_wire_move"), "twisted_wire_move", 0, 0, ""); 
				
				setText("gaussmeter_display", 484, 522, "", "black", 1);
				setText("current_display", 480, 522, "", "black", 1);
				setText("voltage_display", 480, 522, "", "black", 1);
				setText("tooltip_text", 377, 282, _("click on the wood"), "black", 1.2);
				
                initialisationOfVariables(scope); 
                /** Function call for images used in the apparatus visibility */
                initialisationOfImages();
                /** Function call for the initial value of the controls */
                initialisationOfControls(scope);
                /** Translation of strings using gettext */
                translationLabels();
				/** Graph plotting function */
					/** Click event function of wooden stand open */
					hall_effect_stage.getChildByName("wooden_stand_open").on("click",function(){					
					woodenopenExperiment(scope);
					scope.$apply();
					hall_effect_stage.update();				
				});
					/** Click event function of wooden stand closed */
					hall_effect_stage.getChildByName("wooden_stand_closed").on("click",function(){					
					woodenclosedExperiment(scope);
					scope.$apply();
					hall_effect_stage.update();				
				});
					/** Click event function of big arrow left */
					hall_effect_stage.getChildByName("big_arrow_left").on("click",function(){	
					if(current > 1){		
						current -= 0.5; /** If current > 1, then decrement the value by 0.5 */
						/** Setting the slider value to the label variable */	
						scope.current_num = scope.currentNum = current;
						currentExperiment(scope);
						calculation(scope);
					}
					scope.$apply();
					hall_effect_stage.update();				
				}); 
					/** Click event function of big arrow right */
					hall_effect_stage.getChildByName("big_arrow_right").on("click",function(){			
					if(current < 5){	
						current += 0.5; /** If current < 5, then increment the value by 0.5 */
						/** Setting the slider value to the label variable */
						scope.current_num = scope.currentNum = current;
						currentExperiment(scope);
						calculation(scope);
					}	
					scope.$apply();
					hall_effect_stage.update();				
				});
					/** Click event function of show current */
					hall_effect_stage.getChildByName("small_arrow_left").on("click",function(){	
						voltageFlag = false;
						scope.showvoltage_txt = showvoltage_var;				
						/** Set the position of volt current light */
						getChild("volt_current_light").x = 587.5;	
						getChild("volt_current_light").y = 520;	
						getChild("tiny_arrow_right").visible = false; /** Invisible tiny arrow right */	
						getChild("tiny_arrow_left").visible = true; /** Visible tiny arrow left */
						getChild("voltage_display").visible = false; /** Hide the voltage value */	
						getChild("current_display").visible = true; /** Show the current value */
						if(probeFlag){
							calculation(scope);
						}
						scope.$apply();
						hall_effect_stage.update();		
				});
					/** Click event function of show voltage */
					hall_effect_stage.getChildByName("small_arrow_right").on("click",function(){	
						voltageFlag = true;	
						scope.showvoltage_txt = showcurrent_var;		
						/** Set the position of volt current light */						
						getChild("volt_current_light").x = 587.5;	
						getChild("volt_current_light").y = 503;	
						getChild("tiny_arrow_right").visible = true; /** Visible tiny arrow right */		
						getChild("tiny_arrow_left").visible = false; /** Invisible tiny arrow left */		
						getChild("voltage_display").visible = true; /** Show the voltage value */	
						getChild("current_display").visible = false; /** Hide the current value */
						if(probeFlag){
							calculation(scope);
						}	 
						scope.$apply();
						hall_effect_stage.update();		
				});
				scope.$apply();
				hall_effect_stage.update();	
			}

            /** Add all the strings used for the language translation here. '_' is the short cut for 
            calling the gettext function defined in the gettext-definition.js */
            function translationLabels() { 
                /** This help array shows the hints for this experiment */
                help_array = [_("help1"), _("help2"), _("help3"), _("help4"), _("help5"), _("help6"), _("help7"), _("help8"), _("help9"), _("help10"), _("Next"), _("Close")];
                scope.heading = _("Hall Effect Experiment:- Determination of Charge Carrier Density");
                scope.variables = _("Variables");
				scope.result = _("Result");
				scope.copyright = _("copyright");
				scope.select_procedure = _("Select Procedure");
				scope.select_material = _("Select Material");
				scope.current = _("Current");
				scope.initial_material = _("Germanium");
				scope.initial_procedure = _("Magnetic field Vs Current");
				scope.thickness = _("Thickness");
				scope.hallcurrent = _("Hall Current");
				scope.ammeter = _("A");
				scope.meter = _("mm");
				scope.microammeter = _("mA");
				scope.insertprobe_txt = insertprobe_var = _("Insert Probe");
				removeprobe_var = _("Remove Probe");			
				scope.showvoltage_txt = showvoltage_var = _("Show Voltage");
				showcurrent_var = _("Show Current");	
				scope.reset_txt = _("Reset");	
				scope.show_result = _("Show Result");		
				/** Labels for hall_coefficient and carrier_concentration */
				scope.hall_coefficient = _("Hall Coefficient");		
				scope.carrier_concentration = _("Carrier Concentration");
				scope.cntrol_disable = true;
                scope.procedure_array = [{				
                    procedure: _('Magnetic field Vs Current'),
                    type: 1,
                    index: 0	
                }, {
                    procedure: _('Hall Effect Setup'),
					type: 2,
					index: 1
                }];
				
				scope.material_array = [{				
                    material: _('Germanium'),
                    type: 1,
                    index: 0	
                }, {
                    material: _('Aluminium'),
                    type: 2,
                    index: 1
                }, {
                    material: _('Copper'),
                    type: 3,
                    index: 2
                }, {
                    material: _('Gold'),
                    type: 4,
                    index: 3
                }];

				scope.$apply();
				hall_effect_stage.update(); /** Stage update */
            }
        }
    }
	hall_effect_stage.update();
}

/** All the texts loading and added to the natural_convection_stage */
function setText(name, textX, textY, value, color, fontSize) {
    var _text = new createjs.Text(value, "bold " + fontSize + "em Tahoma, Geneva, sans-serif", color);
    _text.x = textX;
    _text.y = textY;
    _text.textBaseline = "alphabetic";
	if( name=="gaussmeter_display" || name=="current_display" || name=="voltage_display" ){
		_text.font = "1.8em digiface";
	}
    _text.name = name;
    _text.text = value;
    _text.color = color;
    hall_effect_stage.addChild(_text); /** Adding text to the container */
}

/** All the images loading and added to the natural_convection_stage */
function loadImages(image, name, xPos, yPos, cursor, container) {
    var _bitmap = new createjs.Bitmap(image).set({});
    _bitmap.x = xPos;
    _bitmap.y = yPos;
    _bitmap.name = name;
    _bitmap.cursor = cursor;
	/** Set the rotation of needle */
	if(name == "needle"){
		_bitmap.regX = _bitmap.image.width;
		_bitmap.rotation = 10;
	}
	/** Set the rotation of white rotate */
	if(name == "white_rotate"){
		_bitmap.regX = _bitmap.image.width/2;
        _bitmap.regY = _bitmap.image.height;
		_bitmap.rotation = 30;  
	}
	hall_effect_stage.addChild(_bitmap); /** Adding bitmap to the container */
	hall_effect_stage.update();
}

/** Function to return child element of stage */
function getChild(child_name) {
	return hall_effect_stage.getChildByName(child_name); /** Returns the child element of stage */
} 

/** All variables initialising in this function */
function initialisationOfVariables(scope) {
	/** Setting the slider value to the label variable */	
	current = scope.current_num = scope.currentNum = 1;
	thickness = scope.thickness_num = scope.thicknessNum = 0.1;
	hallcurrent = scope.hallcurrent_num = scope.hallcurrentNum = 1;
	document.getElementById("site-sidenav").style.display = "block";
	/** Setting the initial value of gauss mater */
	getChild("gaussmeter_display").visible = true;
	getChild("voltage_display").visible = false;
	getChild("current_display").visible = false;
	getChild("gaussmeter_display").text = "0.0000";
	/** Setting the voltage and current display as false */
	getChild("voltage_display").visible = getChild("current_display").visible = false;
	/** Initially set the flag as false */
	probeFlag = whiteprobe_moveflag = twistedwire_insertflag = twistedwooden_moveflag = move_flag = false;
	scope.material_disable = scope.thickness_disable = scope.hallcurrent_disable = scope.showvoltage_disable = true;
	scope.current_disable = true;
	/** Disable the mouse pointer */
	getChild("big_arrow_left").mouseEnabled = getChild("big_arrow_right").mouseEnabled = false;	
	scope.showresult = false;
	/** Constant values */
	ELECTRON_CHARGE = 1.6e-19;
	MAGNETIC_CONST = 0.148225;
	choose_material = 0.0194;
	choose_material_array = [0.0194,0.39,0.5,0.7];
	hall_effect_stage.update();
}

/** Initialisation of all controls */
function initialisationOfControls(scope) {
	scope.showvoltage_txt = showvoltage_var;
	scope.insertprobe_txt = insertprobe_var = _("Insert Probe");
	removeprobe_var = _("Remove Probe");	
	/** Set the initial value of hall coefficient value and carrier concentration value */
	scope.hall_coefficient_value = "0";
	scope.carrier_concentration_value = "0";
	scope.procedureModel = 1;
	scope.materialModel = 0;
}

/** Set the initial status of the images and text depends on its visibility and initial values */
function initialisationOfImages(scope) {
	getChild("white_rotate").rotation = 30; /** Set the initial rotation of white rotate */
	getChild("needle").rotation = 10; /** Set the initial rotation of needle */
	getChild("whiteprobe_connected").visible = getChild("tooltip").visible = false;
	getChild("wooden_stand_closed").visible = getChild("whiteprobe_move").visible = getChild("volt_current_switches").visible = false;
	getChild("tooltip_text").text = ""; /** Set the tooltip as invisible */
	getChild("small_arrow_left").visible = getChild("small_arrow_right").visible = getChild("tiny_arrow_left").visible = false;
	getChild("tiny_arrow_right").visible = getChild("volt_current_light").visible = false;
	getChild("wooden_stand_open").visible = getChild("gauss_meter").visible = getChild("whiteprobe").visible = true;
	/** Put the wooden stand back */
	getChild("wooden_stand_open").y = getChild("wooden_stand_closed").y = 0;
	getChild("volt_current_switches").visible = getChild("twisted_wire").visible = getChild("twisted_wire_connected").visible = getChild("twisted_wire_move").visible = false;
	/** Disable the mouse pointer */
	getChild("small_arrow_left").mouseEnabled = getChild("small_arrow_right").mouseEnabled = false;
}

/** Function for start/reset the experiment */
function halleffectExperiment(scope) {
	/** Emulate the simulator by clicking start/reset the button */
	if(probeFlag){
		/** When we switch off the button */
		probeFlag = false;
		scope.insertprobe_txt = insertprobe_var;
		getChild("whiteprobe").visible = true;
		getChild("whiteprobe_connected").visible = getChild("tooltip").visible = getChild("whiteprobe_move").visible = false;
		getChild("current_display").visible = getChild("voltage_display").visible = false;	
		getChild("gaussmeter_display").visible = true; /** Set the gauss meter display as true */
		getChild("gaussmeter_display").text = "0.0000";	
		scope.current_disable = true;
		getChild("tooltip_text").text = ""; /** Set the text as null */
		if(twistedwire_moveflag){
			getChild("twisted_wire_move").visible = false;
			twistedwire_moveflag = false; /** Set the flag as false */
			getChild("gaussmeter_display").visible = getChild("voltage_display").visible = false;	
			getChild("current_display").visible = true; /** Set the current display as true */
			getChild("current_display").text = "0.0000";
			getChild("voltage_display").text = "0.0000";
			scope.hallcurrent_disable = scope.thickness_disable = true;			
		}
		/** Disable the mouse pointer */
		getChild("big_arrow_left").mouseEnabled = getChild("big_arrow_right").mouseEnabled = false;	
		/** If we select procedureModel = 2 then only we can connect twisted wire */
		if(twistedwire_insertflag){
			getChild("whiteprobe").visible = getChild("twisted_wire_connected").visible = false;
			getChild("twisted_wire").visible = true;
		} 
	}
	else{
		/** When we switch on the button */ 
		probeFlag = true;	
		getChild("whiteprobe").visible = false;
		getChild("whiteprobe_connected").visible = true;
		getChild("tooltip").visible = true;		
		getChild("tooltip_text").text = _("click on the wood");
		/** After move the wooden_stand, if we insert white probe then only the image will visible */
		if(whiteprobe_moveflag){
			getChild("whiteprobe_connected").visible = getChild("tooltip").visible = false;
			getChild("whiteprobe_move").visible = true;	
			getChild("tooltip_text").text = ""; /** Set the text as null */
			/** Enable the mouse pointer */
			getChild("big_arrow_left").mouseEnabled = getChild("big_arrow_right").mouseEnabled = true;	
			scope.current_disable = false;
			calculation(scope);
		}
		/** After click procedureModel = 2, then only insert the twisted wire */
		if(twistedwire_insertflag){
			twistedwire_moveflag = true;
			getChild("twisted_wire_connected").visible = true;			
			getChild("twisted_wire").visible = getChild("whiteprobe_connected").visible = getChild("whiteprobe_move").visible = false;
		}
		/** Only after move wooden flag then the twisted_wire_move will appear */
		if(twistedwooden_moveflag){	
			getChild("twisted_wire_move").visible = true;
			getChild("twisted_wire_connected").visible = getChild("tooltip").visible = false;
			getChild("tooltip_text").text = ""; /** Set the text as null */		
		}
		/** Twisted wire move appear only after click insert hall probe */
		if(move_flag){
			scope.hallcurrent_disable = scope.thickness_disable = false;
			getChild("twisted_wire_move").visible = true;
			getChild("twisted_wire_connected").visible = false;
			getChild("tooltip").visible = false;	
			getChild("tooltip_text").text = ""; /** Set the text as null */
			/** Enable the mouse pointer */
			getChild("big_arrow_left").mouseEnabled = getChild("big_arrow_right").mouseEnabled = true;
			scope.current_disable = false;
			calculation(scope);
		}
		scope.insertprobe_txt = removeprobe_var;	
	}	
	hall_effect_stage.update();
}

/** Function for power on/off the experiment */
function voltcurrentExperiment(scope) {
	/** Emulate the simulator by clicking power on/off the button */
	if(voltageFlag){
		/** When we switch off the button */
		voltageFlag = false;
		scope.showvoltage_txt = showvoltage_var;
		getChild("tiny_arrow_left").visible = true;	
		getChild("tiny_arrow_right").visible = false;
		getChild("volt_current_light").x = 587.5;	
		getChild("volt_current_light").y = 520;	
		getChild("voltage_display").visible = false;	
		getChild("current_display").visible = true;		
	}
	else{
		/** When we switch on the button */ 
		voltageFlag = true;	
		scope.showvoltage_txt = showcurrent_var;	
		getChild("tiny_arrow_right").visible = getChild("volt_current_light").visible = true;	
		getChild("tiny_arrow_left").visible = false;	
		getChild("volt_current_light").x = 587.5;	
		getChild("volt_current_light").y = 503;	
		getChild("voltage_display").visible = true;	
		getChild("current_display").visible = false;
	}
	if(probeFlag){
		calculation(scope);	
	}
	hall_effect_stage.update();
}

/** Reset the experiment in the reset button event */
function resetExperiment(scope) {
	initialisationOfVariables(scope);
	initialisationOfControls(scope);
	initialisationOfImages(scope);
	showResult(scope);
	hall_effect_stage.update();
}  