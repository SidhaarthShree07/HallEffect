/** Dropdown list of agarose function */
function changeprocExperiment(scope){
	/** Set the flag and images as false */
	getChild("current_display").visible = getChild("voltage_display").visible = getChild("gaussmeter_display").visible = false; 
	scope.current_disable = scope.thickness_disable = scope.hallcurrent_disable = scope.showvoltage_disable = false;
	twistedwire_moveflag = twistedwire_insertflag = move_flag = probeFlag = whiteprobe_moveflag = false;
	getChild("twisted_wire").visible = getChild("twisted_wire_move").visible  = getChild("twisted_wire_connected").visible = false;
	getChild("big_arrow_left").mouseEnabled = getChild("big_arrow_right").mouseEnabled = false;	
	getChild("whiteprobe").visible = getChild("wooden_stand_open").visible = getChild("gauss_meter").visible = false;
	getChild("volt_current_switches").visible = getChild("volt_current_light").visible = getChild("wooden_stand_closed").visible = false;
	getChild("small_arrow_left").visible = getChild("small_arrow_right").visible = getChild("whiteprobe_connected").visible = getChild("whiteprobe_move").visible = false;
	getChild("tiny_arrow_left").visible = getChild("tooltip").visible = getChild("volt_current_light").visible = false;
	/** Check whether the dropdown is magnetic field Vs current or hall effect setup */
	switch (scope.procedureModel > 0) {
		case(scope.procedureModel == 1):
			/** Set the initial position of wooden stand open */
			getChild("wooden_stand_open").y = 0;		
			getChild("gaussmeter_display").visible = true; /** Set the gauss meter display as true */
			getChild("gaussmeter_display").text = "0.0000";	
			scope.current_disable = scope.thickness_disable = scope.hallcurrent_disable = scope.showvoltage_disable = true;
			/** If the dropdown is magnetic field Vs current */
			scope.insertprobe_txt = insertprobe_var = _("Insert Probe");
			removeprobe_var = _("Remove Probe");	
			/** Used to visible the white probe and wooden_stand_open */
			getChild("whiteprobe").visible = getChild("wooden_stand_open").visible = getChild("gauss_meter").visible = true;
			break;
		case(scope.procedureModel == 2):
			/** Set the initial position of wooden stand closed */
			getChild("wooden_stand_closed").y = 0;			
			getChild("current_display").visible = true;	
			/** Initially set the voltage and current display as 0.0000 */
			getChild("current_display").text = "0.0000";	
			getChild("voltage_display").text = "0.0000";	
			scope.current_disable = true;			
			/** If the dropdown is hall effect setup */
			scope.insertprobe_txt = insertprobe_var = _("Insert Hall Probe");
			removeprobe_var = _("Remove Hall Probe");	
			getChild("volt_current_switches").visible = true;
			/** Used to visible the image */
			getChild("wooden_stand_closed").visible = getChild("small_arrow_left").visible = getChild("small_arrow_right").visible = getChild("tiny_arrow_left").visible = true;
			getChild("tooltip_text").text = "";
			getChild("volt_current_light").visible = getChild("twisted_wire").visible = twistedwire_insertflag = true;	
			break;
	}
	hall_effect_stage.update();
}

/** Function for current slider */
function currentExperiment(scope){
	/** Setting the slider value to the label variable */
	scope.current_num = current;
	/** Equation is used to rotate the needle */
	getChild("needle").rotation = current * 10;
	/** Equation is used to rotate the white arc based on the current */
	rotation = current*30;
	getChild("white_rotate").rotation = rotation;
	calculation(scope);
	hall_effect_stage.update();
}

/** Function for thickness slider */
function thicknessExperiment(scope){
	/** Setting the slider value to the label variable */	
	thickness = scope.thickness_num = scope.thicknessNum;
}

/** Function for hall current slider */
function hallcurrentExperiment(scope){
	/** Setting the slider value to the label variable */	
	hallcurrent = scope.hallcurrent_num = scope.hallcurrentNum;
	calculation(scope);
}

