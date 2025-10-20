const questionBankELE = {
  // DGCA MODULE 11 PART 05
  "A lead-acid battery is considered to be fully charged when the.": {
    answer: "S.G. and voltage remain constant for specified period",
    choices: [
      "S.G. and voltage remain constant for specified period",
      "cells begin to gas freely",
      "S.G. reaches 1.180",
    ],
  },
  "The preferred method of battery charging a Ni-Cad battery is constant.": {
    answer: "current",
    choices: ["speed", "current", "voltage"],
  },
  "When a current transformer is disconnected, what should be done?.": {
    answer: "Terminals shorted",
    choices: [
      "Terminals shorted",
      "Resistor placed across terminals",
      "Left open circuit",
    ],
  },
  "What does the differential sensing coil sense?.": {
    answer: "Current",
    choices: ["Power", "Volts", "Current"],
  },
  "Where does the GCU gets its power?.": {
    answer: "PMG",
    choices: ["RAT", "Battery", "PMG"],
  },
  "Galley loads are wired in.": {
    answer: "parallel so load shedding will lower current consumption",
    choices: [
      "parallel so load shedding will lower current consumption",
      "either series or parallel depending on the design",
      "series",
    ],
  },
  "A fuse-type current limiter.": {
    answer: "opens a circuit after a time/current condition has been exceeded",
    choices: [
      "can be used as a radio suppressor",
      "limits current flow to a load",
      "opens a circuit after a time/current condition has been exceeded",
    ],
  },
  "When a load is shed from a busbar, the.": {
    answer: "current consumption from the bar decreases",
    choices: [
      "busbar voltage decreases",
      "current consumption from the bar decreases",
      "busbar voltage increases",
    ],
  },
  "In unparalleled AC generation systems, the phase rotation of one generator in relation to the others.":
    {
      answer: "is unimportant",
      choices: [
        "must be synchronised prior to paralleling",
        "is unimportant",
        "must be BCA",
      ],
    },
  "In a multi-generator system, the generator which takes more than its reactive power share is protected by.":
    {
      answer: "over-voltage and under-voltage protection circuits",
      choices: [
        "over-voltage and under-voltage protection circuits",
        "over-current and under-current protection circuits",
        "over-excitation and under-excitation protection circuits",
      ],
    },
  "Sharing of electrical loads by paralleled DC generators is controlled by.": {
    answer:
      "equalising circuits which control the field excitation of the generators",
    choices: [
      "equalising circuits which control the field excitation of the generators",
      "automatic load shedding",
      "equalising circuits which control the speed of the generators",
    ],
  },
  "Excessive commutator sparking can be caused by.": {
    answer: "weak spring tension",
    choices: [
      "rotating field diode failure",
      "brushes positioned on MNA",
      "weak spring tension",
    ],
  },
  "Before checking the SG of a battery recently removed from an aircraft.": {
    answer: "take the temperature of the electrolyte",
    choices: [
      "take the temperature of the electrolyte",
      "carry out a capacity test",
      "allow to stabilise for one hour",
    ],
  },
  "On an AC external power plug, the interlock circuit is controlled by pins.":
    { answer: "EF", choices: ["AB", "CD", "EF"] },
  "Over-voltage protection circuits are activated.": {
    answer: "dependent on the magnitude of the overvoltage",
    choices: [
      "before the over voltage limit is exceeded",
      "after a fixed time delay",
      "dependent on the magnitude of the overvoltage",
    ],
  },
  "A diode connected across a coil will.": {
    answer: "prevent back EMF and allow faster switching",
    choices: [
      "suppress arching when relay is opening and closing",
      "prevent back EMF and allow faster switching",
      "prevent the coil being fitted the wrong way",
    ],
  },
  "Which fault does not always trip the GCR?.": {
    answer: "Over-frequency and under-frequency",
    choices: [
      "Under-frequency and under-volts",
      "Over-frequency and over-volts",
      "Over-frequency and under-frequency",
    ],
  },
  "Differential protection in a generating system.": {
    answer: "detects current difference between source and load",
    choices: [
      "detects current difference between source and load",
      "detects voltage difference between source and load",
      "uses the volts coil to trip the GCR",
    ],
  },
  "Open phase sensing on a current transformer.": {
    answer: "is detected on generator neutral circuit",
    choices: [
      "is detected on generator neutral circuit",
      "is detected using all phases",
      "is detected using any phase",
    ],
  },
  "If the battery is switched off in flight, the.": {
    answer: "battery is disconnected from bus",
    choices: [
      "captain's instruments will be powered from the standby bus",
      "battery is disconnected from bus",
      "generator voltage falls to zero",
    ],
  },
  "To flash a generator field the.": {
    answer: "generator must be stationary",
    choices: [
      "generator is on line and producing a voltage less than the flashing voltage",
      "generator rotates but is not on line",
      "generator must be stationary",
    ],
  },
  "Voltage is controlled by.": {
    answer: "the voltage regulator",
    choices: [
      "the constant speed drive",
      "the voltage regulator",
      "the swashplate",
    ],
  },
  "The ground interlock pins are numbered.": {
    answer: "E and F",
    choices: ["A and B", "C and N", "E and F"],
  },
  "Distilled water should be added to a ni-cad battery.": {
    answer: "only in the battery workshop",
    choices: [
      "only in the battery workshop",
      "at any time",
      "when fully charged",
    ],
  },
  "Overflowing electrolyte in a ni-cad battery indicates.": {
    answer: "excessive charging current",
    choices: [
      "not enough charging current",
      "excessive charging current",
      "low electrolyte temperature",
    ],
  },
  "During a normal engine shutdown, generator tripping is initiated by.": {
    answer: "undervoltage",
    choices: ["undervoltage", "underfrequency", "overcurrent"],
  },
  "What would you use to neutralise nicad battery spillage?.": {
    answer: "Boric acid",
    choices: ["Boric acid", "Distilled water", "Bicarbonate of soda"],
  },
  "Before operating generators in parallel, their voltages should be matched to prevent.":
    {
      answer: "overloading the generator drive and shearing of splines",
      choices: [
        "large circulating currents developing",
        "overloading the generator drive and shearing of splines",
        "voltage spikes of sufficient magnitude to trigger GCU overvoltage circuits",
      ],
    },
  "Consumer loads are connected to a busbar.": {
    answer: "in parallel so when loads are shed current is reduced",
    choices: [
      "in series so when loads are shed voltage is reduced",
      "in parallel so when loads are shed current is reduced",
      "in series so when loads are shed current is reduced",
    ],
  },
  "A current transformer connected on the neutral star point of a generator is for.":
    {
      answer: "differential current protection",
      choices: [
        "overload protection",
        "differential current protection",
        "negative sequence protection",
      ],
    },
  "Differential protection as applied to AC generation systems compares.": {
    answer: "generator current to busbar current",
    choices: [
      "generator current to busbar current",
      "generator voltage to busbar voltage",
      "ambient pressure to cabin pressure",
    ],
  },
  "In an AC generation system, the frequency and phase rotation.": {
    answer: "must be synchronised prior to paralleling",
    choices: [
      "must be synchronised prior to paralleling",
      "is of no consequence after paralleling",
      "must be out of phase prior to paralleling",
    ],
  },
  "Diodes are placed across a contactor to.": {
    answer: "speed up operation by reducing back EMF",
    choices: [
      "ensure smooth contactor operation",
      "prevent contact bounce",
      "speed up operation by reducing back EMF",
    ],
  },
  "Placing the battery master switch to off during flight will.": {
    answer: "isolate the battery from the main busbar",
    choices: [
      "isolate the battery from the main busbar",
      "shut down the APU",
      "disconnect all power to the main busbar",
    ],
  },
  "Whilst operating paralleled AC constant frequency generators, it is important to maintain generator outputs at the same voltage.":
    {
      answer:
        "to prevent a circulating current of considerable magnitude developing between two or more generators",
      choices: [
        "to prevent a circulating current of considerable magnitude developing between two or more generators",
        "to prevent CSD shock loading",
        "to prevent a circulating current developing between two or more TRUs",
      ],
    },
  "A voltage regulator installed in series with a generator field.": {
    answer: "uses a voltage coil in parallel with generator output",
    choices: [
      "uses a voltage coil in series with generator output",
      "uses a voltage coil in parallel with generator output",
      "uses a current coil in parallel with generator output",
    ],
  },
  "CSD warning lights on the flight deck normally indicate.": {
    answer: "low oil pressure, high oil temperature",
    choices: [
      "high oil pressure, low oil temperaturelow oil pressure, high oil temperature",
      "low oil pressure, low oil temperature",
      "low oil pressure, high oil temperature",
    ],
  },
  "The output frequency of a hydraulically driven standby generator is controlled by.":
    {
      answer: "an hydraulically actuated swash plate",
      choices: ["an hydraulically actuated swash plate", "a CSD", "an IDG"],
    },
  "An AC generator used with a CSD.": {
    answer:
      "needs a voltage controller to maintain voltage with increasing load",
    choices: [
      "needs a voltage controller to maintain voltage with increasing load",
      "does not need a voltage controller because current is kept constant",
      "does not need a voltage controller because voltage is kept constant",
    ],
  },
  "Power to a GCU is supplied.": {
    answer: "initially by a 'field tickling' supply and then PMG output",
    choices: [
      "initially by a 'field tickling' supply and then PMG output",
      "by the battery bus or rectified generator output",
      "by the generator output only",
    ],
  },
  "Trip signals for a GCR are.": {
    answer: "differential protection and undervoltage",
    choices: [
      "overfrequency and undervoltage",
      "differential protection and undervoltage",
      "underfrequency and overcurrent",
    ],
  },
  "Abnormal CSD operation is monitored on the flight deck by observing indications of.":
    {
      answer: "high oil temperature / low oil pressure",
      choices: [
        "low oil quantity / low oil temperature",
        "high oil temperature / low oil pressure",
        "High oil temperature / low oil quantity",
      ],
    },
  "Wires in hot temperature areas should be bound with.": {
    answer: "Teflon",
    choices: ["Teflon", "Nomex", "PVC"],
  },
  "A heat gun should be operated at.": {
    answer: "the specified temperature",
    choices: [
      "100°C above the specified",
      "100°C below the specified",
      "the specified temperature",
    ],
  },
  "High voltages on a generator in a parallel system should be prevented because.":
    {
      answer: "it will trip the GCR",
      choices: [
        "it will trip the GCR",
        "it will damage the drive shaft",
        "it will cause high circulating current in the bus / other generators",
      ],
    },
  "Over-voltage condition trips the generator. The time taken to trip the GCU depends on.":
    {
      answer: "amplitude of voltage",
      choices: [
        "amplitude of voltage",
        "closing of fuel and hydraulic valves",
        "time delay circuit",
      ],
    },
  "Speed of an HMG is controlled by": {
    answer: "swashplate",
    choices: ["A CSD unit", "swashplate", "IDG unit"],
  },
  "A permanent magnet should have.": {
    answer: "high retentivity, low coercivity",
    choices: [
      "low retentivity, low coercivity",
      "high retentivity, low coercivity",
      "low retentivity, high coercivity",
    ],
  },
  "What will happen if the aircraft battery becomes overheated?.": {
    answer: "The battery charger will switch to trickle charge mode",
    choices: [
      "The power supply to the battery charger will be interrupted",
      "The battery charger will switch to trickle charge mode",
      "The hot battery bus will be disconnected from the battery",
    ],
  },
  "When the temperature increases in a lead acid battery, the SG will.": {
    answer: "decrease",
    choices: ["decrease", "increase", "remain the same"],
  },
  "On testing a generator it is found to require adjusting, where would you adjust it?.":
    {
      answer: "By means of a remote trimmer",
      choices: [
        "In the cockpit on the flight engineers panel",
        "On the GCU",
        "By means of a remote trimmer",
      ],
    },
  "Control of hydraulically powered emergency electrical generator frequency is.":
    {
      answer: "by angle of swash plate",
      choices: ["by CSU", "by angle of swash plate", "by IDG"],
    },
  "When a ni-cad battery is fully charged.": {
    answer: "the electrolyte level is higher level than normal",
    choices: [
      "the electrolyte level is higher level than normal",
      "the electrolyte level is lower than normal",
      "the electrolyte level stays the same",
    ],
  },
  "Electrical load on aircraft is controlled by.": {
    answer: "a BPCU",
    choices: ["a BPCU", "an IRS", "a GCU"],
  },
  "A 4:1 step-up transformer receives 120VAC in its primary and has 1600 Ohms resistance in its secondary. What is the current drawn from the source?.":
    { answer: "1.2 A", choices: ["1.2 A", "0.3 A", "3 A"] },
  "After engine start using a Ni-Cad battery, the pilot observes on the battery charger indicator, an initial high current draw followed by a rapid decrease in current.":
    {
      answer: "no cause for concern",
      choices: [
        "there is a problem with the charging circuit and he must shut-down the engines",
        "the battery is faulty",
        "no cause for concern",
      ],
    },
  "Topping up a Ni-Cad battery in situ.": {
    answer: "is not allowed",
    choices: ["is not allowed", "is only allowed in the shop", "is permitted"],
  },
  "In a lead-acid battery after numerous checks, one cell has low reading.": {
    answer: "It must be replaced",
    choices: ["It needs topping up", "It must be replaced", "It is defective"],
  },
  "An external power plug has two short pins. These are used for.": {
    answer: "30 minutes",
    choices: ["30 minutes", "Forever", "60 minutes"],
  },
  "The purpose of a synchronising bus bar is.": {
    answer: "the interlock circuit",
    choices: [
      "ground handling bus",
      "the interlock circuit",
      "a guide for correct alignment of the plug in the socket",
    ],
  },
  "To confirm the state of charge of a ni-cad battery.": {
    answer: "to allow monitoring and trimming from the flight deck",
    choices: [
      "to allow monitoring and trimming from the flight deck",
      "to enable two propeller systems to be synchronised",
      "to monitor total current load",
    ],
  },
  "Circulating currents are associated with.": {
    answer: "measure the discharge time",
    choices: [
      "measure the discharge time",
      "subject the battery to load, check voltage and check the SG of each cell",
      "subject the battery to load and check the voltage",
    ],
  },
  "Generator brush bedding.": {
    answer: "AC generators in parallel",
    choices: [
      "AC and DC generators in parallel",
      "AC generators in parallel",
      "DC generators in parallel",
    ],
  },
  "A short range passenger aircraft has complete electrical failure. What time duration would the battery be expected to power essential equipment?.":
    {
      answer: "can be done on the aircraft",
      choices: [
        "should only be done if 50% of the width and 80% of the length is already being done",
        "should not be done on the aircraft",
        "can be done on the aircraft",
      ],
    },
  "amp?. What is the amperage at point '' to the nearest": {
    answer: "101 Amps",
    choices: ["100 Amps", "101 Amps", "102 Amps"],
  },
  "Pitot tubes are heated by.": {
    answer: "AC or DC",
    choices: ["DC", "AC", "AC or DC"],
  },
  "Paralleling is used for.": {
    answer: "AC and DC electrical generators",
    choices: [
      "AC and DC electrical generators",
      "DC electrical generators only",
      "AC electrical generators only",
    ],
  },
  "Battery charging procedures can be found in AT": {
    answer: "Chapter 24 Section 31",
    choices: [
      "Chapter 24 Section 21",
      "Chapter 24 Section 31",
      "Chapter 31 Section 21",
    ],
  },
  "In a carbon pile regulator, the resistive element is.": {
    answer:
      "in series with the field and changes resistance with surface area contact",
    choices: [
      "in series with the field and changes resistance with surface area contact",
      "in parallel with the field and changes resistance with changing length",
      "in series with the field and changes resistance with changing length",
    ],
  },
  "Maximum battery temperature on charging before protection circuit starts is.":
    {
      answer: "144 degrees F",
      choices: ["144 degrees C", "144 degrees F", "71 degrees F"],
    },
  "If an aircraft has no battery charger, the battery is charged by.": {
    answer: "constant voltage",
    choices: [
      "constant current until a predetermined limit when it automatically switches to constant voltage",
      "constant current",
      "constant voltage",
    ],
  },
  "The output of a carbon pile regulator with no variation of loading is.": {
    answer: "stationary",
    choices: ["stationary", "pulse width modulating", "fluctuating"],
  },
  "In a transistor voltage regulator, the voltage output is controlled by.": {
    answer: "zeners and transistors",
    choices: [
      "zeners and transistors",
      "diodes and transformers",
      "transformers and transistors",
    ],
  },
  "A paralleled relay for a DC system is energised and connected by.": {
    answer: "voltage and current coil",
    choices: ["voltage coil", "current coil", "voltage and current coil"],
  },
  "Increasing the real load primarily.": {
    answer: "decreases frequency",
    choices: [
      "increases output voltage and increases frequency",
      "decreases output voltage",
      "decreases frequency",
    ],
  },
  "Inductive reactive load causes.": {
    answer: "no effect on torque but produces extra heat dissipated",
    choices: [
      "no effect on torque but produces extra heat dissipated",
      "increase in torque only",
      "increase in torque and increase in heat dissipated",
    ],
  },
  "The power factor of an AC generator identifies the proportion of.": {
    answer: "real power from the generator that does work",
    choices: [
      "apparent power from the generator that does work",
      "real power from the generator that does work",
      "reactive power from the generator that does work",
    ],
  },
  "Differential protection in an AC system protects against.": {
    answer: "short circuits",
    choices: [
      "line-line, line-line-line, line-earth faults",
      "short circuits",
      "a reverse current flowing from the battery",
    ],
  },
  "When resetting the CSD on the ground, the engine should be.": {
    answer: "stationary",
    choices: ["rotating at Nsync", "rotating at idle", "stationary"],
  },
  "One of the main purposes of a CSD is to.": {
    answer: "enable generators to be paralleled",
    choices: [
      "prevent engine overload",
      "enable generators to be paralleled",
      "maintain constant load on the generator",
    ],
  },
  "In an undervolt condition in an AC generator system, the most likely consequence is.":
    {
      answer: "activation of the time delay circuit",
      choices: [
        "activation of the time delay circuit",
        "energise the bus tie relay",
        "deactivation of the field regulatory TRs",
      ],
    },
  "If voltage and frequency of the generator drop to zero in flight, it would be an indication that the.":
    {
      answer: "CSD driveshaft had sheared",
      choices: [
        "bus tie interlock is inoperative",
        "CSD driveshaft had sheared",
        "phase sequence detection circuit has operated",
      ],
    },
  "Assuming all systems are operating normally, as aircraft electrical load increases, generator output voltage will.":
    {
      answer: "remain constant and amperage output increases",
      choices: [
        "increases and amperage output increases",
        "remain constant and amperage output increases",
        "decrease and amperage output increases",
      ],
    },
  "When installing multiple batteries on aircraft, they are connected in.": {
    answer: "either parallel or series and switched between as an option",
    choices: [
      "series",
      "either parallel or series and switched between as an option",
      "parallel",
    ],
  },
  "What is the small pin on the DC ground power connector?.": {
    answer: "Positive to external power relay",
    choices: [
      "Positive to external power relay",
      "Positive to battery relay",
      "Ground or earth",
    ],
  },
  "How is RAT driven?.": {
    answer: "Airstream",
    choices: ["Airstream", "Compressor", "Fan"],
  },
  "How is an aircraft battery rated?.": {
    answer: "Ampere hours",
    choices: ["Ampere hours", "Joules", "Watts"],
  },
  "A reduction in field strength of a DC shunt motor driving a constant load will result in.":
    {
      answer: "increased torque and speed",
      choices: [
        "reduced torque and increased speed",
        "increased torque and speed",
        "increased torque and reduced speed",
      ],
    },
  "What are the 2 short prongs on an AC plug for?.": {
    answer: "To prevent arcing during plug connection / disconnection",
    choices: [
      "Using AC current to pull on interlock circuit",
      "To prevent arcing during plug connection / disconnection",
      "To help plug location/fit",
    ],
  },
  "A vibration contact voltage regulator consists of a shunt winding and": {
    answer: "current regulation coil in series",
    choices: [
      "current regulation coil in series",
      "voltage regulating coil in series",
      "voltage regulating coil in parallel",
    ],
  },
  "What is the purpose of diode in a power GCR?.": {
    answer: "To prevent back-flow of current in the EMF coil",
    choices: [
      "To allow flow in the event of failure of the relay",
      "To speed up the operation",
      "To prevent back-flow of current in the EMF coil",
    ],
  },
  "Eddy currents are.": {
    answer: "circulating currents",
    choices: [
      "circulating currents",
      "caused by heating effect of the coil",
      "caused by resistance of the coil",
    ],
  },
  "The small pins in the power connector plug are.": {
    answer: "positive",
    choices: ["negative", "neutral", "positive"],
  },
  "When an overvolt is present on an AC generator system, the tripping circuit.":
    {
      answer:
        "trips after a time delay inversely proportional to overvolt amplitude",
      choices: [
        "trips after a time delay inversely proportional to overvolt amplitude",
        "trips after a time delay",
        "trips at a set level",
      ],
    },
  "In an AC distribution system, the purpose of the synchronising bus-bar is to.":
    {
      answer: "provide interconnection between the generator load busbars",
      choices: [
        "provide a means of monitoring the load",
        "provide interconnection between the generator load busbars",
        "supply essential services",
      ],
    },
  "Vibrating contact voltage regulator sensing coil is.": {
    answer: "in parallel with the field windings",
    choices: [
      "across the generator output",
      "in series with the field windings",
      "in parallel with the field windings",
    ],
  },
  "A current transformer connected across the neutral of a 3 phase generator is for.":
    {
      answer: "differential protection",
      choices: [
        "load monitoring",
        "phase sequence monitoring",
        "differential protection",
      ],
    },
  "Zener diodes are for.": {
    answer: "voltage regulation",
    choices: ["voltage stabilisation", "voltage regulation", "rectification"],
  },
  "AC generator output indications are measured in.": {
    answer: "KVA & KW",
    choices: ["KVA & KW", "KW & KVAR", "KW"],
  },
  "Load shedding allows.": {
    answer: "less current to the busbar",
    choices: [
      "less current to the busbar",
      "more current to the busbar",
      "more voltage to the busbar",
    ],
  },
  "How may the output of a transistorised voltage regulator be described?.": {
    answer: "Pulse width modulated DC",
    choices: [
      "Variable AC",
      "Pulse width modulated DC",
      "Slightly variable DC",
    ],
  },
  "In the event of complete AC generator failure in an AC split bus-bar generation system, how is power maintained to the essential AC bus-bar?.":
    {
      answer: "By power fed from a battery supplied static inverter",
      choices: [
        "By power fed from a battery supplied static inverter",
        "By power fed from a hot battery bus-bar only",
        "By power fed from static inverter only",
      ],
    },
  "Which components within a generator control unit connects the output of the field power supply to the generator exciter?.":
    {
      answer: "Generator control relay",
      choices: [
        "Generator power pilot relay",
        "Generator line contactor",
        "Generator control relay",
      ],
    },
  "In what units are static inverters rated?.": {
    answer: "kVA",
    choices: ["kVA", "kVAR", "kW"],
  },
  "In a generator system, a stability winding is used.": {
    answer: "to prevent voltage overshoot",
    choices: [
      "in series with the field to prevent oscillations",
      "to control output current",
      "to prevent voltage overshoot",
    ],
  },
  "On engine shutdown, what prevents GCR being tripped?.": {
    answer: "Under-frequency",
    choices: ["Under-volt", "Under-frequency", "Under-current"],
  },
  "How is real and reactive load sharing achieved in an AC parallel generator system?.":
    {
      answer:
        "Real load by control of the constant speed drives, reactive load by adjustment of generator fields",
      choices: [
        "Real load by control of the constant speed drives, reactive load by adjustment of generator fields",
        "Real and reactive loads by control of the constant speed drives only. Output voltage is controlled by adjustment of generator fields",
        "Real load by control of generator fields, Reactive loads by adjustment of the constant speed drives",
      ],
    },
  "Other than when there is a fault in an aircraft battery or its charging system, when is the charger switched off automatically?.":
    {
      answer:
        "When the battery is used for excessively high discharge currents such as in starting",
      choices: [
        "When the battery is used for excessively high discharge currents such as in starting",
        "When the alternators are fully loaded",
        "When there is a failure of one alternator in a split- bus bar system",
      ],
    },
  "The trimmer resister in a carbon pile volts regulator is.": {
    answer: "in series with the generator volts coil",
    choices: [
      "in series with the generator field",
      "in series with the generator volts coil",
      "in parallel with the generator volts coil",
    ],
  },
  "When a field relay trips the generator off- line, it can be reset.": {
    answer: "on the ground only",
    choices: [
      "after the fault has been cleared",
      "by cycling the generator switch",
      "on the ground only",
    ],
  },
  "In a paralleled AC generator system both A phases must be in synchronisation and.":
    {
      answer: "CBA must equal CBA",
      choices: [
        "CBA must equal ABC",
        "phase rotation does not matter",
        "CBA must equal CBA",
      ],
    },
  "When loads are shed from a busbar automatically.": {
    answer: "bus bar current decreases",
    choices: [
      "bus bar current decreases",
      "bus bar current rises",
      "bus bar voltage rises",
    ],
  },
  "What controls output from the generator?. Page": {
    answer: "GCU",
    choices: ["BPCU", "GCU", "ELCU"],
  },
  "Specific Gravity in a lead acid battery should give an indication of.": {
    answer: "charge",
    choices: ["charge", "electrolyte temperature", "electrolyte level"],
  },
  "During normal engine shut-down, the generator.": {
    answer: "breaker is tripped only",
    choices: [
      "breaker and control relay are both tripped",
      "breaker is tripped only",
      "control relay is tripped only",
    ],
  },
  "The generator warning light will come on when.": {
    answer: "voltage is below battery voltage",
    choices: [
      "voltage is too high",
      "voltage is above battery voltage",
      "voltage is below battery voltage",
    ],
  },
  "When replacing a current transformer.": {
    answer: "it can only be fitted one way round",
    choices: [
      "it can be fitted any way round",
      "voltage/current selection must be made prior to fitting",
      "it can only be fitted one way round",
    ],
  },
  "The economy coil on a relay.": {
    answer: "reduces current required to hold closed",
    choices: [
      "reduces current required to hold closed",
      "makes it cheaper to make",
      "reduces current required to close",
    ],
  },
  "What is the function of the generator control relay?.": {
    answer: "Bring the generator on-line",
    choices: [
      "Bring the generator on-line",
      "Connect the generator to the busbar",
      "Control output voltage",
    ],
  },
  "will. The current consumed by a DC starter motor": {
    answer: "decrease as the engine speed increases",
    choices: [
      "remain constant",
      "increase as the engine speed increases",
      "decrease as the engine speed increases",
    ],
  },
  "A neutralising agent for sulphuric acid is.": {
    answer: "sodium bicarbonate",
    choices: ["borax powder", "citric acid", "sodium bicarbonate"],
  },
  "In a split bus power distribution system.": {
    answer:
      "each generator supplies its own bus and distribution system in normal operation",
    choices: [
      "each generator supplies its own bus and distribution system in normal operation",
      "generators are paralleled on connection to the tie bus",
      "power is split between 115V AC and 28V DC",
    ],
  },
  "Flashing a generator field.": {
    answer: "restores magnetism",
    choices: [
      "decreases resistance",
      "restores magnetism",
      "increases resistance",
    ],
  },
  "When checking SG of electrolyte of lead acid battery, what should be taken into account?.":
    {
      answer: "Electrolyte temperature",
      choices: [
        "Electrolyte temperature",
        "Battery charge",
        "Ambient temperature",
      ],
    },
  "How do you check condition of Ni-Cad battery in situ?.": {
    answer: "By voltmeter in the cockpit, when battery is on load",
    choices: [
      "By voltmeter connected to the battery terminal",
      "By voltmeter in the cockpit when battery is off load",
      "By voltmeter in the cockpit, when battery is on load",
    ],
  },
  "The reactive load circuit in a multi-engined AC generator system.": {
    answer: "modifies generator field excitation current",
    choices: [
      "modifies generator field excitation current",
      "modifies generator drive speed",
      "modifies generator field excitation voltage",
    ],
  },
  "A vibrating type voltage regulator uses a volts coil.": {
    answer: "in parallel with the generator output",
    choices: [
      "in series with the generator output",
      "in series with the current coil",
      "in parallel with the generator output",
    ],
  },
  "The purpose of the economy contacts in a relay is to.": {
    answer: "reduce the current required to hold the contacts closed",
    choices: [
      "prevent contact pitting and burning",
      "reduce the current required to hold the contacts closed",
      "close the auxiliary contacts before the main contacts",
    ],
  },
  "A vibrating contact voltage regulator has.": {
    answer: "a resister in parallel with the points",
    choices: [
      "a resistor in series with the points",
      "a volts coil in parallel with the points",
      "a resister in parallel with the points",
    ],
  },
  "Brush bedding-in on a starter generator can be carried out.": {
    answer: "only off the aircraft",
    choices: [
      "when 80 percent of the brush area has been previously bedded in, on the bench",
      "only off the aircraft",
      "during flight",
    ],
  },
  "What would be the cause of a low electrolyte level in a nicad battery?.": {
    answer: "Over charging current",
    choices: ["Evaporation", "Over charging current", "Undercharging current"],
  },
  "An AC generator connected to a CSD requires.": {
    answer: "a separate voltage regulator",
    choices: [
      "a separate voltage regulator",
      "no voltage regulator as the CSD will control generator frequency",
      "no voltage regulator as the CSD will control the voltage",
    ],
  },
  "If electrolyte from a lead-acid battery is spilled in the battery compartment, which procedure should be followed?.":
    {
      answer:
        "Apply sodium bicarbonate solution to the affected are followed by a water rinse",
      choices: [
        "Apply sodium bicarbonate solution to the affected are followed by a water rinse",
        "Apply boric acid solution to the affected area followed by a water rinse",
        "Rinse the affected area thoroughly with clean water",
      ],
    },
  "Which statement regarding the hydrometer reading of a lead-acid storage battery electrolyte is true?.":
    {
      answer:
        "The hydrometer reading does not require a temperature correction if the electrolyte temperature is 60°F",
      choices: [
        "A specific gravity correction should be subtracted from the hydrometer reading if the electrolyte temperature is above 20°c",
        "The hydrometer reading will give a true indication of the capacity of the battery regardless of the electrolyte temperature",
        "The hydrometer reading does not require a temperature correction if the electrolyte temperature is 60°F",
      ],
    },
  "An increase in the speed of a DC generator will cause the voltage to rise with the following resultant action in the voltage regulator:-.":
    {
      answer:
        "The volts coil to increase its magnetic field thus decreasing the field excitation",
      choices: [
        "The volts coil to exert more pull thus increasing the current in the generator field",
        "The volts coil to increase its magnetic field thus decreasing the field excitation",
        "The volts coil to exert less pull thus increasing the resistance of the carbon pile",
      ],
    },
  "The equalizing coils on voltage regulators will.": {
    answer:
      "have current passing through them from the higher loaded generator to the lower",
    choices: [
      "be connected to each other when the generators are paralleled",
      "have current passing through them only when the generators are not paralleled",
      "have current passing through them from the higher loaded generator to the lower",
    ],
  },
  "A fully charged lead-acid battery will not freeze until extremely low temperatures are reached because.":
    {
      answer: "most of the acid is in the solution",
      choices: [
        "the acid is in the plates, thereby increasing the specific gravity of the solution",
        "increased internal resistance generates sufficient heat to prevent freezing",
        "most of the acid is in the solution",
      ],
    },
  "What determines the amount of current which will flow through a battery while it is being charged by a constant voltage source?.":
    {
      answer: "The state-of-charge of the battery",
      choices: [
        "The total plate area of the battery",
        "The state-of-charge of the battery",
        "The ampere-hour capacity of the battery",
      ],
    },
  "The method used to rapidly charge a nickel- cadmium battery utilizes.": {
    answer: "constant voltage and varying current",
    choices: [
      "constant current and varying voltage",
      "constant voltage and varying current",
      "constant current and constant voltage",
    ],
  },
  "The presence of small amounts of potassium carbonate deposits on the top of nickel-cadmium battery cells that have been in service for time is an indication of.":
    {
      answer: "excessive gassing",
      choices: [
        "normal operation",
        "excessive gassing",
        "excessive plate sulphation",
      ],
    },
  "The servicing and charging of nickel-cadmium and lead-acid batteries together in the same service area is likely to result in.":
    {
      answer: "contamination of both types of batteries",
      choices: [
        "contamination of both types of batteries",
        "increased explosion and/or fire hazard",
        "normal battery service life",
      ],
    },
  "If the current drawn from No.1 generator of a twin generator DC system is less than that drawn from No.2 generator, the current in the No.2 generator equalizing coil will flow.":
    {
      answer:
        "in the same direction as the current flow in the voltage coil, reducing the output of No.2 generator",
      choices: [
        "in the same direction as the current flow in the voltage coil, reducing the output of No.2 generator",
        "in the same direction as the current flow in the voltage coil, increasing the output of No.2 generator",
        "in the opposite direction to the current flow in the voltage coil, reducing the output of No.2 generator",
      ],
    },
  "On a C.S. driven generator, operation of the Disconnect Solenoid will disconnect the generator drive and.":
    {
      answer: "resetting can only be carried out on the ground",
      choices: [
        "C.S. driven generator, operation of the Disconnect Solenoid will disconnect the generator drive and it will automatically reset itself when the fault is rectified",
        "it can only be reset when all loads are switched off",
        "resetting can only be carried out on the ground",
      ],
    },
  "A constant speed drive unit has a warning light indication.": {
    answer: "for low oil pressure",
    choices: [
      "for low speed",
      "for low oil pressure",
      "for when it is disconnected from the generator",
    ],
  },
  "The electrolyte of a nickel-cadmium battery is the lowest when the battery is.":
    {
      answer: "in a discharged condition",
      choices: [
        "being charged",
        "under load condition",
        "in a discharged condition",
      ],
    },
  "Nickel-cadmium batteries which are stored for a long period of time will show a low fluid level because the.":
    {
      answer: "electrolyte becomes absorbed in the plates",
      choices: [
        "fluid evaporates through vents",
        "electrolyte becomes absorbed in the plates",
        "fluid level was not periodically replenished",
      ],
    },
  "The purpose of 'field flashing' is to.": {
    answer: "change the polarity of residual magnetism in a field winding",
    choices: [
      "test the insulation resistance of a field winding with a 1000V supply",
      "measure the residual magnetism in a field winding 24 hours after the field supply is removed",
      "change the polarity of residual magnetism in a field winding",
    ],
  },
  "The purpose of an inverter is to convert.": {
    answer: "DC to AC",
    choices: ["DC to AC", "AC to a higher frequency AC", "AC to DC"],
  },
  "In a constant frequency AC system, real load sharing is achieved by regulating the.":
    {
      answer: "generator drive torque",
      choices: [
        "generator drive torque",
        "generator speed",
        "voltage regulator",
      ],
    },
  "How can the state-of-charge of a nickel- cadmium battery be determined?.": {
    answer: "By measuring discharge",
    choices: [
      "By the level of the electrolyte",
      "By measuring the specific gravity of the electrolyte",
      "By measuring discharge",
    ],
  },
  "What may result if water is added to a nickel- cadmium battery when it is not fully charged?.":
    {
      answer: "Excessive spewing will occur during the charging cycle",
      choices: [
        "Excessive spewing will occur during the charging cycle",
        "The cell temperature will run too low for proper output",
        "No adverse results since water may be added anytime",
      ],
    },
  "In nickel-cadmium batteries, a rise in cell temperature.": {
    answer: "causes a decrease in internal resistance",
    choices: [
      "causes an increase in internal resistance",
      "increases cell voltage",
      "causes a decrease in internal resistance",
    ],
  },
  "When a charging current is applied to a nickel-cadmium battery, the cells emit gas only.":
    {
      answer: "toward the end of the charging cycle",
      choices: [
        "toward the end of the charging cycle",
        "when the electrolyte level is low",
        "if they are defective",
      ],
    },
  "The equalising coil in the carbon pile regulator.": {
    answer: "modifies the effect of the voltage sensing coil",
    choices: [
      "modifies the effect of the voltage sensing coil",
      "becomes inoperative when the undervolt relay energises",
      "is connected in series with the carbon pile",
    ],
  },
  "In a constant frequency AC system, reactive load sharing is achieved by regulating the.":
    {
      answer: "voltage regulator",
      choices: [
        "generator speed",
        "generator drive torque",
        "voltage regulator",
      ],
    },
  "Under-frequency in an AC supply would cause.": {
    answer: "overheating of inductive devices",
    choices: [
      "overheating of inductive devices",
      "overvoltage of capacitive devices",
      "overspeeding of AC motors",
    ],
  },
  "The electrolyte in a lead-acid battery contains.": {
    answer: "sulphuric acid",
    choices: ["nitric acid", "sulphuric acid", "hydrochloric acid"],
  },
  "In the procedure to be followed after spillage of battery acid, neutralizing may be carried out.":
    {
      answer: "with a dilute solution of sodium bicarbonate",
      choices: [
        "by applying a coating of petroleum jelly",
        "with a dilute solution of sodium bicarbonate",
        "by washing with distilled water",
      ],
    },
  "Frequency (Hz) is the number of cycles per.": {
    answer: "second",
    choices: ["revolution", "second", "minute"],
  },
  "The three voltages of a three phase generator are.": {
    answer: "120 degrees apart",
    choices: ["90 degrees apart", "120 degrees apart", "180 degrees apart"],
  },
  "To restore the level of electrolyte which has been lost due to normal gassing during battery charging.":
    {
      answer: "distilled water must be added",
      choices: [
        "sulphuric acid must be added",
        "electrolyte of the same specific gravity as that contained in the battery must be added",
        "distilled water must be added",
      ],
    },
  "A 12 volt lead-acid battery.": {
    answer: "has 6 cells",
    choices: ["has 24 cells", "has 6 cells", "has 12 cells"],
  },
  "The active component of an A.C. circuit is 4 amps and the reactive is 3 amps. Ammeter reading will be.":
    { answer: "5 amps", choices: ["3.4 amps", "7 amps", "5 amps"] },
  "In a delta connected generator.": {
    answer: "line volts equals phase volts",
    choices: [
      "line volts equals 1.73 phase volts",
      "phase volts equals 1.73 line volts",
      "line volts equals phase volts",
    ],
  },
  "The only practical method of maintaining a constant voltage output from an aircraft generator under varying conditions of speed and load is to vary the.":
    {
      answer: "strength of the magnetic field",
      choices: [
        "speed at which the armature rotates",
        "number of conductors in the armature",
        "strength of the magnetic field",
      ],
    },
  "As the generator load is increased (within its rated capacity), the voltage will.":
    {
      answer: "decrease and the amperage output will increase",
      choices: [
        "remain constant and the amperage output will decrease",
        "remain constant and the amperage output will increase",
        "decrease and the amperage output will increase",
      ],
    },
  "When checking the specific gravity of the electrolyte in a battery.": {
    answer: "each cell should be checked as the readings may differ",
    choices: [
      "one cell only need be checked as the remainder will read the same",
      "each cell should be checked as the readings may differ",
      "only the end cells need be checked as they contain the terminals",
    ],
  },
  "Which aircraft circuit would be most likely to use frequency wild 200V AC?.":
    {
      answer: "Windscreen heating",
      choices: ["Hydraulic pump", "Standby compass", "Windscreen heating"],
    },
  "To prevent corrosion at the terminals of a lead-acid battery.": {
    answer: "petroleum jelly may be applied to the connections",
    choices: [
      "petroleum jelly may be applied to the connections",
      "the connectors may be painted",
      "copper connectors are used",
    ],
  },
  "Before taking S.G. readings of a lead-acid battery recently removed from an aircraft.":
    {
      answer: "the electrolyte temperature must be noted",
      choices: [
        "the electrolyte temperature must be noted",
        "a period of 1 hour should have elapsed to allow the S.G. to stabilize",
        "the battery must be charged at the 10 hour rate for one hour",
      ],
    },
  "The output of a DC generator is controlled by varying the.": {
    answer: "field current",
    choices: ["armature current", "engine speed", "field current"],
  },
  "A generator rated at 30 kVA power factor 0.8 has a maximum continuous power output of.":
    { answer: "24 kW", choices: ["37.5 kW", "30 kW", "24 kW"] },
  "The specific gravity of the electrolyte in a lead-acid battery.": {
    answer:
      "changes with the state of charge and is therefore a measure of the state of charge",
    choices: [
      "remains constant with changes in the state of charge but is a useful guide to the amount of acid contained in the electrolyte",
      "remains substantially constant regardless of the state of charge and is not therefore a guide to the state of charge",
      "changes with the state of charge and is therefore a measure of the state of charge",
    ],
  },
  "A battery which is assumed to be 100% efficient and to have a capacity of 60 ampere-hours at the 10 hour rate will deliver.":
    {
      answer: "6 amps for 10 hours",
      choices: [
        "6 amps for 10 hours",
        "60 amps for 10 hours or 6 amps for 10 hours depending upon the rate of demand",
        "60 amps for 10 hours",
      ],
    },
  "Two 12V 25 ampere batteries connected in series will produce.": {
    answer: "24V with 25 ampere hour capacity",
    choices: [
      "12V with 25 ampere hour capacity",
      "24V with 25 ampere hour capacity",
      "12V with 50 ampere hour capacity",
    ],
  },
  "As an installed battery becomes fully charged by the aircraft generator.": {
    answer:
      "the battery voltage nears its nominal level so the charging current decreases",
    choices: [
      "the battery voltage nears its nominal level so the charging current decreases",
      "the battery contactor isolates the battery from the generator",
      "the generator voltage decreases to supply the steadily decreasing current",
    ],
  },
  "On a DC shunt generator without a voltage regulator, if the load increases the generator output voltage will.":
    {
      answer: "decrease",
      choices: ["increase", "remain constant", "decrease"],
    },
  "For battery charging, the electrical supply connected to the battery must be.":
    { answer: "DC", choices: ["AC at 50 c.p.s", "AC at 400 c.p.s", "DC"] },
  "When using A.C. power on the bus bar you require 28V D.C. for battery charging.":
    {
      answer: "an A.C. transformer and rectifier would be required",
      choices: [
        "an A.C. inverter would be required",
        "an A.C. transformer and rectifier would be required",
        "a D.C transformer and rectifier would be required",
      ],
    },
  "Two similar 12V batteries connected in parallel will produce.": {
    answer: "12V e.m.f. with twice the capacity of each battery",
    choices: [
      "24V e.m.f. with the same capacity as each battery",
      "12V e.m.f. with twice the capacity of each battery",
      "24V e.m.f. with twice the capacity of each battery",
    ],
  },
  "If a nicad battery overheats, it is an indication of.": {
    answer: "thermal runaway",
    choices: [
      "the generator voltage regulator setting is too low",
      "the generator is not connected to the bus bar",
      "thermal runaway",
    ],
  },
  "When checking a nicad battery in situ for serviceability.": {
    answer: "a load is applied to the battery and the voltmeter reading noted",
    choices: [
      "a load is applied to the battery and the voltmeter reading noted",
      "a hydrometer must be used",
      "the electrical circuits must be isolated before installing shorting strips",
    ],
  },
  "The output from an AC generator is taken from.": {
    answer: "connections on the stator",
    choices: [
      "slip rings",
      "slip rings via commutator",
      "connections on the stator",
    ],
  },
  "Load sharing on a DC generation system is achieved by.": {
    answer:
      "circulating currents affecting the carbon pile for voltage trimming",
    choices: [
      "circulating currents affecting the carbon pile for voltage trimming",
      "the load differences causing torque signals to vary the engine speed",
      "tachogenerators varying the generators outputs as the engine speed varies",
    ],
  },
  "If a nickel cadmium aircraft battery is not required for immediate service, it should be stored. Page":
    {
      answer: "in the fully discharged condition",
      choices: [
        "in the fully discharged condition",
        "in a totally dry condition",
        "in the fully charged condition",
      ],
    },
  "The correct way to determine the state of charge of a nickel-cadmium battery is.":
    {
      answer: "by a complete discharge and a measured recharge",
      choices: [
        "by checking the specific gravity of each cell",
        "by checking the voltage of each cell under load",
        "by a complete discharge and a measured recharge",
      ],
    },
  "A DC generator will be connected to the busbar after the RCCO contacts close due to.":
    {
      answer: "increasing generator voltage",
      choices: [
        "increasing battery voltage",
        "increasing generator voltage",
        "a differential voltage of 0.5V battery voltage higher than generator",
      ],
    },
  "Spillage of a lead acid electrolyte is detected by.": {
    answer: "indicating paper that turns red",
    choices: [
      "indicating paper that turns red",
      "indicating paper that turns blue",
      "litmus paper that turns black",
    ],
  },
  "To restore electrolyte after spillage.": {
    answer:
      "add a mixture of acid and water of the same s.g. as that in the battery",
    choices: [
      "add a mixture of acid and water of the same s.g. as that in the battery",
      "add acid only",
      "add distilled water only",
    ],
  },
  "When a DC generator fails, the pilot will receive the following indications:-.":
    {
      answer: "Zero current on the ammeter and a red PFWL",
      choices: [
        "Rising voltage and current discharge with a red PFWL",
        "An audio bell and red PFWL",
        "Zero current on the ammeter and a red PFWL",
      ],
    },
  "With a vibrating-contact type voltage regulator the adjustment of generator voltage is carried out by.":
    {
      answer: "alteration of contact spring tension",
      choices: [
        "adjustment of voltage coil resistance",
        "alteration of contact spring tension",
        "alteration of the field resistance",
      ],
    },
  "Battery SG is measured using": {
    answer: "hydrometer",
    choices: ["hygrometer", "hypsometer", "hydrometer"],
  },
  "A battery for use on aircraft must have a capacity of.": {
    answer: "0.8",
    choices: ["0.8", "0.5", "0.9"],
  },
  "When connecting aircraft batteries, the last lead to connect is the.": {
    answer: "negative",
    choices: ["negative", "positive earth", "positive"],
  },
  "Polarization in a cell is.": {
    answer: "the fact that hydrogen bubbles form on the -ve plate",
    choices: [
      "the fact that hydrogen bubbles form on the -ve plate",
      "the fact that as a battery discharges, the -ve plate's potential approaches that of the +ve plate's",
      "the establishing of a potential across the cell",
    ],
  },
  "Battery capacity is checked by.": {
    answer:
      "discharging while maintaining the voltage constant by varying a resistor in the circuit and checking the time to be discharged",
    choices: [
      "discharging while maintaining the voltage constant by varying a resistor in the circuit and checking the time to be discharged",
      "discharging at a constant current and checking the time taken to reach the discharged state",
      "measuring the terminal voltage whilst on load and multiplying by the current drawn",
    ],
  },
  "The frequency of an AC generator is dependant on the.": {
    answer: "number of pairs of poles and the speed of the rotor",
    choices: [
      "number of pairs of poles and the speed of the rotor",
      "number of conductors and the field strength",
      "field strength and the speed of the generator",
    ],
  },
  "To adjust the voltage output of an AC generator, whilst maintaining constant frequency, it is necessary to.":
    {
      answer: "alter the field current",
      choices: [
        "alter the reactance of the stator winding circuit",
        "alter the field current",
        "alter the driving speed",
      ],
    },
  "In a paralleled AC generation system load sharing is for.": {
    answer: "real and reactive load",
    choices: ["reactive load only", "real load only", "real and reactive load"],
  },
  "Single phase components in a 3 phase system may be connected between.": {
    answer: "any phase and earth or between any two phases",
    choices: [
      "phases A and B only",
      "the phase and earth only",
      "any phase and earth or between any two phases",
    ],
  },
  "A frequency wild supply would be suitable for.": {
    answer: "deicing loads",
    choices: [
      "instruments and navigation systems",
      "deicing loads",
      "3-phase torque motors",
    ],
  },
  "Three 12V, 40Ah accumulators in series would give.": {
    answer: "36V 40Ah",
    choices: ["36V 120Ah", "12V 120Ah", "36V 40Ah"],
  },
  "Three 12V, 40Ah accumulators in parallel would give.": {
    answer: "12V 120Ah",
    choices: ["12V 40Ah", "12V 120Ah", "36V 120Ah"],
  },
  "An inverter can be an AC generator driven by.": {
    answer: "a DC motor",
    choices: ["an AC motor", "either an AC or DC motor", "a DC motor"],
  },
  "When mixing electrolyte for lead acid batteries.": {
    answer: "add acid to water",
    choices: [
      "the method of mixing is unimportant",
      "add acid to water",
      "add water to acid",
    ],
  },
  "The RPM of a 6 pole, 400 Hz alternator is.": {
    answer: "8000",
    choices: ["6000", "8000", "4000"],
  },
  "The ratio between apparent power and true power is the.": {
    answer: "power factor",
    choices: ["power factor", "efficiency", "power rating"],
  },
  "Apparent power is measured in.": {
    answer: "Volt Amps",
    choices: ["Volt Amps", "Kilovolts", "Watts"],
  },
  "A Ni-Cad battery consists of 19, 1.2 volt cells. What will be the nominal battery output?.":
    { answer: "22V", choices: ["20V", "24V", "22V"] },
  "When operating two AC generators unparalleled, the phase of each.": {
    answer: "is unimportant",
    choices: [
      "is unimportant",
      "must be in opposition to one another",
      "must be synchronized",
    ],
  },
  "When the GPU is connected to the aircraft.": {
    answer: "it is not paralleled with the aircraft generator",
    choices: [
      "it supplies essential services",
      "it is not paralleled with the aircraft generator",
      "it is paralleled with the aircraft generator",
    ],
  },
  "A lead-acid battery with 12 cells connected in series (no-load voltage = 2.1 volts per cell) furnishes 10 amperes to a load of 2 ohms resistance. The internal resistance of the battery in this instance is.":
    { answer: "0.52 ohms", choices: ["5.0 ohms", "2.52 ohms", "0.52 ohms"] },
  "The rating of an aircraft alternator is 40 KVA at PF 0.8 lagging.": {
    answer: "The maximum load permitted is 32KW",
    choices: [
      "The maximum load under all conditions is 40KVA",
      "The maximum load under all conditions is 40KW",
      "The maximum load permitted is 32KW",
    ],
  },
  "An I.D.G (integrated drive generator).": {
    answer: "incorporates the alternator and CSD as one unit",
    choices: [
      "does not require a CSDU",
      "incorporates the alternator and CSD as one unit",
      "has separate CSDU",
    ],
  },
  "A P.M.G (Permanent Magnet Generator) is a small built in generator which.": {
    answer: "provides initial excitation",
    choices: [
      "only rotates after starting",
      "only rotates during starting",
      "provides initial excitation",
    ],
  },
  "To parallel an alternator with another alternator the alternators must have the same.":
    {
      answer: "frequency, voltage and phase relationship",
      choices: [
        "frequency, voltage and phase relationship",
        "frequency, RPM and speed",
        "frequency, RPM and phase relationship",
      ],
    },
  "Speed of an alternator may be controlled by.": {
    answer: "CSDU (constant speed drive unit)",
    choices: [
      "keeping engine rpm constant",
      "varying the field current",
      "CSDU (constant speed drive unit)",
    ],
  },
  "Frequency wild' alternators supply.": {
    answer: "resistive circuits",
    choices: [
      "capacitive circuits",
      "inductive circuits",
      "resistive circuits",
    ],
  },
  "The real load of an alternator is directly related to.": {
    answer: "output shaft torque",
    choices: ["output voltage", "output shaft rpm", "output shaft torque"],
  },
  "How is initial voltage build-up ensured in a brushless generating system, before full output is available from the voltage regulator?.":
    {
      answer: "Permanent magnets are mounted between the exciter field poles",
      choices: [
        "Excitation form the DC busbars is automatically provided during the start sequence",
        "A switch must be operated by the crew to provide excitation form the dc busbar to bring generator on line",
        "Permanent magnets are mounted between the exciter field poles",
      ],
    },
  "Insulation resistance of electrical machines is.": {
    answer: "normally higher when the machine is hot",
    choices: [
      "normally lower when the machine is hot",
      "not affected by change of temperature of machine",
      "normally higher when the machine is hot",
    ],
  },
  "The purpose of a thermistor in a brushless AC generator is to.": {
    answer:
      "keep the exciter field resistance nearly constant at varying temperatures",
    choices: [
      "keep the resistance of the rectifiers nearly constant at varying temperatures",
      "keep the exciter field resistance nearly constant at varying temperatures",
      "compensate for temperature changes in the main AC stator windings",
    ],
  },
  "The term 'random paralleling' means the incoming alternator's output voltage frequency and phase relationship is.":
    {
      answer: "not the same",
      choices: ["not the same", "the outputs are constant", "the same"],
    },
  "One lamp is connected across corresponding phases of two alternators. They will be synchronised when.":
    {
      answer: "the lamp is extinguished",
      choices: [
        "the lamp is maximum brightness",
        "the lamp is extinguished",
        "the lamp is either at maximum brightness or is extinguished",
      ],
    },
  "Automatic synchronising means that the incoming alternator's voltage and frequency.":
    {
      answer:
        "an be checked at the system's electrical panel by selecting the relevant alternator",
      choices: [
        "can be synchronised using the two lamps provided at the system's panel",
        "cannot be checked",
        "an be checked at the system's electrical panel by selecting the relevant alternator",
      ],
    },
  "The danger of random paralleling is the possibility of.": {
    answer: "crash engagement",
    choices: [
      "crash engagement",
      "disconnection of the other alternators",
      "ground power disconnection",
    ],
  },
  "What is monitored in a constant speed drive?.": {
    answer: "Hi oil temperature and low oil press",
    choices: [
      "Hi oil temperature and low oil press",
      "Low oil press and CSD speed",
      "Low oil temperature and low oil press",
    ],
  },
  "The CSD or IDG speed governor setting.": {
    answer: "is adjusted with the engine stationary",
    choices: [
      "is adjusted with the engine running",
      "is adjusted with the engine stationary",
      "is not allowed to be adjusted",
    ],
  },
  "An external ground power supply can be used for.": {
    answer: "all normal services required by flight and ground crew",
    choices: [
      "all normal services required by flight and ground crew",
      "only the ground handling busbar services",
      "only the emergency busbar services",
    ],
  },
  "The APU generator can normally be.": {
    answer:
      "used during flight as a back up supply if the main aircraft supply fails",
    choices: [
      "connected in parallel with the aircraft's main generators",
      "used during flight as a back up supply if the main aircraft supply fails",
      "connected in parallel with the ground power supply",
    ],
  },
  "The impedance on a run of co-axial cable is.": {
    answer: "not affected by length of cable",
    choices: [
      "inversely proportional to the length of cable",
      "not affected by length of cable",
      "proportional to the length of cable",
    ],
  },
  "Galley loads are supplied from the.": {
    answer: "main bus bar",
    choices: ["ground service bus", "main bus bar", "battery bus bar"],
  },
  "A ni-cad battery is stored in the.": {
    answer: "fully discharged condition",
    choices: [
      "fully discharged condition",
      "dry condition",
      "fully charged condition",
    ],
  },
  "Transformer rectifier unit (TRUs) change.": {
    answer: "single phase to direct current",
    choices: [
      "three phase AC to direct current",
      "direct current to AC",
      "single phase to direct current",
    ],
  },
  "A frequency wild AC generator is used for.": {
    answer: "deicing loads",
    choices: ["fluorescent lights", "instruments", "deicing loads"],
  },
  "What should you do if the electrolyte is found to be low in one cell of a lead acid battery?.":
    {
      answer: "Top-up the individual cell with distilled water",
      choices: [
        "Cell is defective, replace the battery",
        "Replace the defective cell",
        "Top-up the individual cell with distilled water",
      ],
    },
  "What is the purpose of the diode on a contactor?.": {
    answer: "Prevent spikes",
    choices: [
      "Prevent spikes",
      "Prevent bounce",
      "To prevent current going the wrong way",
    ],
  },
};

export default questionBankELE;