/** Show result check box function */
function showResult(scope) {
	/** To show the result */
    ( scope.showresult == true )?scope.hide_show_result = true:scope.hide_show_result = false;        
}

/** Function for moving the wooden stand open to upper position */
function woodenopenExperiment(scope){
	/** Move the wooden stand after click insert probe */
	if(probeFlag){
		whiteprobe_moveflag = true;
		/** Change the position of wooden stand open */
		getChild("wooden_stand_open").y = -50;	
		getChild("whiteprobe_move").visible = true;
		scope.current_disable = false; /** Used to enable the current slider */
		scope.material_disable = true; /** Used to disable the select material dropdown */
		/** Enable the mouse pointer */
		getChild("big_arrow_left").mouseEnabled = getChild("big_arrow_right").mouseEnabled = true;	
		if(!voltageFlag){
			getChild("current_display").visible = false;
		}
		calculation(scope);
	}
	/** Invisible the whiteprobe_connected and tooltip */
	getChild("whiteprobe_connected").visible = false;
	getChild("tooltip").visible = false;
	getChild("tooltip_text").text = "";
	hall_effect_stage.update();
}

/** Function for moving the wooden stand closed to upper position */
function woodenclosedExperiment(scope){
	if(twistedwire_moveflag){
		/** We can connect the twisted move wire, only if the move flag is true */
		move_flag = true;	
		/** change the position of wooden stand closed */
		getChild("wooden_stand_closed").y = -50;	
		getChild("twisted_wire_connected").visible = false;
		getChild("twisted_wire_move").visible = true;
		twistedwooden_moveflag = false;
		scope.current_disable = scope.hallcurrent_disable = false;
		scope.material_disable = scope.thickness_disable = scope.hallcurrent_disable = scope.showvoltage_disable = false;
		/** Enable the mouse pointer */
		getChild("big_arrow_left").mouseEnabled = getChild("big_arrow_right").mouseEnabled = true;	
		getChild("small_arrow_left").mouseEnabled = getChild("small_arrow_right").mouseEnabled = true;
		if(!voltageFlag){
			getChild("current_display").visible = true;
		}
		calculation(scope);			
	}
	/** Used to invisible the tooltip */
	getChild("tooltip").visible = false;
	getChild("tooltip_text").text = "";
	hall_effect_stage.update();
}

/** Get the calculations from the slider */
function calculation(scope) {
	/** Calculated the magnetic field = current * MAGNETIC_CONST, where current is the actual current value and MAGNETIC_CONST = 0.148225, a constant */ 
	magnetic_field = current * MAGNETIC_CONST;	
	/** Calculated the voltcurrent count = (choose_material * magnetic_field)/thickness, where thickness is the current slider value of thickness */ 
	voltcurrent_count = (choose_material * magnetic_field)/thickness;
	/** Calculated the current count = hallcurrent, where hallcurrent is the slider value */
	current_count = hallcurrent;
	/** Calculated the voltage count = voltcurrent count * current count, where 1000 is a constant to covert A(ampere) to mA(milliampere) */
	voltage_count = voltcurrent_count * (current_count * 1000);
	/** Calculated the carrier concentration = 1/(choose_material*ELECTRON_CHARGE), where choose material is the selected material value and ELECTRON_CHARGE = 1.6e-19, a constant */ 
	carrier_concentration = Math.abs(1/(choose_material*ELECTRON_CHARGE));
	/** Calculated the hall_coefficient, RH=(VH/IH)*(t/B), where VH is hall voltage, IH is hall current, t is thickness and B is applied magnetic field */ 
	hall_coefficient = choose_material;
	/** Shows the value of gauss meter, current and voltage display */
	getChild("gaussmeter_display").text = magnetic_field.toFixed(4);
	if(voltageFlag){
		getChild("voltage_display").text = voltage_count.toFixed(3);
	}else {
		getChild("current_display").text = current_count.toFixed(1);
	}

	/** To show the result hall coefficient and carrier concentration value */
	scope.hall_coefficient_value = hall_coefficient;
	scope.carrier_concentration_value = carrier_concentration.toExponential(5);
	hall_effect_stage.update();
}