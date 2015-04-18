(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var _ = require('underscore');
_.mixin(require('./underscore_mixins'));

var D = require('D');
var stateCities = require('./usa_state_cities');



var db = {"count": 20, "results": [{"incident_date": null, "city": "Lumberland", "searched_date": "2006-12-09", "victim_age": 42, "shots_fired": 5, "weapon": "knife or cutting instrument", "victim_race": "white", "agency": "Lumberland Constables", "county": "Sullivan", "source_url": "http://www.recordonline.com/apps/pbcs.dll/article?AID=%2F20061212%2FNEWS%2F612120314", "victim_armed": "armed", "victim_name": "Lester Devens Jr.", "state": "NY", "shootings": "yes", "victim_gender": "male", "outcome": "killed", "summary": "Monticello \u2014 Town of Lumberland constables ordered Lester Devens Jr. to drop his knife and pepper-sprayed him twice, with no effect, before fatally shooting him. Devens, 42, was shot five times by Lumberland Constables John Cuomo and Victor Czubak Saturday night inside Devens' home on Van Tuyl Road", "officer_names": "John Cuomo, Victor Czubak"}, {"incident_date": null, "city": "San Antonio", "searched_date": "2013-12-06", "victim_age": 23, "shots_fired": 5, "weapon": "dwi, intoxicated, belligerent", "victim_race": "white", "agency": "UIW-PD (University of Incarnate Word PD)", "county": "Bexar", "source_url": "http://www.mysanantonio.com/news/local/article/UIW-Student-slain-by-campus-officer-was-5525223.php", "victim_armed": "unarmed", "victim_name": "Robert Cameron Redus", "state": "TX", "shootings": "yes", "victim_gender": "male", "outcome": "hit", "summary": "SAN ANTONIO \u2014 University of the Incarnate Word student Cameron Redus, a 23-year-old, was shot five times \u2014 including once in the back \u2014 during a fatal altercation with a campus police officer last year, according to an autopsy report released Thursday by the Bexar County Medical Examiner's office.  Authorities said the shooting came after a six-minute struggle in the parking lot of the Treehouse Apartments in Alamo Heights, where Redus lived.  A toxicology test also showed Redus had a blood alcohol content of .155, nearly twice the legal limit to drive, when authorities say he fought UIW officer Christopher Carter on Dec. 6 in the parking lot of Redus' off-campus apartment complex near Incarnate Word.  The Dec. 7 autopsy conducted by Dr. Elizabeth Peacock found that five bullets had struck Redus in the left eye, upper chest, left elbow, right hip and upper back. The report didn't say which wounds came first, but it concluded that the shot to the back was the \u201cmost immediately lethal.\u201d  At a past press conference, Alamo Heights Police Chief Richard Pruitt said Carter was driving on Broadway in a marked UIW police pickup truck when he spotted another truck being driven erratically. It was in the early morning hours of Dec. 6, and Carter saw the truck strike a curb and swerve briefly into the oncoming lanes.  Carter followed the suspected drunken driver. He was outside his jurisdiction, but Carter was a licensed peace officer authorized to arrest DWI suspects anywhere in Texas.  The officer followed Redus and activated the emergency lights of his police truck near the Treehouse Apartments, where Redus parked and got out of his vehicle.  The dash cam of Carter's truck didn't record video of the altercation, but Carter was wearing a microphone that recorded audio. Pruitt said the recording captured Carter asking Redus to stop and put his hands on the truck. Redus complied, but began to struggle when Carter started to handcuff him, Pruitt said.  During the six-minute confrontation, Carter told Redus 14 times to put his hands behind his back and told him three times that he was under arrest, Pruitt said. Carter told Redus to stop resisting 56 times, Pruitt said.  Redus at one point grabbed Carter's police baton and struck the officer with it, authorities said.  Carter regained control of the baton and Redus broke free. Pruitt said Carter drew his handgun, ordered Redus to stop, and Redus charged him with his hand raised. Carter fired six times.  \u2022 http://www.mysanantonio.com/news/local/article/UIW-Student-slain-by-campus-officer-was-5525223.php \u2022 http://www.mysanantonio.com/news/local/article/Autopsy-UIW-student-shot-in-the-back-5335693.php \u2022 http://www.expressnews.com/news/local/article/Witness-UIW-student-fought-officer-before-fatal-5077162.php#/0", "officer_names": "Cpl. Christopher Carter"}, {"incident_date": null, "city": "Centralia", "searched_date": "2014-06-29", "victim_age": 43, "shots_fired": 1, "weapon": "handgun", "victim_race": "unknown", "agency": "Centralia Police Department", "county": "Lewis", "source_url": "http://www.chronline.com/article_c8ff0b82-ffba-11e3-9841-001a4bcf887a.html", "victim_armed": "armed", "victim_name": "Unreleased", "state": "WA", "shootings": "yes", "victim_gender": "male", "outcome": "killed", "summary": "The officer was called to an incident at a convenience store regarding a stolen burrito, the suspect while being detained attempted to draw his weapon, the officer fired at least one round at the suspect, the suspect was dead at the scene.", "officer_names": "Ruben Ramirez"}, {"incident_date": null, "city": "Oak View", "searched_date": "2013-07-12", "victim_age": 42, "shots_fired": null, "weapon": "handgun", "victim_race": "white", "agency": "Ventura County Sheriff", "county": "Ventura", "source_url": "http://www.vcstar.com/news/authorities-identify-man-shot-to-death-by-in-oak", "victim_armed": "armed", "victim_name": "Daniel Cur\u00adTis Houfek", "state": "CA", "shootings": "yes", "victim_gender": "male", "outcome": "killed", "summary": "Houfek pointed a handgun at deputies, they shot him and called emergency personnel, Houfek died at scene of gunshot wounds. As an aside, the Anti-Defamation League reported Houfek to be a \"promi\u00adnent local white suprema\u00adcist\" http://blog.adl.org/extremism/ventura-county-deputies-kill-white-supremacist-who-pointed-handgun", "officer_names": null}, {"incident_date": null, "city": "Fairview", "searched_date": "2012-01-29", "victim_age": 37, "shots_fired": 3, "weapon": "knife or cutting instrument", "victim_race": "white", "agency": "Fairview Police Department", "county": "Multnomah", "source_url": "http://portlandtribune.com/component/content/article?id=19463", "victim_armed": "armed", "victim_name": "Larry Maurice Wesley Mckinney", "state": "OR", "shootings": "yes", "victim_gender": "male", "outcome": "killed", "summary": "Police answered a DV call and said they saw McKinney w/a large kitchen knife pointed at the officer who answered the door. His partner, Mike Morton, shot McKinney 3 times. Per Multnomah county policy, the case went before a grand jury. McKinney's mother testified that he wasn't given time to follow their command to drop the knife. The officers were cleared of wrongdoing.", "officer_names": "Mike Mortion"}, {"incident_date": null, "city": "Fort Wayne", "searched_date": "2013-04-27", "victim_age": 19, "shots_fired": null, "weapon": "firearm; not stated", "victim_race": "black or african american", "agency": "Fort Wayne Police Department", "county": "Allen", "source_url": "http://news-sentinel.com/apps/pbcs.dll/article?AID=/20140818/NEWS/140819636", "victim_armed": "armed", "victim_name": "Tavontae Jamar Or \"Tj\" Haney", "state": "IN", "shootings": "yes", "victim_gender": "male", "outcome": "killed", "summary": null, "officer_names": "Cameron A. Norris And John D. Drummer"}, {"incident_date": null, "city": "Roanoke", "searched_date": "2007-12-27", "victim_age": null, "shots_fired": null, "weapon": "knife or cutting instrument", "victim_race": "white", "agency": "Roanoke Police Department", "county": "Roanoke", "source_url": "http://www.wsls.com/story/20870498/police-name-officer-involved-in-fatal-shooting", "victim_armed": "armed", "victim_name": "Sharif Al-Malik", "state": "VA", "shootings": "yes", "victim_gender": "male", "outcome": "killed", "summary": "Police say they were responding to a domestic dispute and shot victim when he was holding a knife to his girlfriend's throat. His girlfriend denied police accounts and said victim never held knife to her throat.", "officer_names": "Sgt. John Buzzo"}, {"incident_date": null, "city": "San Antonio", "searched_date": "2014-02-28", "victim_age": 23, "shots_fired": 3, "weapon": "handgun", "victim_race": "black or african american", "agency": "Off-Duty SAPD (San Antonio Police Department)", "county": "Bexar", "source_url": "http://www.mysanantonio.com/news/local/article/Man-jailed-in-incident-that-led-to-fatal-shooting-5290557.php", "victim_armed": "armed", "victim_name": "Marquise Jones", "state": "TX", "shootings": "yes", "victim_gender": "male", "outcome": "killed", "summary": "SAN ANTONIO \u2014 A driver in a crash that led to an officer-involved shooting last week at a drive through refused to turn off his car when ordered to and was arrested on outstanding municipal court warrants, according to a police report released Wednesday.  Fabian Garza, 21, was driving a 1994 Cadillac El Dorado that rear-ended a white SUV early Friday in the drive-through of Chacho's, in the 8600 block of Perrin Beitel Road on the Northeast Side.  Garza tried to back up and leave the scene of the 1 a.m. wreck, according to police. The SUV's driver, whose identity is unknown, \u201cexchanged words\u201d with the people in the Cadillac and left the scene, according to police.  A witness told Officer Robert Encina of the San Antonio Police Department about the incident and added . Encina was in full uniform working an off-duty security job at the restaurant, of the incident, adding that the people in the Cadillac seemed intoxicated.  The witness said the officer repeatedly asked Garza to turn off the car and step outside the car. Garza and his passenger Marquise Jones, 23, were not following Encina's orders and Jones seemed to be reaching for something in the car, the witness told police.  Encina was able to turn off the car himself, and put the keys on the roof while trying to handcuff Garza, according to police.  At that point, police said Jones got out of the passenger door and pulled a revolver from the area of his waist, turning to look at Encina.  The witness said Encina then fired shots.  Jones started to run westward before collapsing, according to the police report.  An arriving officer found Jones lying face down toward Perrin Beitel road with a gunshot wound on the left side of his back. He was not breathing and was pronounced dead within minutes, according to police.  \u2022 http://www.mysanantonio.com/news/local/article/Man-jailed-in-incident-that-led-to-fatal-shooting-5290557.php \u2022 http://www.expressnews.com/news/local/article/Lawsuit-Cop-targeted-minorities-in-incident-5405382.php \u2022 http://www.kens5.com/story/news/local/2014/06/27/10664486/ \u2022 http://www.kens5.com/story/news/local/2014/06/27/10664384/ \u2022 http://www.sanantonio.gov/Commpa/News/TabId/317/ArtMID/1970/ArticleID/1445/Councilwoman-Taylor-Releases-Statement-on-Chacho%E2%80%99s-Shooting-Incident.aspx", "officer_names": "Officer Robert Encina"}, {"incident_date": null, "city": "Elizabeth", "searched_date": "2014-06-29", "victim_age": 44, "shots_fired": 1, "weapon": "knife or cutting instrument", "victim_race": "unknown", "agency": "Elizabeth Police Department", "county": "Union", "source_url": "http://www.nj.com/union/index.ssf/2014/06/elizabeth_man_shot_by_police_was_threatening_woman_with_knife_authorities_say.html", "victim_armed": "armed", "victim_name": "John Omar Delvalle", "state": "NJ", "shootings": "yes", "victim_gender": "male", "outcome": "killed", "summary": "Officers were called to the scene of a domestic dispute where the suspect was holding a woman at knife point. In the altercation that followed the suspect was shot once, and was pronounced dead at the scene.", "officer_names": null}, {"incident_date": null, "city": "Harriman", "searched_date": "2014-08-19", "victim_age": 28, "shots_fired": 10, "weapon": "handgun", "victim_race": "white", "agency": "Harriman Police Dept", "county": "Roane", "source_url": "http://www.wbir.com/story/news/local/kingston-harriman-roane/2014/08/20/da-officers-justified-in-shooting-armed-burglary-suspect/14352317/", "victim_armed": "armed", "victim_name": "Miranda Guy", "state": "TN", "shootings": "yes", "victim_gender": "female", "outcome": "killed", "summary": "Harriman investigator Lt. Dan Schneider entered the house first and confronted Guy in the kitchen and her roommate, Melissa Grove, in the family room. Grove got down on the floor, and both the officer and Grove said that Guy pointed the gun at her own head and pulled the trigger. It clicked but didn't go off, and Lt. Schneider ordered her to drop the gun.  At that point, the release said that Roane County deputy Chris White came in the front door, and Guy pointed the gun in his direction, Both officers said they ordered Guy to drop the gun several times, but she instead began to walk towards Deputy White with the gun raised. That's when both officers fired their guns at Guy until she dropped to the floor and released the gun.", "officer_names": "Lt. Dan Schneider, Chris White "}, {"incident_date": null, "city": "Centralia", "searched_date": "2014-02-13", "victim_age": 48, "shots_fired": 1, "weapon": "knife or cutting instrument", "victim_race": "unknown", "agency": "Centralia Police Department", "county": "Lewis", "source_url": "http://www.chronline.com/article_b54aecd0-94b9-11e3-8b34-001a4bcf887a.html", "victim_armed": "armed", "victim_name": "Unreleased", "state": "WA", "shootings": "yes", "victim_gender": "male", "outcome": "killed", "summary": "Police were called due to a report of a man hanging around outside of a closed business. One officer approached the suspect at which time he displayed a knife, when ordered to drop the knife, he ran and a second police office fired his weapon, discharging at least one round and killing the suspect.", "officer_names": "Phil Weismiller"}, {"incident_date": null, "city": "Santa Maria", "searched_date": "2012-08-02", "victim_age": 37, "shots_fired": 14, "weapon": "toy/fake/non-lethal gun", "victim_race": "hispanic or latino", "agency": "Santa Maria Police Department", "county": "Santa Barbara", "source_url": "http://www.lompocrecord.com/news/local/crime-and-courts/fatal-police-shooting-deemed-justified/article_faf2eda2-21bc-11e3-a73c-0019bb2963f4.html", "victim_armed": "armed", "victim_name": "Robert Padilla Reyes", "state": "CA", "shootings": "yes", "victim_gender": "male", "outcome": "killed", "summary": "Reyes led the police in a car chase which ended after his car was disabled with a spike strip on Highway 1. He brandished a realistic looking fake semi-automatic weapon and all three officers fired shots. 18 shots were fired, 5 hit Reyes. He had methamphetamines in his system as well as alcohol, and already had \"2 strikes\" in the California system. There is some speculation that he might have been considering suicide by cop. The killing was later deemed justified by the local DA.", "officer_names": null}, {"incident_date": null, "city": "Fort Wayne", "searched_date": "2013-02-20", "victim_age": 21, "shots_fired": null, "weapon": "firearm; not stated", "victim_race": "black or african american", "agency": "Fort Wayne Police Department", "county": "Allen", "source_url": "http://usgunviolence.wordpress.com/2013/02/20/killed-stephen-oneal-wattley-ii-fort-wayne-in/", "victim_armed": "armed", "victim_name": "Stephen O\u2019Neal Wattley Ii", "state": "IN", "shootings": "yes", "victim_gender": "male", "outcome": "killed", "summary": "At 2:27 a.m. Wednesday, officers were called to an armed robbery at CVS Pharmacy, 2802 E. State Blvd., at Beacon Street.  Officers chased Wattley toward Baldwin Creek Apartments in the 1900 block of Hobson Road. As two officers approached Building F, they found Wattley standing in the stairwell area on the second floor, York said.  Wattley seemed unfamiliar with the apartment complex, York said, and didn\u2019t realize that the top of the stairway was blocked, trapping him at the top of the stairs.  \u201cHe ran up the stairway and discovered it was boarded off,\u201d York said. \u201cThe officers were at the bottom of the stairs\u2026 then Wattley turned around and pointed the weapon at the officers.\u201d  One of the two officers fired his weapon at Wattley, striking him multiple times, York said.", "officer_names": null}, {"incident_date": null, "city": "Oklahoma City", "searched_date": "2013-07-11", "victim_age": 24, "shots_fired": null, "weapon": "handgun", "victim_race": "black or african american", "agency": "Oklahoma City police", "county": null, "source_url": "http://www.news9.com/story/22829814/new-details-in-deadly-officer-involved-shooting-in-downtown-okc", "victim_armed": "armed", "victim_name": "Brian Simms Jr.", "state": "OK", "shootings": "yes", "victim_gender": "male", "outcome": "killed", "summary": "Uniformed, off-duty officers working security outside a concert venue, found Simms asleep or passed out in a car, with a gun in his waistband. They ordered him to put the gun away, he did not, he was shot and killed.", "officer_names": "Sgt. Paul Galyon"}, {"incident_date": null, "city": "Orlando", "searched_date": "2014-08-20", "victim_age": 22, "shots_fired": 9, "weapon": "unarmed", "victim_race": "unknown", "agency": "orlando police department", "county": "Orange", "source_url": "http://thesent.nl/1Ayap7l ", "victim_armed": "unarmed", "victim_name": "Maria Fernanda Godinez", "state": "FL", "shootings": "yes", "victim_gender": "female", "outcome": "killed", "summary": "Killed by officer stray bullet. A suspect carrying a unloaded gun got into a bar altercation. Police confronted him outside and fires were shot.", "officer_names": "Eduardo Sanguino"}, {"incident_date": null, "city": "Dallas", "searched_date": "2014-08-10", "victim_age": 26, "shots_fired": 5, "weapon": "unarmed", "victim_race": "white", "agency": "Dallas Police Dept", "county": null, "source_url": "http://www.nbcdfw.com/news/local/Man-Dies-In-Dallas-Officer-Involved-Shooting-270705511.html", "victim_armed": "unarmed", "victim_name": "Andrew Scott Gaynier", "state": "TX", "shootings": "yes", "victim_gender": "male", "outcome": "killed", "summary": "\"We have a really bad problem in Dallas,\" Flanagan said. In response to complaints and lawsuits, Dallas Police Chief David Brown revised policy and training standards for use of force in January", "officer_names": "Antonio Hudson"}, {"incident_date": null, "city": "Cedar Falls", "searched_date": "2013-12-25", "victim_age": 27, "shots_fired": 2, "weapon": "handgun", "victim_race": "white", "agency": "Cedar Falls Police Department", "county": "Black Hawk", "source_url": "http://www.wrex.com/story/24300453/2013/12/25/officer-involved-shooting-in-cedar-falls-sends-two-to-hospital", "victim_armed": "unarmed", "victim_name": "Zach Church", "state": "IA", "shootings": "yes", "victim_gender": "male", "outcome": "hit", "summary": "The shooting happened near Second Street and Hudson Road in Cedar Falls around 3 a.m. Wednesday. Police Chief Jeff Olson says 27-year-old Zachary Church was sleeping in a parked car near the intersection, and the car was still running.  Police say an altercation happened after the investigating officer got Church out of the car, and discovered marijuana.  According to Chief Olson, Officer Bob Anderson was putting Church in his patrol car when Church fought back, hitting Anderson over the head.  Olson says during the altercation, both Anderson and Church were at one point on the ground.  Anderson fired his weapon twice, hitting Church.  Olson says other officers were arriving to the scene at the time the shots were fired.  Both were taken to the hospital. Police said Anderson was released after treatment of facial and head injuries, while Church remains in the hospital in stable condition.  Charges against Church are pending his release from medical treatment.  Officer Anderson was wearing a body camera when the incident happened, but he failed to have it on during this incident.", "officer_names": "Bob Anderson"}, {"incident_date": null, "city": "Reno", "searched_date": "2013-07-11", "victim_age": 27, "shots_fired": 22, "weapon": "shotgun", "victim_race": "black or african american", "agency": "Reno and Sparks police", "county": "Washoe", "source_url": "http://www.mynews4.com/mostpopular/story/D-A-finds-officer-involved-shooting-justified/ki13lGN6EEGUXc08uOC6Aw.cspx", "victim_armed": "armed", "victim_name": "Kenneth Jewel Stafford", "state": "NV", "shootings": "yes", "victim_gender": "male", "outcome": "killed", "summary": "Stafford, reportedly suicidal and suffering PTSD, winds up in someone's backyard with a shotgun. 5 officers shoot 22 rounds, hitting him 14 times.", "officer_names": null}, {"incident_date": null, "city": "Saginaw", "searched_date": "2012-07-01", "victim_age": 49, "shots_fired": 46, "weapon": "knife or cutting instrument", "victim_race": "black or african american", "agency": "Saginaw Police", "county": "Saginaw", "source_url": "http://www.cnn.com/2012/09/21/justice/michigan-police-shooting/", "victim_armed": "armed", "victim_name": "Milton Hall", "state": "MI", "shootings": "yes", "victim_gender": "male", "outcome": "killed", "summary": "\"Hall was armed with a 3-inch metal folding knife.\" (src: http://www.mlive.com/news/saginaw/index.ssf/2012/07/saginaw_sees_third_police-invo.html ) \"The eight officers, as well as a police dog, had formed a semi-circle around Hall.\" Six of the eight officers fired at Hall. Hall was struck 11 times. \"Hall's family said that he had a history of mental illness.\" He was also homeless. Hall's race taken from this site: http://www.mlive.com/news/saginaw/index.ssf/2012/07/reports_albuquerque_police_act.html", "officer_names": null}, {"incident_date": null, "city": null, "searched_date": "2011-02-04", "victim_age": null, "shots_fired": null, "weapon": null, "victim_race": null, "agency": null, "county": null, "source_url": null, "victim_armed": null, "victim_name": null, "state": null, "shootings": "no", "victim_gender": null, "outcome": null, "summary": null, "officer_names": null}]};


(function() {
  var self = this;

  self.addEventListener('message', function(e) {
    self.init()
      .then(function() {
        var request = e.data,
          id = request.id,
          params = request.params;

        self.postMessage({
          id: id,
          results: self.search(params)
        });
      })
      .error(function(err) {
        console.error(err);
      });
  });



  self.search = function(filterParams) {
    return self.data.filter(function(item) {
      // victim age
      if (item.victim_age < _.deepGet(filterParams, 'victim.age.lower', 0)  || 
          item.victim_age > _.deepGet(filterParams, 'victim.age.upper', 100) 
          ) {
        return false;
      }

      // victim gender
      if (!_.contains(_.deepGet(filterParams, 'victim.gender', []), item.victim_gender)) {
        return false;
      }

      // victim armed
      if (!_.contains(_.deepGet(filterParams, 'victim.armed', []), item.victim_armed)) {
        return false;
      }

      // victim outcome
      if (!_.contains(_.deepGet(filterParams, 'victim.outcome', []), item.outcome)) {
        return false;
      }

      return true;
    });
  };


  // INITIALISATION


  var requiredProps = [
    'victim_age',
    'victim_gender',
    'state',
    'city',
    'agency',
    'outcome',
  ];


  self.init = function() {
    if (!self.data) {
      self.data = [];

      db.results.forEach(function(item) {
        // need required props
        for (var i=0; i<requiredProps.length; ++i) {
          if (!item[requiredProps[i]]) {
            return;
          }
        }

        // get lat/lng
        var state = item.state.toUpperCase(),
          city = item.city.toLowerCase();

        if (stateCities[state] && stateCities[state][city]) {
          item.latlng = stateCities[state][city];
        } else {
          return;
        }

        // normalize fields
        item.victim_gender = item.victim_gender.trim().toLowerCase();
        item.victim_race = (item.victim_race || 'unknown').trim().toLowerCase();

        item.victim_armed = (item.victim_armed || '').trim().toLowerCase();
        switch (item.victim_armed) {
          case 'armed':
          case 'unarmed':
            break;
          default:
            item.outcome = 'unknown';
        }

        item.outcome = (item.outcome || '').trim().toLowerCase();
        switch (item.outcome) {
          case 'hit':
          case 'killed':
            break;
          default:
            item.outcome = 'unknown';
        }

        self.data.push(item);
      });
    }

    return D.resolved();
  }


})(self);

},{"./underscore_mixins":5,"./usa_state_cities":6,"D":2,"underscore":3}],2:[function(require,module,exports){
(function (process){
/**
* attempt of a simple defer/promise library for mobile development
* @author Jonathan Gotti < jgotti at jgotti dot net>
* @since 2012-10
* @version 0.7.2
*/
(function(undef){
	"use strict";

	var nextTick
		, isFunc = function(f){ return ( typeof f === 'function' ); }
		, isArray = function(a){ return Array.isArray ? Array.isArray(a) : (a instanceof Array); }
		, isObjOrFunc = function(o){ return !!(o && (typeof o).match(/function|object/)); }
		, isNotVal = function(v){ return (v === false || v === undef || v === null); }
		, slice = function(a, offset){ return [].slice.call(a, offset); }
		, undefStr = 'undefined'
		, tErr = typeof TypeError === undefStr ? Error : TypeError
	;
	if ( (typeof process !== undefStr) && process.nextTick ) {
		nextTick = process.nextTick;
	} else if ( typeof MessageChannel !== undefStr ) {
		var ntickChannel = new MessageChannel(), queue = [];
		ntickChannel.port1.onmessage = function(){ queue.length && (queue.shift())(); };
		nextTick = function(cb){
			queue.push(cb);
			ntickChannel.port2.postMessage(0);
		};
	} else {
		nextTick = function(cb){ setTimeout(cb, 0); };
	}
	function rethrow(e){ nextTick(function(){ throw e;}); }

	/**
	 * @typedef deferred
	 * @property {promise} promise
	 * @method resolve
	 * @method fulfill
	 * @method reject
	 */

	/**
	 * @typedef {function} fulfilled
	 * @param {*} value promise resolved value
	 * @returns {*} next promise resolution value
	 */

	/**
	 * @typedef {function} failed
	 * @param {*} reason promise rejection reason
	 * @returns {*} next promise resolution value or rethrow the reason
	 */

	//-- defining unenclosed promise methods --//
	/**
	 * same as then without failed callback
	 * @param {fulfilled} fulfilled callback
	 * @returns {promise} a new promise
	 */
	function promise_success(fulfilled){ return this.then(fulfilled, undef); }

	/**
	 * same as then with only a failed callback
	 * @param {failed} failed callback
	 * @returns {promise} a new promise
	 */
	function promise_error(failed){ return this.then(undef, failed); }


	/**
	 * same as then but fulfilled callback will receive multiple parameters when promise is fulfilled with an Array
	 * @param {fulfilled} fulfilled callback
	 * @param {failed} failed callback
	 * @returns {promise} a new promise
	 */
	function promise_apply(fulfilled, failed){
		return this.then(
			function(a){
				return isFunc(fulfilled) ? fulfilled.apply(null, isArray(a) ? a : [a]) : (defer.onlyFuncs ? a : fulfilled);
			}
			, failed || undef
		);
	}

	/**
	 * cleanup method which will be always executed regardless fulfillment or rejection
	 * @param {function} cb a callback called regardless of the fulfillment or rejection of the promise which will be called
	 *                      when the promise is not pending anymore
	 * @returns {promise} the same promise untouched
	 */
	function promise_ensure(cb){
		function _cb(){ cb(); }
		this.then(_cb, _cb);
		return this;
	}

	/**
	 * take a single callback which wait for an error as first parameter. other resolution values are passed as with the apply/spread method
	 * @param {function} cb a callback called regardless of the fulfillment or rejection of the promise which will be called
	 *                      when the promise is not pending anymore with error as first parameter if any as in node style
	 *                      callback. Rest of parameters will be applied as with the apply method.
	 * @returns {promise} a new promise
	 */
	function promise_nodify(cb){
		return this.then(
			function(a){
				return isFunc(cb) ? cb.apply(null, isArray(a) ? a.splice(0,0,undefined) && a : [undefined,a]) : (defer.onlyFuncs ? a : cb);
			}
			, function(e){
				return cb(e);
			}
		);
	}

	/**
	 *
	 * @param {function} [failed] without parameter will only rethrow promise rejection reason outside of the promise library on next tick
	 *                            if passed a failed method then will call failed on rejection and throw the error again if failed didn't
	 * @returns {promise} a new promise
	 */
	function promise_rethrow(failed){
		return this.then(
			undef
			, failed ? function(e){ failed(e); throw e; } : rethrow
		);
	}

	/**
	* @param {boolean} [alwaysAsync] if set force the async resolution for this promise independantly of the D.alwaysAsync option
	* @returns {deferred} defered object with property 'promise' and methods reject,fulfill,resolve (fulfill being an alias for resolve)
	*/
	var defer = function (alwaysAsync){
		var alwaysAsyncFn = (undef !== alwaysAsync ? alwaysAsync : defer.alwaysAsync) ? nextTick : function(fn){fn();}
			, status = 0 // -1 failed | 1 fulfilled
			, pendings = []
			, value
			/**
			 * @typedef promise
			 */
			, _promise  = {
				/**
				 * @param {fulfilled|function} fulfilled callback
				 * @param {failed|function} failed callback
				 * @returns {promise} a new promise
				 */
				then: function(fulfilled, failed){
					var d = defer();
					pendings.push([
						function(value){
							try{
								if( isNotVal(fulfilled)){
									d.resolve(value);
								} else {
									d.resolve(isFunc(fulfilled) ? fulfilled(value) : (defer.onlyFuncs ? value : fulfilled));
								}
							}catch(e){
								d.reject(e);
							}
						}
						, function(err){
							if ( isNotVal(failed) || ((!isFunc(failed)) && defer.onlyFuncs) ) {
								d.reject(err);
							}
							if ( failed ) {
								try{ d.resolve(isFunc(failed) ? failed(err) : failed); }catch(e){ d.reject(e);}
							}
						}
					]);
					status !== 0 && alwaysAsyncFn(execCallbacks);
					return d.promise;
				}

				, success: promise_success

				, error: promise_error
				, otherwise: promise_error

				, apply: promise_apply
				, spread: promise_apply

				, ensure: promise_ensure

				, nodify: promise_nodify

				, rethrow: promise_rethrow

				, isPending: function(){ return status === 0; }

				, getStatus: function(){ return status; }
			}
		;
		_promise.toSource = _promise.toString = _promise.valueOf = function(){return value === undef ? this : value; };


		function execCallbacks(){
			/*jshint bitwise:false*/
			if ( status === 0 ) {
				return;
			}
			var cbs = pendings, i = 0, l = cbs.length, cbIndex = ~status ? 0 : 1, cb;
			pendings = [];
			for( ; i < l; i++ ){
				(cb = cbs[i][cbIndex]) && cb(value);
			}
		}

		/**
		 * fulfill deferred with given value
		 * @param {*} val
		 * @returns {deferred} this for method chaining
		 */
		function _resolve(val){
			var done = false;
			function once(f){
				return function(x){
					if (done) {
						return undefined;
					} else {
						done = true;
						return f(x);
					}
				};
			}
			if ( status ) {
				return this;
			}
			try {
				var then = isObjOrFunc(val) && val.then;
				if ( isFunc(then) ) { // managing a promise
					if( val === _promise ){
						throw new tErr("Promise can't resolve itself");
					}
					then.call(val, once(_resolve), once(_reject));
					return this;
				}
			} catch (e) {
				once(_reject)(e);
				return this;
			}
			alwaysAsyncFn(function(){
				value = val;
				status = 1;
				execCallbacks();
			});
			return this;
		}

		/**
		 * reject deferred with given reason
		 * @param {*} Err
		 * @returns {deferred} this for method chaining
		 */
		function _reject(Err){
			status || alwaysAsyncFn(function(){
				try{ throw(Err); }catch(e){ value = e; }
				status = -1;
				execCallbacks();
			});
			return this;
		}
		return /**@type deferred */ {
			promise:_promise
			,resolve:_resolve
			,fulfill:_resolve // alias
			,reject:_reject
		};
	};

	defer.deferred = defer.defer = defer;
	defer.nextTick = nextTick;
	defer.alwaysAsync = true; // setting this will change default behaviour. use it only if necessary as asynchronicity will force some delay between your promise resolutions and is not always what you want.
	/**
	* setting onlyFuncs to false will break promises/A+ conformity by allowing you to pass non undefined/null values instead of callbacks
	* instead of just ignoring any non function parameters to then,success,error... it will accept non null|undefined values.
	* this will allow you shortcuts like promise.then('val','handled error'')
	* to be equivalent of promise.then(function(){ return 'val';},function(){ return 'handled error'})
	*/
	defer.onlyFuncs = true;

	/**
	 * return a fulfilled promise of given value (always async resolution)
	 * @param {*} value
	 * @returns {promise}
	 */
	defer.resolved = defer.fulfilled = function(value){ return defer(true).resolve(value).promise; };

	/**
	 * return a rejected promise with given reason of rejection (always async rejection)
	 * @param {*} reason
	 * @returns {promise}
	 */
	defer.rejected = function(reason){ return defer(true).reject(reason).promise; };

	/**
	 * return a promise with no resolution value which will be resolved in time ms (using setTimeout)
	 * @param {int} [time] in ms default to 0
	 * @returns {promise}
	 */
	defer.wait = function(time){
		var d = defer();
		setTimeout(d.resolve, time || 0);
		return d.promise;
	};

	/**
	 * return a promise for the return value of function call which will be fulfilled in delay ms or rejected if given fn throw an error
	 * @param {*} fn to execute or value to return after given delay
	 * @param {int} [delay] in ms default to 0
	 * @returns {promise}
	 */
	defer.delay = function(fn, delay){
		var d = defer();
		setTimeout(function(){ try{ d.resolve(isFunc(fn) ? fn.apply(null) : fn); }catch(e){ d.reject(e); } }, delay || 0);
		return d.promise;
	};

	/**
	 * if given value is not a promise return a fulfilled promise resolved to given value
	 * @param {*} promise a value or a promise
	 * @returns {promise}
	 */
	defer.promisify = function(promise){
		if ( promise && isFunc(promise.then) ) { return promise;}
		return defer.resolved(promise);
	};

	function multiPromiseResolver(callerArguments, returnPromises){
		var promises = slice(callerArguments);
		if ( promises.length === 1 && isArray(promises[0]) ) {
			if(! promises[0].length ){
				return defer.fulfilled([]);
			}
			promises = promises[0];
		}
		var args = []
			, d = defer()
			, c = promises.length
		;
		if ( !c ) {
			d.resolve(args);
		} else {
			var resolver = function(i){
				promises[i] = defer.promisify(promises[i]);
				promises[i].then(
					function(v){
						args[i] = returnPromises ? promises[i] : v;
						(--c) || d.resolve(args);
					}
					, function(e){
						if( ! returnPromises ){
							d.reject(e);
						} else {
							args[i] = promises[i];
							(--c) || d.resolve(args);
						}
					}
				);
			};
			for( var i = 0, l = c; i < l; i++ ){
				resolver(i);
			}
		}
		return d.promise;
	}

	function sequenceZenifier(promise, zenValue){
		return promise.then(isFunc(zenValue) ? zenValue : function(){return zenValue;});
	}
	function sequencePromiseResolver(callerArguments){
		var funcs = slice(callerArguments);
		if ( funcs.length === 1 && isArray(funcs[0]) ) {
			funcs = funcs[0];
		}
		var d = defer(), i=0, l=funcs.length, promise = defer.resolved();
		for(; i<l; i++){
			promise = sequenceZenifier(promise, funcs[i]);
		}
		d.resolve(promise);
		return d.promise;
	}

	/**
	 * return a promise for all given promises / values.
	 * the returned promises will be fulfilled with a list of resolved value.
	 * if any given promise is rejected then on the first rejection the returned promised will be rejected with the same reason
	 * @param {array|...*} [promise] can be a single array of promise/values as first parameter or a list of direct parameters promise/value
	 * @returns {promise} of a list of given promise resolution value
	 */
	defer.all = function(){ return multiPromiseResolver(arguments,false); };

	/**
	 * return an always fulfilled promise of array<promise> list of promises/values regardless they resolve fulfilled or rejected
	 * @param {array|...*} [promise] can be a single array of promise/values as first parameter or a list of direct parameters promise/value
	 *                     (non promise values will be promisified)
	 * @returns {promise} of the list of given promises
	 */
	defer.resolveAll = function(){ return multiPromiseResolver(arguments,true); };

	/**
	* execute given function in sequence passing their returned values to the next one in sequence.
	* You can pass values or promise instead of functions they will be passed in the sequence as if a function returned them.
	* if any function throw an error or a rejected promise the final returned promise will be rejected with that reason.
	* @param {array|...*} [function] list of function to call in sequence receiving previous one as a parameter
	*                     (non function values will be treated as if returned by a function)
	* @returns {promise} of the list of given promises
	*/
	defer.sequence = function(){ return sequencePromiseResolver(arguments); };

	/**
	 * transform a typical nodejs async method awaiting a callback as last parameter, receiving error as first parameter to a function that
	 * will return a promise instead. the returned promise will resolve with normal callback value minus the first error parameter on
	 * fulfill and will be rejected with that error as reason in case of error.
	 * @param {object} [subject] optional subject of the method to encapsulate
	 * @param {function} fn the function to encapsulate if the normal callback should receive more than a single parameter (minus the error)
	 *                      the promise will resolve with the list or parameters as fulfillment value. If only one parameter is sent to the
	 *                      callback then it will be used as the resolution value.
	 * @returns {Function}
	 */
	defer.nodeCapsule = function(subject, fn){
		if ( !fn ) {
			fn = subject;
			subject = void(0);
		}
		return function(){
			var d = defer(), args = slice(arguments);
			args.push(function(err, res){
				err ? d.reject(err) : d.resolve(arguments.length > 2 ? slice(arguments, 1) : res);
			});
			try{
				fn.apply(subject, args);
			}catch(e){
				d.reject(e);
			}
			return d.promise;
		};
	};

	/*global define*/
	if ( typeof define === 'function' && define.amd ) {
		define('D.js', [], function(){ return defer; });
	} else if ( typeof window !== undefStr ) {
		var oldD = window.D;
		/**
		 * restore global D variable to its previous value and return D to the user
		 * @returns {Function}
		 */
		defer.noConflict = function(){
			window.D = oldD;
			return defer;
		};
		window.D = defer;
	} else if ( typeof module !== undefStr && module.exports ) {
		module.exports = defer;
	}
})();

}).call(this,require('_process'))

},{"_process":4}],3:[function(require,module,exports){
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));

},{}],4:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;

function drainQueue() {
    if (draining) {
        return;
    }
    draining = true;
    var currentQueue;
    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        var i = -1;
        while (++i < len) {
            currentQueue[i]();
        }
        len = queue.length;
    }
    draining = false;
}
process.nextTick = function (fun) {
    queue.push(fun);
    if (!draining) {
        setTimeout(drainQueue, 0);
    }
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],5:[function(require,module,exports){
exports.deepGet = function(obj, path, fallbackValue) {
  if (undefined === obj || null === obj) {
    return fallbackValue;
  }

  var fields = path.split('.'),
    result = obj;

  for (var i=0; i<fields.length; ++i) {
    if ('object' !==  typeof result) {
      return fallbackValue;
    }

    result = result[fields[i]];
  }

  return result || fallbackValue;
};



},{}],6:[function(require,module,exports){
module.exports = {"TX":{"abilene":{"name":"Abilene","lat":32.4487364,"lng":-99.73314390000002},"allen":{"name":"Allen","lat":33.1031744,"lng":-96.67055030000002},"amarillo":{"name":"Amarillo","lat":35.2219971,"lng":-101.8312969},"arlington":{"name":"Arlington","lat":32.735687,"lng":-97.10806559999999},"atascocita":{"name":"Atascocita","lat":29.99883059999999,"lng":-95.1765978},"austin":{"name":"Austin","lat":30.267153,"lng":-97.7430608},"baytown":{"name":"Baytown","lat":29.7355047,"lng":-94.97742740000001},"beaumont":{"name":"Beaumont","lat":30.080174,"lng":-94.1265562},"bedford":{"name":"Bedford","lat":32.844017,"lng":-97.1430671},"brownsville":{"name":"Brownsville","lat":25.9017472,"lng":-97.4974838},"bryan":{"name":"Bryan","lat":30.6743643,"lng":-96.3699632},"carrollton":{"name":"Carrollton","lat":32.9756415,"lng":-96.8899636},"cedar hill":{"name":"Cedar Hill","lat":32.5884689,"lng":-96.9561152},"cedar park":{"name":"Cedar Park","lat":30.505198,"lng":-97.8202888},"college station":{"name":"College Station","lat":30.627977,"lng":-96.3344068},"conroe":{"name":"Conroe","lat":30.3118769,"lng":-95.45605119999999},"corpus christi":{"name":"Corpus Christi","lat":27.8005828,"lng":-97.39638099999999},"dallas":{"name":"Dallas","lat":32.802955,"lng":-96.769923},"denton":{"name":"Denton","lat":33.2148412,"lng":-97.13306829999999},"desoto":{"name":"DeSoto","lat":32.5898577,"lng":-96.85694509999999},"edinburg":{"name":"Edinburg","lat":26.3017374,"lng":-98.1633432},"el paso":{"name":"El Paso","lat":31.7587198,"lng":-106.4869314},"euless":{"name":"Euless","lat":32.8370727,"lng":-97.08195409999999},"flower mound":{"name":"Flower Mound","lat":33.0145673,"lng":-97.0969552},"fort worth":{"name":"Fort Worth","lat":32.725409,"lng":-97.3208496},"frisco":{"name":"Frisco","lat":33.1506744,"lng":-96.82361159999999},"galveston":{"name":"Galveston","lat":29.3013479,"lng":-94.7976958},"garland":{"name":"Garland","lat":32.912624,"lng":-96.63888329999999},"georgetown":{"name":"Georgetown","lat":30.6326942,"lng":-97.6772311},"grand prairie":{"name":"Grand Prairie","lat":32.7459645,"lng":-96.99778459999999},"grapevine":{"name":"Grapevine","lat":32.9342919,"lng":-97.0780654},"haltom city":{"name":"Haltom City","lat":32.7995738,"lng":-97.26918169999999},"harlingen":{"name":"Harlingen","lat":26.1906306,"lng":-97.69610259999999},"houston":{"name":"Houston","lat":29.7601927,"lng":-95.36938959999999},"irving":{"name":"Irving","lat":32.8140177,"lng":-96.9488945},"keller":{"name":"Keller","lat":32.9345701,"lng":-97.251682},"killeen":{"name":"Killeen","lat":31.1171194,"lng":-97.72779589999999},"laredo":{"name":"Laredo","lat":27.506407,"lng":-99.5075421},"league city":{"name":"League City","lat":29.5074538,"lng":-95.0949303},"lewisville":{"name":"Lewisville","lat":33.046233,"lng":-96.994174},"longview":{"name":"Longview","lat":32.5007037,"lng":-94.74048909999999},"lubbock":{"name":"Lubbock","lat":33.5778631,"lng":-101.8551665},"mcallen":{"name":"McAllen","lat":26.2034071,"lng":-98.23001239999999},"mckinney":{"name":"McKinney","lat":33.1972465,"lng":-96.6397822},"mansfield":{"name":"Mansfield","lat":32.5631924,"lng":-97.1416768},"mesquite":{"name":"Mesquite","lat":32.76679550000001,"lng":-96.5991593},"midland":{"name":"Midland","lat":31.9973456,"lng":-102.0779146},"mission":{"name":"Mission","lat":26.2159066,"lng":-98.32529319999999},"missouri city":{"name":"Missouri City","lat":29.6185669,"lng":-95.5377215},"new braunfels":{"name":"New Braunfels","lat":29.7030024,"lng":-98.1244531},"north richland hills":{"name":"North Richland Hills","lat":32.8342952,"lng":-97.2289029},"odessa":{"name":"Odessa","lat":31.8456816,"lng":-102.3676431},"pasadena":{"name":"Pasadena","lat":29.6910625,"lng":-95.2091006},"pearland":{"name":"Pearland","lat":29.5635666,"lng":-95.2860474},"pflugerville":{"name":"Pflugerville","lat":30.4393696,"lng":-97.62000429999999},"pharr":{"name":"Pharr","lat":26.1947962,"lng":-98.1836216},"plano":{"name":"Plano","lat":33.0198431,"lng":-96.6988856},"port arthur":{"name":"Port Arthur","lat":29.8849504,"lng":-93.93994699999999},"richardson":{"name":"Richardson","lat":32.9481789,"lng":-96.7297205},"rockwall":{"name":"Rockwall","lat":32.93123360000001,"lng":-96.4597089},"round rock":{"name":"Round Rock","lat":30.5082551,"lng":-97.678896},"rowlett":{"name":"Rowlett","lat":32.9029017,"lng":-96.56388},"san angelo":{"name":"San Angelo","lat":31.4637723,"lng":-100.4370375},"san antonio":{"name":"San Antonio","lat":29.4241219,"lng":-98.49362819999999},"san marcos":{"name":"San Marcos","lat":29.8832749,"lng":-97.9413941},"spring":{"name":"Spring","lat":30.0799405,"lng":-95.41716009999999},"sugar land":{"name":"Sugar Land","lat":29.6196787,"lng":-95.6349463},"temple":{"name":"Temple","lat":31.0982344,"lng":-97.342782},"texas city":{"name":"Texas City","lat":29.383845,"lng":-94.9027002},"the woodlands":{"name":"The Woodlands","lat":30.1658207,"lng":-95.46126249999999},"tyler":{"name":"Tyler","lat":32.3512601,"lng":-95.30106239999999},"victoria":{"name":"Victoria","lat":28.8052674,"lng":-97.0035982},"waco":{"name":"Waco","lat":31.549333,"lng":-97.1466695},"wichita falls":{"name":"Wichita Falls","lat":33.9137085,"lng":-98.4933873},"wylie":{"name":"Wylie","lat":33.0151201,"lng":-96.5388789}},"OH":{"akron":{"name":"Akron","lat":41.0814447,"lng":-81.51900529999999},"beavercreek":{"name":"Beavercreek","lat":39.7092262,"lng":-84.06326849999999},"canton":{"name":"Canton","lat":40.79894729999999,"lng":-81.378447},"centerville":{"name":"Centerville","lat":39.6283928,"lng":-84.15938179999999},"cincinnati":{"name":"Cincinnati","lat":39.1031182,"lng":-84.5120196},"cleveland":{"name":"Cleveland","lat":41.4994954,"lng":-81.6954088},"cleveland heights":{"name":"Cleveland Heights","lat":41.5200518,"lng":-81.556235},"columbus":{"name":"Columbus","lat":39.9611755,"lng":-82.99879419999999},"cuyahoga falls":{"name":"Cuyahoga Falls","lat":41.1339449,"lng":-81.48455849999999},"dayton":{"name":"Dayton","lat":39.7589478,"lng":-84.1916069},"dublin":{"name":"Dublin","lat":40.0992294,"lng":-83.1140771},"elyria":{"name":"Elyria","lat":41.3683798,"lng":-82.10764859999999},"euclid":{"name":"Euclid","lat":41.5931049,"lng":-81.5267873},"fairfield":{"name":"Fairfield","lat":39.3454673,"lng":-84.5603187},"hamilton":{"name":"Hamilton","lat":39.3995008,"lng":-84.5613355},"kettering":{"name":"Kettering","lat":39.68950359999999,"lng":-84.1688274},"lakewood":{"name":"Lakewood","lat":41.4819932,"lng":-81.7981908},"lorain":{"name":"Lorain","lat":41.452819,"lng":-82.1823746},"mansfield":{"name":"Mansfield","lat":40.75839,"lng":-82.5154471},"mentor":{"name":"Mentor","lat":41.6661573,"lng":-81.339552},"middletown":{"name":"Middletown","lat":39.5150576,"lng":-84.39827629999999},"newark":{"name":"Newark","lat":40.0581205,"lng":-82.4012642},"parma":{"name":"Parma","lat":41.4047742,"lng":-81.7229086},"springfield":{"name":"Springfield","lat":39.9242266,"lng":-83.8088171},"strongsville":{"name":"Strongsville","lat":41.3144966,"lng":-81.83569},"toledo":{"name":"Toledo","lat":41.6639383,"lng":-83.55521200000001},"youngstown":{"name":"Youngstown","lat":41.0997803,"lng":-80.6495194}},"FL":{"alafaya":{"name":"Alafaya","lat":28.5641,"lng":-81.2114},"altamonte springs":{"name":"Altamonte Springs","lat":28.6611089,"lng":-81.3656242},"apopka":{"name":"Apopka","lat":28.68675,"lng":-81.51327599999999},"boca raton":{"name":"Boca Raton","lat":26.3586885,"lng":-80.0830984},"bonita springs":{"name":"Bonita Springs","lat":26.339806,"lng":-81.7786972},"boynton beach":{"name":"Boynton Beach","lat":26.5253491,"lng":-80.0664309},"bradenton":{"name":"Bradenton","lat":27.4989278,"lng":-82.5748194},"brandon":{"name":"Brandon","lat":27.937801,"lng":-82.2859247},"cape coral":{"name":"Cape Coral","lat":26.5628537,"lng":-81.9495331},"clearwater":{"name":"Clearwater","lat":27.9658533,"lng":-82.8001026},"coconut creek":{"name":"Coconut Creek","lat":26.2517482,"lng":-80.17893509999999},"coral gables":{"name":"Coral Gables","lat":25.72149,"lng":-80.2683838},"coral springs":{"name":"Coral Springs","lat":26.271192,"lng":-80.2706044},"country club":{"name":"Country Club","lat":25.9481487,"lng":-80.3169953},"cutler bay":{"name":"Cutler Bay","lat":25.5783,"lng":-80.3377},"davie":{"name":"Davie","lat":26.0628664,"lng":-80.2331038},"daytona beach":{"name":"Daytona Beach","lat":29.2108147,"lng":-81.0228331},"deerfield beach":{"name":"Deerfield Beach","lat":26.3184123,"lng":-80.09976569999999},"delray beach":{"name":"Delray Beach","lat":26.4614625,"lng":-80.0728201},"deltona":{"name":"Deltona","lat":28.9005446,"lng":-81.26367379999999},"doral":{"name":"Doral","lat":25.8195424,"lng":-80.3553302},"fort lauderdale":{"name":"Fort Lauderdale","lat":26.1223084,"lng":-80.14337859999999},"fort myers":{"name":"Fort Myers","lat":26.640628,"lng":-81.8723084},"fort pierce":{"name":"Fort Pierce","lat":27.4467056,"lng":-80.3256056},"fountainbleau":{"name":"Fountainbleau","lat":25.7728774,"lng":-80.3478301},"gainesville":{"name":"Gainesville","lat":29.6516344,"lng":-82.32482619999999},"hialeah":{"name":"Hialeah","lat":25.8575963,"lng":-80.2781057},"hollywood":{"name":"Hollywood","lat":26.0112014,"lng":-80.1494901},"homestead":{"name":"Homestead","lat":25.4687224,"lng":-80.4775569},"jacksonville":{"name":"Jacksonville","lat":30.3321838,"lng":-81.65565099999999},"jupiter":{"name":"Jupiter","lat":26.9342246,"lng":-80.0942087},"kendale lakes":{"name":"Kendale Lakes","lat":25.7081577,"lng":-80.4069986},"kendall":{"name":"Kendall","lat":25.6660336,"lng":-80.357827},"kissimmee":{"name":"Kissimmee","lat":28.2919557,"lng":-81.40757099999999},"lakeland":{"name":"Lakeland","lat":28.0394654,"lng":-81.9498042},"largo":{"name":"Largo","lat":27.9094665,"lng":-82.7873244},"lauderhill":{"name":"Lauderhill","lat":26.1403635,"lng":-80.2133808},"lehigh acres":{"name":"Lehigh Acres","lat":26.6253497,"lng":-81.6248026},"margate":{"name":"Margate","lat":26.2445263,"lng":-80.206436},"melbourne":{"name":"Melbourne","lat":28.0836269,"lng":-80.60810889999999},"miami":{"name":"Miami","lat":25.7889689,"lng":-80.2264393},"miami gardens":{"name":"Miami Gardens","lat":25.9420377,"lng":-80.2456045},"miramar":{"name":"Miramar","lat":25.9756704,"lng":-80.28675009999999},"north lauderdale":{"name":"North Lauderdale","lat":26.217305,"lng":-80.2258811},"north miami":{"name":"North Miami","lat":25.8900949,"lng":-80.1867138},"north miami beach":{"name":"North Miami Beach","lat":25.9331488,"lng":-80.1625463},"north port":{"name":"North Port","lat":27.044224,"lng":-82.2359254},"oakland park":{"name":"Oakland Park","lat":26.1723065,"lng":-80.1319893},"ocala":{"name":"Ocala","lat":29.1871986,"lng":-82.14009229999999},"orlando":{"name":"Orlando","lat":28.5383355,"lng":-81.3792365},"palm bay":{"name":"Palm Bay","lat":28.0344621,"lng":-80.5886646},"palm beach gardens":{"name":"Palm Beach Gardens","lat":26.8233946,"lng":-80.13865469999999},"palm coast":{"name":"Palm Coast","lat":29.5849736,"lng":-81.2078411},"palm harbor":{"name":"Palm Harbor","lat":28.0780718,"lng":-82.7637127},"pembroke pines":{"name":"Pembroke Pines","lat":26.0122378,"lng":-80.3152233},"pensacola":{"name":"Pensacola","lat":30.42130899999999,"lng":-87.2169149},"pine hills":{"name":"Pine Hills","lat":28.5577794,"lng":-81.4534046},"pinellas park":{"name":"Pinellas Park","lat":27.8428025,"lng":-82.6995443},"plantation":{"name":"Plantation","lat":26.1275862,"lng":-80.23310359999999},"poinciana":{"name":"Poinciana","lat":28.1402939,"lng":-81.4584058},"pompano beach":{"name":"Pompano Beach","lat":26.2378597,"lng":-80.1247667},"port charlotte":{"name":"Port Charlotte","lat":26.9761707,"lng":-82.09064479999999},"port orange":{"name":"Port Orange","lat":29.1383165,"lng":-80.9956105},"port st lucie":{"name":"Port St Lucie","lat":27.2758333,"lng":-80.35499999999999},"riverview":{"name":"Riverview","lat":27.8661364,"lng":-82.32648089999999},"st petersburg":{"name":"St Petersburg","lat":27.7730556,"lng":-82.64},"sanford":{"name":"Sanford","lat":28.7588218,"lng":-81.29417939999999},"sarasota":{"name":"Sarasota","lat":27.3364347,"lng":-82.53065269999999},"spring hill":{"name":"Spring Hill","lat":28.4831682,"lng":-82.5369872},"sunrise":{"name":"Sunrise","lat":26.1571743,"lng":-80.28622560000001},"tallahassee":{"name":"Tallahassee","lat":30.4382559,"lng":-84.28073289999999},"tamarac":{"name":"Tamarac","lat":26.2128609,"lng":-80.2497707},"tamiami":{"name":"Tamiami","lat":25.7587114,"lng":-80.398387},"tampa":{"name":"Tampa","lat":27.950575,"lng":-82.4571776},"the hammocks":{"name":"The Hammocks","lat":25.6714925,"lng":-80.4444997},"the villages":{"name":"The Villages","lat":28.9377778,"lng":-81.9711111},"titusville":{"name":"Titusville","lat":28.6122187,"lng":-80.8075537},"town 'n' country":{"name":"Town 'n' Country","lat":28.0105745,"lng":-82.57731930000001},"valrico":{"name":"Valrico","lat":27.9408333,"lng":-82.24249999999999},"wellington":{"name":"Wellington","lat":26.6552309,"lng":-80.25425129999999},"wesley chapel":{"name":"Wesley Chapel","lat":28.1786111,"lng":-82.35055559999999},"weston":{"name":"Weston","lat":26.1003654,"lng":-80.3997748},"west palm beach":{"name":"West Palm Beach","lat":26.7153424,"lng":-80.0533746}},"CA":{"alameda":{"name":"Alameda","lat":37.7652065,"lng":-122.2416355},"alhambra":{"name":"Alhambra","lat":34.095287,"lng":-118.1270146},"aliso viejo":{"name":"Aliso Viejo","lat":33.57509599999999,"lng":-117.725431},"altadena":{"name":"Altadena","lat":34.1897274,"lng":-118.1311819},"anaheim":{"name":"Anaheim","lat":33.8352932,"lng":-117.9145036},"antelope north rd":{"name":"Antelope North Rd","lat":38.7172491,"lng":-121.3274832},"antioch":{"name":"Antioch","lat":38.0049214,"lng":-121.805789},"apple valley":{"name":"Apple Valley","lat":34.5008311,"lng":-117.1858759},"arcadia":{"name":"Arcadia","lat":34.1397292,"lng":-118.0353449},"arden-arcade":{"name":"Arden-Arcade","lat":38.6008071,"lng":-121.3770336},"azusa":{"name":"Azusa","lat":34.1336186,"lng":-117.9075627},"bakersfield":{"name":"Bakersfield","lat":35.3732921,"lng":-119.0187125},"baldwin park":{"name":"Baldwin Park","lat":34.0852868,"lng":-117.9608978},"beaumont":{"name":"Beaumont","lat":33.9294606,"lng":-116.977248},"bellflower":{"name":"Bellflower","lat":33.8816818,"lng":-118.1170117},"bell gardens":{"name":"Bell Gardens","lat":33.9652918,"lng":-118.1514588},"berkeley":{"name":"Berkeley","lat":37.8715926,"lng":-122.272747},"brentwood":{"name":"Brentwood","lat":37.931868,"lng":-121.6957863},"buena park":{"name":"Buena Park","lat":33.8675143,"lng":-117.9981181},"burbank":{"name":"Burbank","lat":37.3205556,"lng":-121.9316667},"calexico":{"name":"Calexico","lat":32.6789476,"lng":-115.4988834},"camarillo":{"name":"Camarillo","lat":34.2163937,"lng":-119.0376023},"carlsbad":{"name":"Carlsbad","lat":33.1580933,"lng":-117.3505939},"carmichael":{"name":"Carmichael","lat":38.617127,"lng":-121.3282843},"carson":{"name":"Carson","lat":33.8314058,"lng":-118.2820165},"castro valley":{"name":"Castro Valley","lat":37.6940973,"lng":-122.0863522},"cathedral city":{"name":"Cathedral City","lat":33.7797426,"lng":-116.4652911},"ceres":{"name":"Ceres","lat":37.5949316,"lng":-120.9577098},"cerritos":{"name":"Cerritos","lat":33.8583483,"lng":-118.0647871},"chico":{"name":"Chico","lat":39.7284944,"lng":-121.8374777},"chino":{"name":"Chino","lat":34.0122346,"lng":-117.688944},"chino hills":{"name":"Chino Hills","lat":33.9898188,"lng":-117.7325848},"chula vista":{"name":"Chula Vista","lat":32.6400541,"lng":-117.0841955},"citrus heights":{"name":"Citrus Heights","lat":38.7071247,"lng":-121.2810611},"clovis":{"name":"Clovis","lat":36.8252277,"lng":-119.7029194},"coachella":{"name":"Coachella","lat":33.6803003,"lng":-116.173894},"colton":{"name":"Colton","lat":34.0739016,"lng":-117.3136547},"compton":{"name":"Compton","lat":33.8958492,"lng":-118.2200712},"concord":{"name":"Concord","lat":37.9779776,"lng":-122.0310733},"corona":{"name":"Corona","lat":33.8752935,"lng":-117.5664384},"costa mesa":{"name":"Costa Mesa","lat":33.6411316,"lng":-117.9186689},"covina":{"name":"Covina","lat":34.0900091,"lng":-117.8903397},"cupertino":{"name":"Cupertino","lat":37.3229978,"lng":-122.0321823},"cypress":{"name":"Cypress","lat":33.8169599,"lng":-118.0372852},"daly city":{"name":"Daly City","lat":37.6879241,"lng":-122.4702079},"danville":{"name":"Danville","lat":37.8215929,"lng":-121.9999606},"davis":{"name":"Davis","lat":38.5449065,"lng":-121.7405167},"delano":{"name":"Delano","lat":35.7688425,"lng":-119.2470536},"diamond bar":{"name":"Diamond Bar","lat":34.0286226,"lng":-117.8103367},"downey":{"name":"Downey","lat":33.94001430000001,"lng":-118.1325688},"dublin":{"name":"Dublin","lat":37.7021521,"lng":-121.9357918},"east los angeles":{"name":"East Los Angeles","lat":34.0239015,"lng":-118.1720157},"los angeles":{"name":"Los Angeles","lat":34.0522342,"lng":-118.2436849},"el cajon":{"name":"El Cajon","lat":32.7947731,"lng":-116.9625269},"el centro":{"name":"El Centro","lat":32.792,"lng":-115.5630514},"el dorado hills":{"name":"El Dorado Hills","lat":38.6857367,"lng":-121.082167},"elk grove":{"name":"Elk Grove","lat":38.4087993,"lng":-121.3716178},"el monte":{"name":"El Monte","lat":34.0686206,"lng":-118.0275667},"encinitas":{"name":"Encinitas","lat":33.0369867,"lng":-117.2919818},"escondido":{"name":"Escondido","lat":33.1192068,"lng":-117.086421},"fairfield":{"name":"Fairfield","lat":38.24935809999999,"lng":-122.0399663},"florence-graham":{"name":"Florence-Graham","lat":33.9694444,"lng":-118.2438889},"florin":{"name":"Florin","lat":38.4960187,"lng":-121.4088416},"folsom":{"name":"Folsom","lat":38.6779591,"lng":-121.1760583},"fontana":{"name":"Fontana","lat":34.0922335,"lng":-117.435048},"fountain valley":{"name":"Fountain Valley","lat":33.7091847,"lng":-117.9536697},"fremont":{"name":"Fremont","lat":37.5482697,"lng":-121.9885719},"fresno":{"name":"Fresno","lat":36.7477272,"lng":-119.7723661},"fullerton":{"name":"Fullerton","lat":33.8702923,"lng":-117.925338},"gardena":{"name":"Gardena","lat":33.8883487,"lng":-118.3089624},"garden grove":{"name":"Garden Grove","lat":33.7739053,"lng":-117.9414477},"glendale":{"name":"Glendale","lat":34.1425078,"lng":-118.255075},"glendora":{"name":"Glendora","lat":34.1361187,"lng":-117.865339},"hacienda heights":{"name":"Hacienda Heights","lat":33.9930677,"lng":-117.9686755},"hawthorne":{"name":"Hawthorne","lat":33.9164032,"lng":-118.3525748},"hayward":{"name":"Hayward","lat":37.6688205,"lng":-122.0807964},"hemet":{"name":"Hemet","lat":33.7475203,"lng":-116.9719684},"hesperia":{"name":"Hesperia","lat":34.4263886,"lng":-117.3008784},"highland":{"name":"Highland","lat":34.1283442,"lng":-117.2086513},"huntington beach":{"name":"Huntington Beach","lat":33.660297,"lng":-117.9992265},"huntington park":{"name":"Huntington Park","lat":33.9816812,"lng":-118.2250725},"indio":{"name":"Indio","lat":33.7205771,"lng":-116.2155619},"inglewood":{"name":"Inglewood","lat":33.9616801,"lng":-118.3531311},"irvine":{"name":"Irvine","lat":33.6839473,"lng":-117.7946942},"laguna niguel":{"name":"Laguna Niguel","lat":33.5225261,"lng":-117.7075526},"la habra":{"name":"La Habra","lat":33.9319578,"lng":-117.9461734},"lake elsinore":{"name":"Lake Elsinore","lat":33.6680772,"lng":-117.3272615},"lake forest":{"name":"Lake Forest","lat":33.6469661,"lng":-117.689218},"lakewood":{"name":"Lakewood","lat":33.8536269,"lng":-118.1339563},"la mesa":{"name":"La Mesa","lat":32.7678287,"lng":-117.0230839},"la mirada":{"name":"La Mirada","lat":33.9172357,"lng":-118.0120086},"lancaster":{"name":"Lancaster","lat":34.6867846,"lng":-118.1541632},"la quinta":{"name":"La Quinta","lat":33.6633573,"lng":-116.3100095},"lincoln":{"name":"Lincoln","lat":38.891565,"lng":-121.2930079},"livermore":{"name":"Livermore","lat":37.6818745,"lng":-121.7680088},"lodi":{"name":"Lodi","lat":38.1301968,"lng":-121.2724473},"lompoc":{"name":"Lompoc","lat":34.6391501,"lng":-120.4579409},"long beach":{"name":"Long Beach","lat":33.8041667,"lng":-118.1580556},"lynwood":{"name":"Lynwood","lat":33.930293,"lng":-118.2114603},"madera":{"name":"Madera","lat":36.9613356,"lng":-120.0607176},"manteca":{"name":"Manteca","lat":37.7974273,"lng":-121.2160526},"menifee":{"name":"Menifee","lat":33.692372,"lng":-117.1884585},"merced":{"name":"Merced","lat":37.3021632,"lng":-120.4829677},"milpitas":{"name":"Milpitas","lat":37.4282724,"lng":-121.9066238},"mission viejo":{"name":"Mission Viejo","lat":33.6000232,"lng":-117.6719953},"modesto":{"name":"Modesto","lat":37.63909719999999,"lng":-120.9968782},"montebello":{"name":"Montebello","lat":34.0165053,"lng":-118.1137535},"monterey park":{"name":"Monterey Park","lat":34.0625106,"lng":-118.1228476},"moreno valley":{"name":"Moreno Valley","lat":33.9424658,"lng":-117.2296717},"mountain view":{"name":"Mountain View","lat":37.3860517,"lng":-122.0838511},"murrieta":{"name":"Murrieta","lat":33.5539143,"lng":-117.2139232},"napa":{"name":"Napa","lat":38.5024689,"lng":-122.2653887},"national city":{"name":"National City","lat":32.6781085,"lng":-117.0991967},"newark":{"name":"Newark","lat":37.5296593,"lng":-122.0402399},"newport beach":{"name":"Newport Beach","lat":33.6189101,"lng":-117.9289469},"north highlands":{"name":"North Highlands","lat":38.6857362,"lng":-121.3721745},"norwalk":{"name":"Norwalk","lat":33.9022367,"lng":-118.081733},"novato":{"name":"Novato","lat":38.1074198,"lng":-122.5697032},"oakland":{"name":"Oakland","lat":37.8043637,"lng":-122.2711137},"oceanside":{"name":"Oceanside","lat":33.1958696,"lng":-117.3794834},"ontario":{"name":"Ontario","lat":34.0633443,"lng":-117.6508876},"orange":{"name":"Orange","lat":33.7877944,"lng":-117.8531119},"oxnard":{"name":"Oxnard","lat":34.1975048,"lng":-119.1770516},"palmdale":{"name":"Palmdale","lat":34.5794343,"lng":-118.1164613},"palm desert":{"name":"Palm Desert","lat":33.7222445,"lng":-116.3744556},"palm springs":{"name":"Palm Springs","lat":33.8302961,"lng":-116.5452921},"palo alto":{"name":"Palo Alto","lat":37.4418834,"lng":-122.1430195},"paramount":{"name":"Paramount","lat":33.8894598,"lng":-118.1597911},"pasadena":{"name":"Pasadena","lat":34.1477849,"lng":-118.1445155},"perris":{"name":"Perris","lat":33.7825194,"lng":-117.2286478},"petaluma":{"name":"Petaluma","lat":38.232417,"lng":-122.6366524},"pico rivera":{"name":"Pico Rivera","lat":33.9830688,"lng":-118.096735},"pittsburg":{"name":"Pittsburg","lat":38.0279762,"lng":-121.8846806},"placentia":{"name":"Placentia","lat":33.8722371,"lng":-117.8703363},"pleasanton":{"name":"Pleasanton","lat":37.6624312,"lng":-121.8746789},"pomona":{"name":"Pomona","lat":34.0552267,"lng":-117.7523048},"poway":{"name":"Poway","lat":32.9628232,"lng":-117.0358646},"rancho cordova":{"name":"Rancho Cordova","lat":38.5890723,"lng":-121.302728},"rancho cucamonga":{"name":"Rancho Cucamonga","lat":34.10639889999999,"lng":-117.5931084},"rancho palos verdes":{"name":"Rancho Palos Verdes","lat":33.7444613,"lng":-118.3870173},"rancho santa margarita":{"name":"Rancho Santa Margarita","lat":33.640855,"lng":-117.603104},"redding":{"name":"Redding","lat":40.5865396,"lng":-122.3916754},"redlands":{"name":"Redlands","lat":34.0555693,"lng":-117.1825381},"redondo beach":{"name":"Redondo Beach","lat":33.8491816,"lng":-118.3884078},"redwood city":{"name":"Redwood City","lat":37.48521520000001,"lng":-122.2363548},"rialto":{"name":"Rialto","lat":34.1064001,"lng":-117.3703235},"richmond":{"name":"Richmond","lat":37.9357576,"lng":-122.3477486},"riverside":{"name":"Riverside","lat":33.9533487,"lng":-117.3961564},"rocklin":{"name":"Rocklin","lat":38.7907339,"lng":-121.2357828},"rohnert park":{"name":"Rohnert Park","lat":38.3396367,"lng":-122.7010984},"rosemead":{"name":"Rosemead","lat":34.0805651,"lng":-118.072846},"roseville":{"name":"Roseville","lat":38.7521235,"lng":-121.2880059},"rowland heights":{"name":"Rowland Heights","lat":33.9761238,"lng":-117.9053395},"sacramento":{"name":"Sacramento","lat":38.5815719,"lng":-121.4943996},"salinas":{"name":"Salinas","lat":36.6777372,"lng":-121.6555013},"san bernardino":{"name":"San Bernardino","lat":34.1083449,"lng":-117.2897652},"san bruno":{"name":"San Bruno","lat":37.6304904,"lng":-122.4110835},"ventura":{"name":"Ventura","lat":34.2746405,"lng":-119.2290053},"san clemente":{"name":"San Clemente","lat":33.4269728,"lng":-117.6119925},"san diego":{"name":"San Diego","lat":32.7153292,"lng":-117.1572551},"san francisco":{"name":"San Francisco","lat":37.7749295,"lng":-122.4194155},"san jacinto":{"name":"San Jacinto","lat":33.7839084,"lng":-116.958635},"san jose":{"name":"San Jose","lat":37.3393857,"lng":-121.8949555},"san leandro":{"name":"San Leandro","lat":37.7249296,"lng":-122.1560768},"san luis obispo":{"name":"San Luis Obispo","lat":35.2827524,"lng":-120.6596156},"san marcos":{"name":"San Marcos","lat":33.1433723,"lng":-117.1661449},"san mateo":{"name":"San Mateo","lat":37.5629917,"lng":-122.3255254},"san rafael":{"name":"San Rafael","lat":37.9735346,"lng":-122.5310874},"san ramon":{"name":"San Ramon","lat":37.7799273,"lng":-121.9780153},"santa ana":{"name":"Santa Ana","lat":33.7455731,"lng":-117.8678338},"santa barbara":{"name":"Santa Barbara","lat":34.4208305,"lng":-119.6981901},"santa clara":{"name":"Santa Clara","lat":37.3541079,"lng":-121.9552356},"santa clarita":{"name":"Santa Clarita","lat":34.3916641,"lng":-118.542586},"santa cruz":{"name":"Santa Cruz","lat":36.9741171,"lng":-122.0307963},"santa maria":{"name":"Santa Maria","lat":34.9530337,"lng":-120.4357191},"santa monica":{"name":"Santa Monica","lat":34.0194543,"lng":-118.4911912},"santa rosa":{"name":"Santa Rosa","lat":38.4404674,"lng":-122.7144314},"santee":{"name":"Santee","lat":32.8383828,"lng":-116.9739167},"simi valley":{"name":"Simi Valley","lat":34.2694474,"lng":-118.781482},"south gate":{"name":"South Gate","lat":33.954737,"lng":-118.2120161},"south san francisco":{"name":"South San Francisco","lat":37.654656,"lng":-122.4077498},"south whittier":{"name":"South Whittier","lat":33.9347222,"lng":-118.0308333},"stockton":{"name":"Stockton","lat":37.9577016,"lng":-121.2907796},"sunnyvale":{"name":"Sunnyvale","lat":37.36883,"lng":-122.0363496},"temecula":{"name":"Temecula","lat":33.4936391,"lng":-117.1483648},"thousand oaks":{"name":"Thousand Oaks","lat":34.1705609,"lng":-118.8375937},"torrance":{"name":"Torrance","lat":33.8358492,"lng":-118.3406288},"tracy":{"name":"Tracy","lat":37.7396513,"lng":-121.4252227},"turlock":{"name":"Turlock","lat":37.4946568,"lng":-120.8465941},"tustin":{"name":"Tustin","lat":33.7458511,"lng":-117.826166},"union city":{"name":"Union City","lat":37.5919304,"lng":-122.0456199},"upland":{"name":"Upland","lat":34.09751,"lng":-117.6483876},"vacaville":{"name":"Vacaville","lat":38.3565773,"lng":-121.9877444},"vallejo":{"name":"Vallejo","lat":38.1040864,"lng":-122.2566367},"victorville":{"name":"Victorville","lat":34.5361067,"lng":-117.2911565},"visalia":{"name":"Visalia","lat":36.3302284,"lng":-119.2920585},"vista":{"name":"Vista","lat":33.2000368,"lng":-117.2425355},"walnut creek":{"name":"Walnut Creek","lat":37.9063131,"lng":-122.064963},"watsonville":{"name":"Watsonville","lat":36.910231,"lng":-121.7568946},"west covina":{"name":"West Covina","lat":34.0686208,"lng":-117.9389526},"westminster":{"name":"Westminster","lat":33.7513419,"lng":-117.9939921},"west sacramento":{"name":"West Sacramento","lat":38.5804609,"lng":-121.530234},"whittier":{"name":"Whittier","lat":33.9791793,"lng":-118.032844},"woodland":{"name":"Woodland","lat":38.67851570000001,"lng":-121.7732971},"yorba linda":{"name":"Yorba Linda","lat":33.8886259,"lng":-117.8131125},"yuba city":{"name":"Yuba City","lat":39.1404477,"lng":-121.6169108},"yucaipa":{"name":"Yucaipa","lat":34.033625,"lng":-117.0430865}},"NY":{"albany":{"name":"Albany","lat":42.6525793,"lng":-73.7562317},"binghamton":{"name":"Binghamton","lat":42.09868669999999,"lng":-75.91797380000001},"brentwood":{"name":"Brentwood","lat":40.7812093,"lng":-73.2462273},"buffalo":{"name":"Buffalo","lat":42.88644679999999,"lng":-78.8783689},"cheektowaga":{"name":"Cheektowaga","lat":42.9026136,"lng":-78.74457199999999},"freeport":{"name":"Freeport","lat":40.6576022,"lng":-73.58318349999999},"hempstead":{"name":"Hempstead","lat":40.7062128,"lng":-73.6187397},"hicksville":{"name":"Hicksville","lat":40.7684331,"lng":-73.5251253},"irondequoit":{"name":"Irondequoit","lat":43.2133955,"lng":-77.5797226},"levittown":{"name":"Levittown","lat":40.7259336,"lng":-73.51429209999999},"mt vernon":{"name":"Mt Vernon","lat":40.9125992,"lng":-73.8370786},"new rochelle":{"name":"New Rochelle","lat":40.9114882,"lng":-73.7823549},"new york":{"name":"New York","lat":40.7143528,"lng":-74.00597309999999},"manhattan":{"name":"Manhattan","lat":40.7834345,"lng":-73.9662495},"niagara falls":{"name":"Niagara Falls","lat":43.0962143,"lng":-79.0377388},"rochester":{"name":"Rochester","lat":43.16103,"lng":-77.6109219},"schenectady":{"name":"Schenectady","lat":42.8142432,"lng":-73.9395687},"syracuse":{"name":"Syracuse","lat":43.114397,"lng":-76.2710833},"troy":{"name":"Troy","lat":42.7284117,"lng":-73.69178509999999},"utica":{"name":"Utica","lat":43.100903,"lng":-75.232664},"west babylon":{"name":"West Babylon","lat":40.718155,"lng":-73.354287},"west seneca":{"name":"West Seneca","lat":42.8500585,"lng":-78.79975470000001},"white plains":{"name":"White Plains","lat":41.03398620000001,"lng":-73.7629097},"yonkers":{"name":"Yonkers","lat":40.9312099,"lng":-73.89874689999999}},"GA":{"albany":{"name":"Albany","lat":31.5785074,"lng":-84.15574099999999},"alpharetta":{"name":"Alpharetta","lat":34.0753762,"lng":-84.2940899},"athens":{"name":"Athens","lat":33.955802,"lng":-83.3823656},"atlanta":{"name":"Atlanta","lat":33.7489954,"lng":-84.3879824},"augusta":{"name":"Augusta","lat":33.474246,"lng":-82.00967},"columbus":{"name":"Columbus","lat":32.4609764,"lng":-84.9877094},"dunwoody":{"name":"Dunwoody","lat":33.9462125,"lng":-84.3346473},"johns creek":{"name":"Johns Creek","lat":34.0289259,"lng":-84.198579},"macon":{"name":"Macon","lat":32.8406946,"lng":-83.6324022},"marietta":{"name":"Marietta","lat":33.95260200000001,"lng":-84.5499327},"north atlanta":{"name":"North Atlanta","lat":33.8651033,"lng":-84.3365917},"roswell":{"name":"Roswell","lat":34.02315530000001,"lng":-84.3615928},"sandy springs":{"name":"Sandy Springs","lat":33.9242688,"lng":-84.3785379},"savannah":{"name":"Savannah","lat":32.0835407,"lng":-81.09983419999999},"smyrna":{"name":"Smyrna","lat":33.8839926,"lng":-84.51437609999999},"valdosta":{"name":"Valdosta","lat":30.8327022,"lng":-83.2784851},"warner robins":{"name":"Warner Robins","lat":32.6086111,"lng":-83.6380556}},"OR":{"albany":{"name":"Albany","lat":44.6365107,"lng":-123.1059282},"aloha":{"name":"Aloha","lat":45.4942838,"lng":-122.8670454},"beaverton":{"name":"Beaverton","lat":45.48706199999999,"lng":-122.8037102},"bend":{"name":"Bend","lat":44.0581728,"lng":-121.3153096},"corvallis":{"name":"Corvallis","lat":44.5645659,"lng":-123.2620435},"eugene":{"name":"Eugene","lat":44.0520691,"lng":-123.0867536},"gresham":{"name":"Gresham","lat":45.5001357,"lng":-122.4302013},"hillsboro":{"name":"Hillsboro","lat":45.5228939,"lng":-122.989827},"medford":{"name":"Medford","lat":42.3265152,"lng":-122.8755949},"portland":{"name":"Portland","lat":45.5234515,"lng":-122.6762071},"salem":{"name":"Salem","lat":44.9428975,"lng":-123.0350963},"springfield":{"name":"Springfield","lat":44.0462362,"lng":-123.0220289},"tigard":{"name":"Tigard","lat":45.4312294,"lng":-122.7714861}},"NM":{"albuquerque":{"name":"Albuquerque","lat":35.0844909,"lng":-106.6511367},"farmington":{"name":"Farmington","lat":36.72805830000001,"lng":-108.2186856},"las cruces":{"name":"Las Cruces","lat":32.3199396,"lng":-106.7636538},"rio rancho":{"name":"Rio Rancho","lat":35.2327544,"lng":-106.6630437},"roswell":{"name":"Roswell","lat":33.3942655,"lng":-104.5230242},"santa fe":{"name":"Santa Fe","lat":35.6869752,"lng":-105.937799},"south valley":{"name":"South Valley","lat":35.0100487,"lng":-106.6780809}},"VA":{"alexandria":{"name":"Alexandria","lat":38.8048355,"lng":-77.0469214},"arlington":{"name":"Arlington","lat":38.8799697,"lng":-77.1067698},"ashburn":{"name":"Ashburn","lat":39.0414079,"lng":-77.48101799999999},"blacksburg":{"name":"Blacksburg","lat":37.2295733,"lng":-80.4139393},"centreville":{"name":"Centreville","lat":38.8403909,"lng":-77.42887689999999},"charlottesville":{"name":"Charlottesville","lat":38.0293059,"lng":-78.47667810000002},"chesapeake":{"name":"Chesapeake","lat":36.7682088,"lng":-76.2874927},"dale city":{"name":"Dale City","lat":38.6370622,"lng":-77.31109459999999},"danville":{"name":"Danville","lat":36.5859718,"lng":-79.39502279999999},"hampton":{"name":"Hampton","lat":37.0298687,"lng":-76.34522179999999},"harrisonburg":{"name":"Harrisonburg","lat":38.4495688,"lng":-78.8689155},"lake ridge":{"name":"Lake Ridge","lat":38.68789400000001,"lng":-77.29776180000002},"leesburg":{"name":"Leesburg","lat":39.1156615,"lng":-77.56360149999999},"linton hall":{"name":"Linton Hall","lat":38.7598381,"lng":-77.5749905},"lynchburg":{"name":"Lynchburg","lat":37.4137536,"lng":-79.14224639999999},"mclean":{"name":"McLean","lat":38.9338676,"lng":-77.1772604},"newport news":{"name":"Newport News","lat":37.0870821,"lng":-76.4730122},"norfolk":{"name":"Norfolk","lat":36.8507689,"lng":-76.28587259999999},"portsmouth":{"name":"Portsmouth","lat":36.8354258,"lng":-76.2982742},"reston":{"name":"Reston","lat":38.9586307,"lng":-77.35700279999999},"richmond":{"name":"Richmond","lat":37.5407246,"lng":-77.4360481},"roanoke":{"name":"Roanoke","lat":37.2709704,"lng":-79.9414266},"suffolk":{"name":"Suffolk","lat":36.7282054,"lng":-76.5835621},"tuckahoe":{"name":"Tuckahoe","lat":37.5901463,"lng":-77.5563761},"virginia beach":{"name":"Virginia Beach","lat":36.8529263,"lng":-75.97798499999999}},"LA":{"alexandria":{"name":"Alexandria","lat":31.3112936,"lng":-92.4451371},"baton rouge":{"name":"Baton Rouge","lat":30.4582829,"lng":-91.1403196},"bossier city":{"name":"Bossier City","lat":32.5159852,"lng":-93.7321228},"kenner":{"name":"Kenner","lat":29.9940924,"lng":-90.2417434},"lafayette":{"name":"Lafayette","lat":30.2240897,"lng":-92.0198427},"lake charles":{"name":"Lake Charles","lat":30.2265949,"lng":-93.2173758},"metairie":{"name":"Metairie","lat":29.9840922,"lng":-90.1528519},"monroe":{"name":"Monroe","lat":32.5093109,"lng":-92.1193012},"new orleans":{"name":"New Orleans","lat":29.95106579999999,"lng":-90.0715323},"shreveport":{"name":"Shreveport","lat":32.5251516,"lng":-93.7501789}},"PA":{"allentown":{"name":"Allentown","lat":40.6084305,"lng":-75.4901833},"altoona":{"name":"Altoona","lat":40.5186809,"lng":-78.3947359},"bethlehem":{"name":"Bethlehem","lat":40.6259316,"lng":-75.37045789999999},"erie":{"name":"Erie","lat":42.12922409999999,"lng":-80.085059},"harrisburg":{"name":"Harrisburg","lat":40.2737002,"lng":-76.8844179},"lancaster":{"name":"Lancaster","lat":40.0378755,"lng":-76.3055144},"levittown":{"name":"Levittown","lat":40.1551096,"lng":-74.8287747},"philadelphia":{"name":"Philadelphia","lat":39.952335,"lng":-75.16378900000001},"california-kirkbride":{"name":"California-Kirkbride","lat":40.4600435,"lng":-80.0213538},"pittsburgh":{"name":"Pittsburgh","lat":40.44062479999999,"lng":-79.9958864},"reading":{"name":"Reading","lat":40.3356483,"lng":-75.9268747},"scranton":{"name":"Scranton","lat":41.408969,"lng":-75.66241219999999},"state college":{"name":"State College","lat":40.7933949,"lng":-77.8600012},"wilkes-barre":{"name":"Wilkes-Barre","lat":41.2459149,"lng":-75.88130749999999},"york":{"name":"York","lat":39.9625984,"lng":-76.727745}},"IA":{"ames":{"name":"Ames","lat":42.02335,"lng":-93.62562199999999},"ankeny":{"name":"Ankeny","lat":41.7266667,"lng":-93.6041667},"cedar rapids":{"name":"Cedar Rapids","lat":41.9778795,"lng":-91.6656232},"council bluffs":{"name":"Council Bluffs","lat":41.2619444,"lng":-95.8608333},"davenport":{"name":"Davenport","lat":41.5236437,"lng":-90.5776367},"des moines":{"name":"Des Moines","lat":41.6005448,"lng":-93.6091064},"dubuque":{"name":"Dubuque","lat":42.5005583,"lng":-90.66457179999999},"iowa city":{"name":"Iowa City","lat":41.6611277,"lng":-91.5301683},"sioux city":{"name":"Sioux City","lat":42.4999942,"lng":-96.40030689999999},"urbandale":{"name":"Urbandale","lat":41.6266555,"lng":-93.71216559999999},"waterloo":{"name":"Waterloo","lat":42.4927641,"lng":-92.34296309999999},"west des moines":{"name":"West Des Moines","lat":41.5772115,"lng":-93.711332}},"AK":{"anchorage":{"name":"Anchorage","lat":61.2180556,"lng":-149.9002778}},"IN":{"anderson":{"name":"Anderson","lat":40.1053196,"lng":-85.6802541},"bloomington":{"name":"Bloomington","lat":39.165325,"lng":-86.52638569999999},"carmel":{"name":"Carmel","lat":39.978371,"lng":-86.1180435},"columbus":{"name":"Columbus","lat":39.2014404,"lng":-85.9213796},"elkhart":{"name":"Elkhart","lat":41.6819935,"lng":-85.9766671},"evansville":{"name":"Evansville","lat":37.9715592,"lng":-87.5710898},"fishers":{"name":"Fishers","lat":39.9555928,"lng":-86.0138729},"fort wayne":{"name":"Fort Wayne","lat":41.079273,"lng":-85.1393513},"gary":{"name":"Gary","lat":41.5933696,"lng":-87.3464271},"greenwood":{"name":"Greenwood","lat":39.6136578,"lng":-86.10665259999999},"hammond":{"name":"Hammond","lat":41.5833688,"lng":-87.5000412},"indianapolis":{"name":"Indianapolis","lat":39.7685155,"lng":-86.1580736},"jeffersonville":{"name":"Jeffersonville","lat":38.2775702,"lng":-85.7371847},"kokomo":{"name":"Kokomo","lat":40.486427,"lng":-86.13360329999999},"lafayette":{"name":"Lafayette","lat":40.4167022,"lng":-86.87528689999999},"lawrence":{"name":"Lawrence","lat":39.8386516,"lng":-86.0252612},"mishawaka":{"name":"Mishawaka","lat":41.6619927,"lng":-86.15861559999999},"muncie":{"name":"Muncie","lat":40.1933767,"lng":-85.3863599},"noblesville":{"name":"Noblesville","lat":40.0455917,"lng":-86.0085955},"south bend":{"name":"South Bend","lat":41.6833813,"lng":-86.25000659999999},"terre haute":{"name":"Terre Haute","lat":39.4667034,"lng":-87.41390919999999}},"MI":{"ann arbor":{"name":"Ann Arbor","lat":42.3076493,"lng":-83.8473015},"battle creek":{"name":"Battle Creek","lat":42.3211522,"lng":-85.17971419999999},"dearborn":{"name":"Dearborn","lat":42.3222599,"lng":-83.17631449999999},"dearborn heights":{"name":"Dearborn Heights","lat":42.3369816,"lng":-83.27326269999999},"detroit":{"name":"Detroit","lat":42.331427,"lng":-83.0457538},"east lansing":{"name":"East Lansing","lat":42.7369792,"lng":-84.48386540000001},"farmington hills":{"name":"Farmington Hills","lat":42.4828221,"lng":-83.41838229999999},"flint":{"name":"Flint","lat":43.0777289,"lng":-83.67739279999999},"grand rapids":{"name":"Grand Rapids","lat":42.9633599,"lng":-85.6680863},"grand rapids charter township":{"name":"Grand Rapids Charter Township","lat":43.0020023,"lng":-85.57150150000001},"kalamazoo":{"name":"Kalamazoo","lat":42.2917069,"lng":-85.5872286},"kentwood":{"name":"Kentwood","lat":42.8694731,"lng":-85.64474919999999},"lansing":{"name":"Lansing","lat":42.732535,"lng":-84.5555347},"lansing charter township":{"name":"Lansing Charter Township","lat":42.7563594,"lng":-84.5283267},"livonia":{"name":"Livonia","lat":42.36837,"lng":-83.35270969999999},"midland":{"name":"Midland","lat":43.57509779999999,"lng":-84.3542049},"novi":{"name":"Novi","lat":42.48059,"lng":-83.4754913},"pontiac":{"name":"Pontiac","lat":42.6389216,"lng":-83.29104679999999},"portage":{"name":"Portage","lat":42.2011538,"lng":-85.5800022},"portage township":{"name":"Portage Township","lat":46.9338608,"lng":-88.66166109999999},"rochester hills":{"name":"Rochester Hills","lat":42.65836609999999,"lng":-83.1499322},"roseville":{"name":"Roseville","lat":42.4972583,"lng":-82.9371409},"royal oak":{"name":"Royal Oak","lat":42.4894801,"lng":-83.1446485},"saginaw":{"name":"Saginaw","lat":43.4194699,"lng":-83.9508068},"st clair shores":{"name":"St Clair Shores","lat":42.4931,"lng":-82.8911339},"southfield":{"name":"Southfield","lat":42.4733688,"lng":-83.2218731},"sterling heights":{"name":"Sterling Heights","lat":42.5803122,"lng":-83.0302033},"taylor":{"name":"Taylor","lat":42.240872,"lng":-83.2696509},"troy":{"name":"Troy","lat":42.6055893,"lng":-83.1499304},"warren":{"name":"Warren","lat":42.49299999999999,"lng":-83.02819699999999},"westland":{"name":"Westland","lat":42.32420399999999,"lng":-83.400211},"wyoming":{"name":"Wyoming","lat":42.9133602,"lng":-85.7053085}},"AZ":{"apache junction":{"name":"Apache Junction","lat":33.4150485,"lng":-111.5495777},"avondale":{"name":"Avondale","lat":33.4355977,"lng":-112.3496021},"buckeye":{"name":"Buckeye","lat":33.3703197,"lng":-112.5837766},"bullhead city":{"name":"Bullhead City","lat":35.1477774,"lng":-114.5682983},"casa grande":{"name":"Casa Grande","lat":32.8795022,"lng":-111.7573521},"casas adobes":{"name":"Casas Adobes","lat":32.3234078,"lng":-110.9950966},"catalina foothills":{"name":"Catalina Foothills","lat":32.297853,"lng":-110.9187037},"chandler":{"name":"Chandler","lat":33.3061605,"lng":-111.8412502},"flagstaff":{"name":"Flagstaff","lat":35.2013516,"lng":-111.639249},"gilbert":{"name":"Gilbert","lat":33.3528264,"lng":-111.789027},"glendale":{"name":"Glendale","lat":33.5386523,"lng":-112.1859866},"goodyear":{"name":"Goodyear","lat":33.449806,"lng":-112.3582136},"lake havasu city":{"name":"Lake Havasu City","lat":34.483901,"lng":-114.3224548},"maricopa":{"name":"Maricopa","lat":33.0581063,"lng":-112.0476423},"mesa":{"name":"Mesa","lat":33.4151843,"lng":-111.8314724},"oro valley":{"name":"Oro Valley","lat":32.3909071,"lng":-110.966488},"peoria":{"name":"Peoria","lat":33.5805955,"lng":-112.2373779},"phoenix":{"name":"Phoenix","lat":33.4483771,"lng":-112.0740373},"prescott":{"name":"Prescott","lat":34.5400242,"lng":-112.4685025},"prescott valley":{"name":"Prescott Valley","lat":34.6100243,"lng":-112.315721},"san tan valley":{"name":"San Tan Valley","lat":33.1702778,"lng":-111.5722222},"scottsdale":{"name":"Scottsdale","lat":33.4941704,"lng":-111.9260519},"sierra vista":{"name":"Sierra Vista","lat":31.5455001,"lng":-110.2772856},"surprise":{"name":"Surprise","lat":33.639099,"lng":-112.3957576},"tempe":{"name":"Tempe","lat":33.4255104,"lng":-111.9400054},"tucson":{"name":"Tucson","lat":32.2217429,"lng":-110.926479},"yuma":{"name":"Yuma","lat":32.6926512,"lng":-114.6276916}},"NC":{"apex":{"name":"Apex","lat":35.732652,"lng":-78.85028559999999},"asheville":{"name":"Asheville","lat":35.6009452,"lng":-82.55401499999999},"burlington":{"name":"Burlington","lat":36.0956918,"lng":-79.43779909999999},"cary":{"name":"Cary","lat":35.79154,"lng":-78.7811169},"chapel hill":{"name":"Chapel Hill","lat":35.9131996,"lng":-79.0558445},"charlotte":{"name":"Charlotte","lat":35.2270869,"lng":-80.8431267},"concord":{"name":"Concord","lat":35.4087517,"lng":-80.579511},"durham":{"name":"Durham","lat":35.9940329,"lng":-78.898619},"fayetteville":{"name":"Fayetteville","lat":35.0526641,"lng":-78.87835849999999},"gastonia":{"name":"Gastonia","lat":35.262082,"lng":-81.18730049999999},"greensboro":{"name":"Greensboro","lat":36.0726354,"lng":-79.7919754},"greenville":{"name":"Greenville","lat":35.612661,"lng":-77.3663538},"high point":{"name":"High Point","lat":35.9556923,"lng":-80.0053176},"huntersville":{"name":"Huntersville","lat":35.410694,"lng":-80.84285040000002},"jacksonville":{"name":"Jacksonville","lat":34.7540524,"lng":-77.4302414},"kannapolis":{"name":"Kannapolis","lat":35.4873613,"lng":-80.6217341},"raleigh":{"name":"Raleigh","lat":35.772096,"lng":-78.6386145},"rocky mt":{"name":"Rocky Mt","lat":35.9382103,"lng":-77.7905339},"wilmington":{"name":"Wilmington","lat":34.2257255,"lng":-77.9447102},"wilson":{"name":"Wilson","lat":35.7212689,"lng":-77.9155395},"winston-salem":{"name":"Winston-Salem","lat":36.09985959999999,"lng":-80.244216}},"WI":{"appleton":{"name":"Appleton","lat":44.2619309,"lng":-88.41538469999999},"eau claire":{"name":"Eau Claire","lat":44.811349,"lng":-91.4984941},"fond du lac":{"name":"Fond du Lac","lat":43.7730448,"lng":-88.4470508},"green bay":{"name":"Green Bay","lat":44.51915899999999,"lng":-88.019826},"janesville":{"name":"Janesville","lat":42.6827885,"lng":-89.0187222},"kenosha":{"name":"Kenosha","lat":42.5847425,"lng":-87.82118539999999},"la crosse":{"name":"La Crosse","lat":43.8013556,"lng":-91.23958069999999},"madison":{"name":"Madison","lat":43.0730517,"lng":-89.4012302},"milwaukee":{"name":"Milwaukee","lat":43.0389025,"lng":-87.9064736},"oshkosh":{"name":"Oshkosh","lat":44.0247062,"lng":-88.5426136},"racine":{"name":"Racine","lat":42.7261309,"lng":-87.78285230000002},"sheboygan":{"name":"Sheboygan","lat":43.7508284,"lng":-87.71453},"waukesha":{"name":"Waukesha","lat":43.0116784,"lng":-88.2314813},"wauwatosa":{"name":"Wauwatosa","lat":43.0494572,"lng":-88.0075875},"west allis":{"name":"West Allis","lat":43.0166806,"lng":-88.0070315}},"MN":{"apple valley":{"name":"Apple Valley","lat":44.7319094,"lng":-93.21772000000001},"blaine":{"name":"Blaine","lat":45.1607987,"lng":-93.23494889999999},"bloomington":{"name":"Bloomington","lat":44.840798,"lng":-93.2982799},"brooklyn park":{"name":"Brooklyn Park","lat":45.0941315,"lng":-93.3563405},"burnsville":{"name":"Burnsville","lat":44.7677424,"lng":-93.27772259999999},"coon rapids":{"name":"Coon Rapids","lat":45.1199652,"lng":-93.28772769999999},"duluth":{"name":"Duluth","lat":46.78667189999999,"lng":-92.1004852},"eagan":{"name":"Eagan","lat":44.8041322,"lng":-93.1668858},"eden prairie":{"name":"Eden Prairie","lat":44.8546856,"lng":-93.47078599999999},"edina":{"name":"Edina","lat":44.8896866,"lng":-93.3499489},"lakeville":{"name":"Lakeville","lat":44.6496868,"lng":-93.24271999999999},"maple grove":{"name":"Maple Grove","lat":45.0724642,"lng":-93.4557877},"minneapolis":{"name":"Minneapolis","lat":44.9799654,"lng":-93.26383609999999},"minnetonka":{"name":"Minnetonka","lat":44.9211836,"lng":-93.4687489},"plymouth":{"name":"Plymouth","lat":45.0105194,"lng":-93.4555093},"rochester":{"name":"Rochester","lat":44.0216306,"lng":-92.4698992},"st cloud":{"name":"St Cloud","lat":45.5538889,"lng":-94.1702778},"st louis park":{"name":"St Louis Park","lat":44.9597376,"lng":-93.3702186},"st paul":{"name":"St Paul","lat":44.95416669999999,"lng":-93.11388889999999},"shakopee":{"name":"Shakopee","lat":44.7973962,"lng":-93.5272861},"woodbury":{"name":"Woodbury","lat":44.9238552,"lng":-92.9593797}},"MA":{"arlington":{"name":"Arlington","lat":42.4153925,"lng":-71.1564729},"attleboro":{"name":"Attleboro","lat":41.94454409999999,"lng":-71.2856082},"barnstable":{"name":"Barnstable","lat":41.7014167,"lng":-70.3030556},"billerica":{"name":"Billerica","lat":42.5584218,"lng":-71.2689461},"boston":{"name":"Boston","lat":42.3584308,"lng":-71.0597732},"brockton":{"name":"Brockton","lat":42.0834335,"lng":-71.0183787},"brookline":{"name":"Brookline","lat":42.33176419999999,"lng":-71.1211635},"cambridge":{"name":"Cambridge","lat":42.3726399,"lng":-71.10965279999999},"chicopee":{"name":"Chicopee","lat":42.1487043,"lng":-72.6078672},"everett":{"name":"Everett","lat":42.40843,"lng":-71.0536625},"fall river":{"name":"Fall River","lat":41.7014912,"lng":-71.1550451},"framingham":{"name":"Framingham","lat":42.279286,"lng":-71.4161565},"haverhill":{"name":"Haverhill","lat":42.7762015,"lng":-71.0772796},"lawrence":{"name":"Lawrence","lat":42.7070354,"lng":-71.1631137},"lowell":{"name":"Lowell","lat":42.6334247,"lng":-71.31617179999999},"lynn":{"name":"Lynn","lat":42.46676300000001,"lng":-70.9494938},"malden":{"name":"Malden","lat":42.4250964,"lng":-71.066163},"medford":{"name":"Medford","lat":42.4184296,"lng":-71.1061639},"methuen":{"name":"Methuen","lat":42.7262016,"lng":-71.1908924},"new bedford":{"name":"New Bedford","lat":41.6362152,"lng":-70.93420499999999},"newton":{"name":"Newton","lat":42.3370413,"lng":-71.20922139999999},"north attleboro":{"name":"North Attleboro","lat":41.9695516,"lng":-71.35654389999999},"peabody":{"name":"Peabody","lat":42.5278731,"lng":-70.9286609},"pittsfield":{"name":"Pittsfield","lat":42.4500845,"lng":-73.2453824},"quincy":{"name":"Quincy","lat":42.2528772,"lng":-71.0022705},"revere":{"name":"Revere","lat":42.4084302,"lng":-71.0119948},"salem":{"name":"Salem","lat":42.51954,"lng":-70.8967155},"somerville":{"name":"Somerville","lat":42.3875968,"lng":-71.0994968},"springfield":{"name":"Springfield","lat":42.1014831,"lng":-72.589811},"taunton":{"name":"Taunton","lat":41.900101,"lng":-71.0897674},"waltham":{"name":"Waltham","lat":42.3764852,"lng":-71.2356113},"westfield":{"name":"Westfield","lat":42.1250929,"lng":-72.749538},"weymouth":{"name":"Weymouth","lat":42.2180724,"lng":-70.94103559999999},"worcester":{"name":"Worcester","lat":42.2625932,"lng":-71.8022934}},"IL":{"arlington heights":{"name":"Arlington Heights","lat":42.0883603,"lng":-87.98062650000001},"aurora":{"name":"Aurora","lat":41.7605849,"lng":-88.32007150000001},"bartlett":{"name":"Bartlett","lat":41.9950276,"lng":-88.1856301},"belleville":{"name":"Belleville","lat":38.5200504,"lng":-89.9839935},"berwyn":{"name":"Berwyn","lat":41.85058739999999,"lng":-87.7936685},"bloomington":{"name":"Bloomington","lat":40.4842027,"lng":-88.99368729999999},"bolingbrook":{"name":"Bolingbrook","lat":41.69864159999999,"lng":-88.0683955},"buffalo grove":{"name":"Buffalo Grove","lat":42.1662831,"lng":-87.9631308},"champaign":{"name":"Champaign","lat":40.1164204,"lng":-88.2433829},"chicago":{"name":"Chicago","lat":41.8781136,"lng":-87.6297982},"cicero":{"name":"Cicero","lat":41.8455877,"lng":-87.7539448},"crystal lake":{"name":"Crystal Lake","lat":42.2411344,"lng":-88.31619649999999},"decatur":{"name":"Decatur","lat":39.8403147,"lng":-88.9548001},"dekalb":{"name":"DeKalb","lat":41.9294736,"lng":-88.75036469999999},"des plaines":{"name":"Des Plaines","lat":42.0333623,"lng":-87.88339909999999},"downers grove":{"name":"Downers Grove","lat":41.8089191,"lng":-88.01117459999999},"elgin":{"name":"Elgin","lat":42.0372487,"lng":-88.2811895},"elmhurst":{"name":"Elmhurst","lat":41.8994744,"lng":-87.9403418},"evanston":{"name":"Evanston","lat":42.0411414,"lng":-87.6900587},"glenview":{"name":"Glenview","lat":42.0697509,"lng":-87.7878408},"hoffman estates":{"name":"Hoffman Estates","lat":42.0629915,"lng":-88.12271989999999},"joliet":{"name":"Joliet","lat":41.525031,"lng":-88.0817251},"lombard":{"name":"Lombard","lat":41.8800296,"lng":-88.00784349999999},"moline":{"name":"Moline","lat":41.5067003,"lng":-90.51513419999999},"mt prospect":{"name":"Mt Prospect","lat":42.0664167,"lng":-87.9372908},"naperville":{"name":"Naperville","lat":41.7858629,"lng":-88.1472893},"normal":{"name":"Normal","lat":40.5142026,"lng":-88.9906312},"oak lawn":{"name":"Oak Lawn","lat":41.7108662,"lng":-87.7581081},"oak park":{"name":"Oak Park","lat":41.8850317,"lng":-87.7845025},"orland park":{"name":"Orland Park","lat":41.6303103,"lng":-87.85394250000002},"palatine":{"name":"Palatine","lat":42.1103041,"lng":-88.03424000000001},"peoria":{"name":"Peoria","lat":40.6936488,"lng":-89.5889864},"plainfield":{"name":"Plainfield","lat":41.615915,"lng":-88.20406899999999},"rockford":{"name":"Rockford","lat":42.2711311,"lng":-89.0939952},"romeoville":{"name":"Romeoville","lat":41.6475306,"lng":-88.0895061},"schaumburg":{"name":"Schaumburg","lat":42.0333607,"lng":-88.0834059},"skokie":{"name":"Skokie","lat":42.0333636,"lng":-87.7333934},"springfield":{"name":"Springfield","lat":39.78172130000001,"lng":-89.6501481},"tinley park":{"name":"Tinley Park","lat":41.5733669,"lng":-87.7844944},"urbana":{"name":"Urbana","lat":40.1105875,"lng":-88.2072697},"waukegan":{"name":"Waukegan","lat":42.3636331,"lng":-87.84479379999999},"wheaton":{"name":"Wheaton","lat":41.8661403,"lng":-88.1070127}},"CO":{"arvada":{"name":"Arvada","lat":39.8027644,"lng":-105.0874842},"aurora":{"name":"Aurora","lat":39.7294319,"lng":-104.8319195},"boulder":{"name":"Boulder","lat":40.0149856,"lng":-105.2705456},"broomfield":{"name":"Broomfield","lat":39.9205411,"lng":-105.0866504},"castle rock":{"name":"Castle Rock","lat":39.3722121,"lng":-104.8560902},"centennial":{"name":"Centennial","lat":39.5807452,"lng":-104.8771726},"colorado springs":{"name":"Colorado Springs","lat":38.8338816,"lng":-104.8213634},"commerce city":{"name":"Commerce City","lat":39.8083196,"lng":-104.9338675},"denver":{"name":"Denver","lat":39.7391536,"lng":-104.9847034},"fort collins":{"name":"Fort Collins","lat":40.5852602,"lng":-105.084423},"grand junction":{"name":"Grand Junction","lat":39.0638705,"lng":-108.5506486},"greeley":{"name":"Greeley","lat":40.4233142,"lng":-104.7091322},"highlands ranch":{"name":"Highlands Ranch","lat":39.5444444,"lng":-104.9680556},"lakewood":{"name":"Lakewood","lat":39.7047095,"lng":-105.0813734},"littleton":{"name":"Littleton","lat":39.613321,"lng":-105.0166498},"longmont":{"name":"Longmont","lat":40.1672068,"lng":-105.1019275},"loveland":{"name":"Loveland","lat":40.3977612,"lng":-105.0749801},"parker":{"name":"Parker","lat":39.5186002,"lng":-104.7613633},"pueblo":{"name":"Pueblo","lat":38.2544472,"lng":-104.6091409},"thornton":{"name":"Thornton","lat":39.8680412,"lng":-104.9719243},"westminster":{"name":"Westminster","lat":39.8366528,"lng":-105.0372046}},"MD":{"aspen hill":{"name":"Aspen Hill","lat":39.0795529,"lng":-77.07303379999999},"baltimore":{"name":"Baltimore","lat":39.2903848,"lng":-76.6121893},"bel air south":{"name":"Bel Air South","lat":39.504033,"lng":-76.3181},"bethesda":{"name":"Bethesda","lat":38.984652,"lng":-77.0947092},"bowie":{"name":"Bowie","lat":39.0067768,"lng":-76.77913649999999},"catonsville":{"name":"Catonsville","lat":39.2720509,"lng":-76.73191609999999},"columbia":{"name":"Columbia","lat":39.2040236,"lng":-76.860565},"dundalk":{"name":"Dundalk","lat":39.2506633,"lng":-76.5205184},"ellicott city":{"name":"Ellicott City","lat":39.2673283,"lng":-76.7983067},"frederick":{"name":"Frederick","lat":39.41426879999999,"lng":-77.4105409},"gaithersburg":{"name":"Gaithersburg","lat":39.1434406,"lng":-77.2013705},"germantown":{"name":"Germantown","lat":39.1731621,"lng":-77.2716502},"glen burnie":{"name":"Glen Burnie","lat":39.1626084,"lng":-76.6246886},"north bethesda":{"name":"North Bethesda","lat":39.0445535,"lng":-77.11886779999999},"odenton":{"name":"Odenton","lat":39.0839981,"lng":-76.7002462},"potomac":{"name":"Potomac","lat":39.0181651,"lng":-77.2085914},"rockville":{"name":"Rockville","lat":39.0839973,"lng":-77.1527578},"severn":{"name":"Severn","lat":39.1370528,"lng":-76.6983022},"silver spring":{"name":"Silver Spring","lat":38.99066570000001,"lng":-77.026088},"towson":{"name":"Towson","lat":39.4014955,"lng":-76.6019125},"waldorf":{"name":"Waldorf","lat":38.6343544,"lng":-76.90668289999999},"wheaton":{"name":"Wheaton","lat":39.0398314,"lng":-77.05525550000002}},"WA":{"auburn":{"name":"Auburn","lat":47.30732279999999,"lng":-122.2284532},"bellevue":{"name":"Bellevue","lat":47.610377,"lng":-122.2006786},"bellingham":{"name":"Bellingham","lat":48.7595529,"lng":-122.4882249},"everett":{"name":"Everett","lat":47.9789848,"lng":-122.2020794},"federal way":{"name":"Federal Way","lat":47.3223221,"lng":-122.3126222},"kennewick":{"name":"Kennewick","lat":46.2112458,"lng":-119.1372338},"kent":{"name":"Kent","lat":47.3809335,"lng":-122.2348431},"kirkland":{"name":"Kirkland","lat":47.6814875,"lng":-122.2087353},"lacey":{"name":"Lacey","lat":47.03426289999999,"lng":-122.8231915},"lakewood":{"name":"Lakewood","lat":47.1717649,"lng":-122.518458},"marysville":{"name":"Marysville","lat":48.0517637,"lng":-122.1770818},"olympia":{"name":"Olympia","lat":47.0378741,"lng":-122.9006951},"pasco":{"name":"Pasco","lat":46.2395793,"lng":-119.1005657},"redmond":{"name":"Redmond","lat":47.6739881,"lng":-122.121512},"renton":{"name":"Renton","lat":47.48287759999999,"lng":-122.2170661},"richland":{"name":"Richland","lat":46.2856907,"lng":-119.2844621},"sammamish":{"name":"Sammamish","lat":47.64176639999999,"lng":-122.0803998},"seattle":{"name":"Seattle","lat":47.6062095,"lng":-122.3320708},"shoreline":{"name":"Shoreline","lat":47.7556531,"lng":-122.3415178},"south hill":{"name":"South Hill","lat":47.1412122,"lng":-122.2701183},"spokane":{"name":"Spokane","lat":47.6587802,"lng":-117.4260466},"spokane valley":{"name":"Spokane Valley","lat":47.6732281,"lng":-117.2393748},"tacoma":{"name":"Tacoma","lat":47.2528768,"lng":-122.4442906},"vancouver":{"name":"Vancouver","lat":45.6387281,"lng":-122.6614861},"yakima":{"name":"Yakima","lat":46.6020711,"lng":-120.5058987}},"AL":{"auburn":{"name":"Auburn","lat":32.6098566,"lng":-85.48078249999999},"birmingham":{"name":"Birmingham","lat":33.5206608,"lng":-86.80248999999999},"decatur":{"name":"Decatur","lat":34.6059253,"lng":-86.9833417},"dothan":{"name":"Dothan","lat":31.2232313,"lng":-85.3904888},"hoover":{"name":"Hoover","lat":33.4053867,"lng":-86.8113781},"huntsville":{"name":"Huntsville","lat":34.7303688,"lng":-86.5861037},"madison":{"name":"Madison","lat":34.6992579,"lng":-86.74833180000002},"mobile":{"name":"Mobile","lat":30.6943566,"lng":-88.04305409999999},"montgomery":{"name":"Montgomery","lat":32.3668052,"lng":-86.2999689},"tuscaloosa":{"name":"Tuscaloosa","lat":33.2098407,"lng":-87.56917349999999}},"TN":{"bartlett":{"name":"Bartlett","lat":35.2045328,"lng":-89.8739753},"chattanooga":{"name":"Chattanooga","lat":35.0456297,"lng":-85.3096801},"clarksville":{"name":"Clarksville","lat":36.5297706,"lng":-87.3594528},"cleveland":{"name":"Cleveland","lat":35.1595182,"lng":-84.8766115},"collierville":{"name":"Collierville","lat":35.042036,"lng":-89.6645266},"franklin":{"name":"Franklin","lat":35.9250637,"lng":-86.8688899},"hendersonville":{"name":"Hendersonville","lat":36.3047735,"lng":-86.6199957},"jackson":{"name":"Jackson","lat":35.6145169,"lng":-88.81394689999999},"johnson city":{"name":"Johnson City","lat":36.3134397,"lng":-82.3534727},"kingsport":{"name":"Kingsport","lat":36.548434,"lng":-82.5618186},"knoxville":{"name":"Knoxville","lat":35.9606384,"lng":-83.9207392},"memphis":{"name":"Memphis","lat":35.1495343,"lng":-90.0489801},"murfreesboro":{"name":"Murfreesboro","lat":35.8456213,"lng":-86.39027},"nashville":{"name":"Nashville","lat":36.1658899,"lng":-86.7844432},"smyrna":{"name":"Smyrna","lat":35.9828412,"lng":-86.5186045}},"NJ":{"bayonne":{"name":"Bayonne","lat":40.6687141,"lng":-74.1143091},"camden":{"name":"Camden","lat":39.9259463,"lng":-75.1196199},"clifton":{"name":"Clifton","lat":40.8584328,"lng":-74.16375529999999},"east orange":{"name":"East Orange","lat":40.767323,"lng":-74.2048677},"elizabeth":{"name":"Elizabeth","lat":40.6639916,"lng":-74.2107006},"hackensack":{"name":"Hackensack","lat":40.8859325,"lng":-74.0434736},"hoboken":{"name":"Hoboken","lat":40.7439905,"lng":-74.0323626},"jersey city":{"name":"Jersey City","lat":40.72815749999999,"lng":-74.0776417},"kearny":{"name":"Kearny","lat":40.7684342,"lng":-74.1454214},"lakewood township":{"name":"Lakewood Township","lat":40.08212899999999,"lng":-74.2097014},"newark":{"name":"Newark","lat":40.735657,"lng":-74.1723667},"new brunswick":{"name":"New Brunswick","lat":40.4862157,"lng":-74.4518188},"passaic":{"name":"Passaic","lat":40.8567662,"lng":-74.1284764},"paterson":{"name":"Paterson","lat":40.9167654,"lng":-74.17181099999999},"perth amboy":{"name":"Perth Amboy","lat":40.5067723,"lng":-74.2654234},"plainfield":{"name":"Plainfield","lat":40.6337136,"lng":-74.4073736},"sayreville":{"name":"Sayreville","lat":40.45940210000001,"lng":-74.360846},"toms river":{"name":"Toms River","lat":39.9537358,"lng":-74.1979458},"trenton":{"name":"Trenton","lat":40.2170534,"lng":-74.7429384},"union city":{"name":"Union City","lat":40.7795455,"lng":-74.02375119999999},"union":{"name":"Union","lat":40.6357419,"lng":-74.9580495},"vineland":{"name":"Vineland","lat":39.4862267,"lng":-75.02573129999999},"west new york":{"name":"West New York","lat":40.7878788,"lng":-74.0143064}},"NE":{"bellevue":{"name":"Bellevue","lat":41.1586111,"lng":-95.93416669999999},"grand island":{"name":"Grand Island","lat":40.9222222,"lng":-98.35805560000001},"lincoln":{"name":"Lincoln","lat":40.806862,"lng":-96.681679},"omaha":{"name":"Omaha","lat":41.2523634,"lng":-95.99798829999999}},"MT":{"billings":{"name":"Billings","lat":45.7832856,"lng":-108.5006904},"great falls":{"name":"Great Falls","lat":47.5002354,"lng":-111.3008083},"missoula":{"name":"Missoula","lat":46.8605189,"lng":-114.019501}},"MS":{"biloxi":{"name":"Biloxi","lat":30.3960318,"lng":-88.88530779999999},"gulfport":{"name":"Gulfport","lat":30.3674198,"lng":-89.0928155},"hattiesburg":{"name":"Hattiesburg","lat":31.3271189,"lng":-89.29033919999999},"jackson":{"name":"Jackson","lat":32.2987573,"lng":-90.1848103},"meridian":{"name":"Meridian","lat":32.3643098,"lng":-88.703656},"southaven":{"name":"Southaven","lat":34.9889818,"lng":-90.0125913}},"ND":{"bismarck":{"name":"Bismarck","lat":46.8083268,"lng":-100.7837392},"fargo":{"name":"Fargo","lat":46.8771863,"lng":-96.7898034},"grand forks":{"name":"Grand Forks","lat":47.9252568,"lng":-97.0328547},"minot":{"name":"Minot","lat":48.2325095,"lng":-101.2962732}},"MO":{"blue springs":{"name":"Blue Springs","lat":39.0169509,"lng":-94.2816148},"chesterfield":{"name":"Chesterfield","lat":38.6631083,"lng":-90.5770675},"columbia":{"name":"Columbia","lat":38.9517053,"lng":-92.3340724},"florissant":{"name":"Florissant","lat":38.789217,"lng":-90.322614},"independence":{"name":"Independence","lat":39.0911161,"lng":-94.41550679999999},"jefferson city":{"name":"Jefferson City","lat":38.57670170000001,"lng":-92.1735164},"joplin":{"name":"Joplin","lat":37.08422710000001,"lng":-94.51328099999999},"kansas city":{"name":"Kansas City","lat":39.0997265,"lng":-94.5785667},"lee's summit":{"name":"Lee's Summit","lat":38.916343,"lng":-94.383516},"o'fallon":{"name":"O'Fallon","lat":38.8106075,"lng":-90.69984769999999},"st charles":{"name":"St Charles","lat":38.7833333,"lng":-90.5166667},"st joseph":{"name":"St Joseph","lat":39.7577778,"lng":-94.83638889999999},"st louis":{"name":"St Louis","lat":38.6270025,"lng":-90.19940419999999},"st peters":{"name":"St Peters","lat":38.778475,"lng":-90.60528099999999},"springfield":{"name":"Springfield","lat":37.2089572,"lng":-93.29229889999999}},"ID":{"boise":{"name":"Boise","lat":43.612631,"lng":-116.211076},"caldwell":{"name":"Caldwell","lat":43.66293839999999,"lng":-116.6873596},"coeur d'alene":{"name":"Coeur d'Alene","lat":47.6776832,"lng":-116.7804664},"idaho falls":{"name":"Idaho Falls","lat":43.49165139999999,"lng":-112.0339645},"meridian":{"name":"Meridian","lat":43.6121087,"lng":-116.3915131},"nampa":{"name":"Nampa","lat":43.5407172,"lng":-116.5634624},"pocatello":{"name":"Pocatello","lat":42.8713032,"lng":-112.4455344},"twin falls":{"name":"Twin Falls","lat":42.5629668,"lng":-114.4608711}},"UT":{"bountiful":{"name":"Bountiful","lat":40.8893895,"lng":-111.880771},"draper":{"name":"Draper","lat":40.5246711,"lng":-111.8638226},"layton":{"name":"Layton","lat":41.0602216,"lng":-111.9710529},"lehi":{"name":"Lehi","lat":40.3916172,"lng":-111.8507662},"logan":{"name":"Logan","lat":41.7354861,"lng":-111.834388},"millcreek":{"name":"Millcreek","lat":40.6868914,"lng":-111.8754907},"murray":{"name":"Murray","lat":40.6668916,"lng":-111.8879909},"ogden":{"name":"Ogden","lat":41.223,"lng":-111.9738304},"orem":{"name":"Orem","lat":40.2968979,"lng":-111.6946475},"provo":{"name":"Provo","lat":40.2338438,"lng":-111.6585337},"riverton":{"name":"Riverton","lat":40.521893,"lng":-111.9391023},"st george":{"name":"St George","lat":37.0952778,"lng":-113.5780556},"salt lake city":{"name":"Salt Lake City","lat":40.7607793,"lng":-111.8910474},"sandy":{"name":"Sandy","lat":40.57250000000001,"lng":-111.8597222},"south jordan":{"name":"South Jordan","lat":40.5621704,"lng":-111.929658},"taylorsville":{"name":"Taylorsville","lat":40.66772479999999,"lng":-111.9388258},"west jordan":{"name":"West Jordan","lat":40.6096698,"lng":-111.9391031},"west valley city":{"name":"West Valley City","lat":40.6916132,"lng":-112.0010501}},"KY":{"bowling green":{"name":"Bowling Green","lat":36.9903199,"lng":-86.4436018},"lexington":{"name":"Lexington","lat":38.0405837,"lng":-84.5037164},"louisville":{"name":"Louisville","lat":38.2526647,"lng":-85.7584557},"owensboro":{"name":"Owensboro","lat":37.7719074,"lng":-87.1111676}},"CT":{"bridgeport":{"name":"Bridgeport","lat":41.1865478,"lng":-73.19517669999999},"bristol":{"name":"Bristol","lat":41.67176480000001,"lng":-72.9492703},"danbury":{"name":"Danbury","lat":41.394817,"lng":-73.4540111},"east hartford":{"name":"East Hartford","lat":41.7634219,"lng":-72.6128339},"hartford":{"name":"Hartford","lat":41.76371109999999,"lng":-72.6850932},"meriden":{"name":"Meriden","lat":41.5381535,"lng":-72.80704349999999},"middletown":{"name":"Middletown","lat":41.5623209,"lng":-72.6506488},"milford":{"name":"Milford","lat":41.2308945,"lng":-73.0635844},"new britain":{"name":"New Britain","lat":41.6612104,"lng":-72.7795419},"new haven":{"name":"New Haven","lat":41.3081527,"lng":-72.9281577},"norwalk":{"name":"Norwalk","lat":41.1175966,"lng":-73.40789680000002},"stamford":{"name":"Stamford","lat":41.0534302,"lng":-73.5387341},"stratford":{"name":"Stratford","lat":41.18454149999999,"lng":-73.1331651},"waterbury":{"name":"Waterbury","lat":41.5581525,"lng":-73.0514965},"west hartford":{"name":"West Hartford","lat":41.7620842,"lng":-72.7420151},"west haven":{"name":"West Haven","lat":41.2706527,"lng":-72.94704709999999}},"OK":{"broken arrow":{"name":"Broken Arrow","lat":36.0525993,"lng":-95.7908195},"edmond":{"name":"Edmond","lat":35.6528323,"lng":-97.47809540000002},"enid":{"name":"Enid","lat":36.3955891,"lng":-97.8783911},"lawton":{"name":"Lawton","lat":34.6086854,"lng":-98.39033049999999},"midwest city":{"name":"Midwest City","lat":35.4495065,"lng":-97.3967019},"moore":{"name":"Moore","lat":35.3395079,"lng":-97.48670279999999},"norman":{"name":"Norman","lat":35.2225668,"lng":-97.4394777},"oklahoma city":{"name":"Oklahoma City","lat":35.5006256,"lng":-97.6114217},"stillwater":{"name":"Stillwater","lat":36.1156071,"lng":-97.0583681},"tulsa":{"name":"Tulsa","lat":36.1539816,"lng":-95.99277500000001}},"VT":{"burlington":{"name":"Burlington","lat":44.4758825,"lng":-73.21207199999999}},"WY":{"casper":{"name":"Casper","lat":42.866632,"lng":-106.313081},"cheyenne":{"name":"Cheyenne","lat":41.1399814,"lng":-104.8202462}},"SC":{"charleston":{"name":"Charleston","lat":32.7765656,"lng":-79.93092159999999},"columbia":{"name":"Columbia","lat":34.0007104,"lng":-81.0348144},"greenville":{"name":"Greenville","lat":34.85261759999999,"lng":-82.3940104},"mt pleasant":{"name":"Mt Pleasant","lat":32.7940651,"lng":-79.8625851},"north charleston":{"name":"North Charleston","lat":32.8546197,"lng":-79.9748103},"rock hill":{"name":"Rock Hill","lat":34.9248667,"lng":-81.02507840000001},"summerville":{"name":"Summerville","lat":33.0185039,"lng":-80.17564809999999}},"WV":{"charleston":{"name":"Charleston","lat":38.3498195,"lng":-81.6326234},"huntington":{"name":"Huntington","lat":38.4192496,"lng":-82.44515400000002}},"NH":{"concord":{"name":"Concord","lat":43.2081366,"lng":-71.5375718},"manchester":{"name":"Manchester","lat":42.9956397,"lng":-71.4547891},"nashua":{"name":"Nashua","lat":42.7653662,"lng":-71.46756599999999}},"AR":{"conway":{"name":"Conway","lat":35.0886963,"lng":-92.4421011},"fayetteville":{"name":"Fayetteville","lat":36.0625795,"lng":-94.1574263},"fort smith":{"name":"Fort Smith","lat":35.3859242,"lng":-94.39854749999999},"jonesboro":{"name":"Jonesboro","lat":35.84229670000001,"lng":-90.704279},"little rock":{"name":"Little Rock","lat":34.7464809,"lng":-92.28959479999999},"north little rock":{"name":"North Little Rock","lat":34.769536,"lng":-92.2670941},"pine bluff":{"name":"Pine Bluff","lat":34.2284312,"lng":-92.00319549999999},"rogers":{"name":"Rogers","lat":36.3320196,"lng":-94.1185366},"springdale":{"name":"Springdale","lat":36.18674420000001,"lng":-94.1288141}},"RI":{"cranston":{"name":"Cranston","lat":41.7798226,"lng":-71.4372796},"east providence":{"name":"East Providence","lat":41.8137116,"lng":-71.3700545},"pawtucket":{"name":"Pawtucket","lat":41.878711,"lng":-71.38255579999999},"providence":{"name":"Providence","lat":41.8239891,"lng":-71.4128343},"warwick":{"name":"Warwick","lat":41.7001009,"lng":-71.4161671},"woonsocket":{"name":"Woonsocket","lat":42.00287609999999,"lng":-71.51478390000001}},"HI":{"honolulu":{"name":"Honolulu","lat":21.3069444,"lng":-157.8583333},"hilo":{"name":"Hilo","lat":19.5429151,"lng":-155.6658568},"pearl city":{"name":"Pearl City","lat":21.3972222,"lng":-157.9733333}},"NV":{"enterprise":{"name":"Enterprise","lat":36.0252503,"lng":-115.2419419},"henderson":{"name":"Henderson","lat":36.0395247,"lng":-114.9817213},"las vegas":{"name":"Las Vegas","lat":36.114646,"lng":-115.172816},"north las vegas":{"name":"North Las Vegas","lat":36.1988592,"lng":-115.1175013},"paradise":{"name":"Paradise","lat":36.0971945,"lng":-115.1466648},"reno":{"name":"Reno","lat":39.5296329,"lng":-119.8138027},"sparks":{"name":"Sparks","lat":39.5349112,"lng":-119.7526886},"spring valley":{"name":"Spring Valley","lat":36.1080258,"lng":-115.2450006},"sunrise manor":{"name":"Sunrise Manor","lat":36.2110819,"lng":-115.0730563},"whitney":{"name":"Whitney","lat":36.0966897,"lng":-115.0407412}},"KS":{"hutchinson":{"name":"Hutchinson","lat":38.0608445,"lng":-97.92977429999999},"kansas city":{"name":"Kansas City","lat":39.114053,"lng":-94.6274636},"lawrence":{"name":"Lawrence","lat":38.9716689,"lng":-95.2352501},"lenexa":{"name":"Lenexa","lat":38.9536174,"lng":-94.73357089999999},"manhattan":{"name":"Manhattan","lat":39.18360819999999,"lng":-96.57166939999999},"olathe":{"name":"Olathe","lat":38.8813958,"lng":-94.81912849999999},"overland park":{"name":"Overland Park","lat":38.9822282,"lng":-94.6707917},"salina":{"name":"Salina","lat":38.8402805,"lng":-97.61142369999999},"shawnee":{"name":"Shawnee","lat":39.02284849999999,"lng":-94.7151865},"topeka":{"name":"Topeka","lat":39.0558235,"lng":-95.68901849999999},"wichita":{"name":"Wichita","lat":37.6922222,"lng":-97.3372222}},"ME":{"portland":{"name":"Portland","lat":43.66147100000001,"lng":-70.2553259}},"SD":{"rapid city":{"name":"Rapid City","lat":44.0805434,"lng":-103.2310149},"sioux falls":{"name":"Sioux Falls","lat":43.5499749,"lng":-96.700327}},"DC":{"washington":{"name":"Washington","lat":38.8951118,"lng":-77.0363658}},"DE":{"wilmington":{"name":"Wilmington","lat":39.7458333,"lng":-75.5466667}}};
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvd29ya2VyLmpzIiwiYm93ZXJfY29tcG9uZW50cy9ELmpzL2xpYi9ELmpzIiwiYm93ZXJfY29tcG9uZW50cy91bmRlcnNjb3JlL3VuZGVyc2NvcmUuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwic3JjL2pzL3VuZGVyc2NvcmVfbWl4aW5zLmpzIiwic3JjL2pzL3VzYV9zdGF0ZV9jaXRpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdGNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVnREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbl8ubWl4aW4ocmVxdWlyZSgnLi91bmRlcnNjb3JlX21peGlucycpKTtcblxudmFyIEQgPSByZXF1aXJlKCdEJyk7XG52YXIgc3RhdGVDaXRpZXMgPSByZXF1aXJlKCcuL3VzYV9zdGF0ZV9jaXRpZXMnKTtcblxuXG5cbnZhciBkYiA9IHtcImNvdW50XCI6IDIwLCBcInJlc3VsdHNcIjogW3tcImluY2lkZW50X2RhdGVcIjogbnVsbCwgXCJjaXR5XCI6IFwiTHVtYmVybGFuZFwiLCBcInNlYXJjaGVkX2RhdGVcIjogXCIyMDA2LTEyLTA5XCIsIFwidmljdGltX2FnZVwiOiA0MiwgXCJzaG90c19maXJlZFwiOiA1LCBcIndlYXBvblwiOiBcImtuaWZlIG9yIGN1dHRpbmcgaW5zdHJ1bWVudFwiLCBcInZpY3RpbV9yYWNlXCI6IFwid2hpdGVcIiwgXCJhZ2VuY3lcIjogXCJMdW1iZXJsYW5kIENvbnN0YWJsZXNcIiwgXCJjb3VudHlcIjogXCJTdWxsaXZhblwiLCBcInNvdXJjZV91cmxcIjogXCJodHRwOi8vd3d3LnJlY29yZG9ubGluZS5jb20vYXBwcy9wYmNzLmRsbC9hcnRpY2xlP0FJRD0lMkYyMDA2MTIxMiUyRk5FV1MlMkY2MTIxMjAzMTRcIiwgXCJ2aWN0aW1fYXJtZWRcIjogXCJhcm1lZFwiLCBcInZpY3RpbV9uYW1lXCI6IFwiTGVzdGVyIERldmVucyBKci5cIiwgXCJzdGF0ZVwiOiBcIk5ZXCIsIFwic2hvb3RpbmdzXCI6IFwieWVzXCIsIFwidmljdGltX2dlbmRlclwiOiBcIm1hbGVcIiwgXCJvdXRjb21lXCI6IFwia2lsbGVkXCIsIFwic3VtbWFyeVwiOiBcIk1vbnRpY2VsbG8gXFx1MjAxNCBUb3duIG9mIEx1bWJlcmxhbmQgY29uc3RhYmxlcyBvcmRlcmVkIExlc3RlciBEZXZlbnMgSnIuIHRvIGRyb3AgaGlzIGtuaWZlIGFuZCBwZXBwZXItc3ByYXllZCBoaW0gdHdpY2UsIHdpdGggbm8gZWZmZWN0LCBiZWZvcmUgZmF0YWxseSBzaG9vdGluZyBoaW0uIERldmVucywgNDIsIHdhcyBzaG90IGZpdmUgdGltZXMgYnkgTHVtYmVybGFuZCBDb25zdGFibGVzIEpvaG4gQ3VvbW8gYW5kIFZpY3RvciBDenViYWsgU2F0dXJkYXkgbmlnaHQgaW5zaWRlIERldmVucycgaG9tZSBvbiBWYW4gVHV5bCBSb2FkXCIsIFwib2ZmaWNlcl9uYW1lc1wiOiBcIkpvaG4gQ3VvbW8sIFZpY3RvciBDenViYWtcIn0sIHtcImluY2lkZW50X2RhdGVcIjogbnVsbCwgXCJjaXR5XCI6IFwiU2FuIEFudG9uaW9cIiwgXCJzZWFyY2hlZF9kYXRlXCI6IFwiMjAxMy0xMi0wNlwiLCBcInZpY3RpbV9hZ2VcIjogMjMsIFwic2hvdHNfZmlyZWRcIjogNSwgXCJ3ZWFwb25cIjogXCJkd2ksIGludG94aWNhdGVkLCBiZWxsaWdlcmVudFwiLCBcInZpY3RpbV9yYWNlXCI6IFwid2hpdGVcIiwgXCJhZ2VuY3lcIjogXCJVSVctUEQgKFVuaXZlcnNpdHkgb2YgSW5jYXJuYXRlIFdvcmQgUEQpXCIsIFwiY291bnR5XCI6IFwiQmV4YXJcIiwgXCJzb3VyY2VfdXJsXCI6IFwiaHR0cDovL3d3dy5teXNhbmFudG9uaW8uY29tL25ld3MvbG9jYWwvYXJ0aWNsZS9VSVctU3R1ZGVudC1zbGFpbi1ieS1jYW1wdXMtb2ZmaWNlci13YXMtNTUyNTIyMy5waHBcIiwgXCJ2aWN0aW1fYXJtZWRcIjogXCJ1bmFybWVkXCIsIFwidmljdGltX25hbWVcIjogXCJSb2JlcnQgQ2FtZXJvbiBSZWR1c1wiLCBcInN0YXRlXCI6IFwiVFhcIiwgXCJzaG9vdGluZ3NcIjogXCJ5ZXNcIiwgXCJ2aWN0aW1fZ2VuZGVyXCI6IFwibWFsZVwiLCBcIm91dGNvbWVcIjogXCJoaXRcIiwgXCJzdW1tYXJ5XCI6IFwiU0FOIEFOVE9OSU8gXFx1MjAxNCBVbml2ZXJzaXR5IG9mIHRoZSBJbmNhcm5hdGUgV29yZCBzdHVkZW50IENhbWVyb24gUmVkdXMsIGEgMjMteWVhci1vbGQsIHdhcyBzaG90IGZpdmUgdGltZXMgXFx1MjAxNCBpbmNsdWRpbmcgb25jZSBpbiB0aGUgYmFjayBcXHUyMDE0IGR1cmluZyBhIGZhdGFsIGFsdGVyY2F0aW9uIHdpdGggYSBjYW1wdXMgcG9saWNlIG9mZmljZXIgbGFzdCB5ZWFyLCBhY2NvcmRpbmcgdG8gYW4gYXV0b3BzeSByZXBvcnQgcmVsZWFzZWQgVGh1cnNkYXkgYnkgdGhlIEJleGFyIENvdW50eSBNZWRpY2FsIEV4YW1pbmVyJ3Mgb2ZmaWNlLiAgQXV0aG9yaXRpZXMgc2FpZCB0aGUgc2hvb3RpbmcgY2FtZSBhZnRlciBhIHNpeC1taW51dGUgc3RydWdnbGUgaW4gdGhlIHBhcmtpbmcgbG90IG9mIHRoZSBUcmVlaG91c2UgQXBhcnRtZW50cyBpbiBBbGFtbyBIZWlnaHRzLCB3aGVyZSBSZWR1cyBsaXZlZC4gIEEgdG94aWNvbG9neSB0ZXN0IGFsc28gc2hvd2VkIFJlZHVzIGhhZCBhIGJsb29kIGFsY29ob2wgY29udGVudCBvZiAuMTU1LCBuZWFybHkgdHdpY2UgdGhlIGxlZ2FsIGxpbWl0IHRvIGRyaXZlLCB3aGVuIGF1dGhvcml0aWVzIHNheSBoZSBmb3VnaHQgVUlXIG9mZmljZXIgQ2hyaXN0b3BoZXIgQ2FydGVyIG9uIERlYy4gNiBpbiB0aGUgcGFya2luZyBsb3Qgb2YgUmVkdXMnIG9mZi1jYW1wdXMgYXBhcnRtZW50IGNvbXBsZXggbmVhciBJbmNhcm5hdGUgV29yZC4gIFRoZSBEZWMuIDcgYXV0b3BzeSBjb25kdWN0ZWQgYnkgRHIuIEVsaXphYmV0aCBQZWFjb2NrIGZvdW5kIHRoYXQgZml2ZSBidWxsZXRzIGhhZCBzdHJ1Y2sgUmVkdXMgaW4gdGhlIGxlZnQgZXllLCB1cHBlciBjaGVzdCwgbGVmdCBlbGJvdywgcmlnaHQgaGlwIGFuZCB1cHBlciBiYWNrLiBUaGUgcmVwb3J0IGRpZG4ndCBzYXkgd2hpY2ggd291bmRzIGNhbWUgZmlyc3QsIGJ1dCBpdCBjb25jbHVkZWQgdGhhdCB0aGUgc2hvdCB0byB0aGUgYmFjayB3YXMgdGhlIFxcdTIwMWNtb3N0IGltbWVkaWF0ZWx5IGxldGhhbC5cXHUyMDFkICBBdCBhIHBhc3QgcHJlc3MgY29uZmVyZW5jZSwgQWxhbW8gSGVpZ2h0cyBQb2xpY2UgQ2hpZWYgUmljaGFyZCBQcnVpdHQgc2FpZCBDYXJ0ZXIgd2FzIGRyaXZpbmcgb24gQnJvYWR3YXkgaW4gYSBtYXJrZWQgVUlXIHBvbGljZSBwaWNrdXAgdHJ1Y2sgd2hlbiBoZSBzcG90dGVkIGFub3RoZXIgdHJ1Y2sgYmVpbmcgZHJpdmVuIGVycmF0aWNhbGx5LiBJdCB3YXMgaW4gdGhlIGVhcmx5IG1vcm5pbmcgaG91cnMgb2YgRGVjLiA2LCBhbmQgQ2FydGVyIHNhdyB0aGUgdHJ1Y2sgc3RyaWtlIGEgY3VyYiBhbmQgc3dlcnZlIGJyaWVmbHkgaW50byB0aGUgb25jb21pbmcgbGFuZXMuICBDYXJ0ZXIgZm9sbG93ZWQgdGhlIHN1c3BlY3RlZCBkcnVua2VuIGRyaXZlci4gSGUgd2FzIG91dHNpZGUgaGlzIGp1cmlzZGljdGlvbiwgYnV0IENhcnRlciB3YXMgYSBsaWNlbnNlZCBwZWFjZSBvZmZpY2VyIGF1dGhvcml6ZWQgdG8gYXJyZXN0IERXSSBzdXNwZWN0cyBhbnl3aGVyZSBpbiBUZXhhcy4gIFRoZSBvZmZpY2VyIGZvbGxvd2VkIFJlZHVzIGFuZCBhY3RpdmF0ZWQgdGhlIGVtZXJnZW5jeSBsaWdodHMgb2YgaGlzIHBvbGljZSB0cnVjayBuZWFyIHRoZSBUcmVlaG91c2UgQXBhcnRtZW50cywgd2hlcmUgUmVkdXMgcGFya2VkIGFuZCBnb3Qgb3V0IG9mIGhpcyB2ZWhpY2xlLiAgVGhlIGRhc2ggY2FtIG9mIENhcnRlcidzIHRydWNrIGRpZG4ndCByZWNvcmQgdmlkZW8gb2YgdGhlIGFsdGVyY2F0aW9uLCBidXQgQ2FydGVyIHdhcyB3ZWFyaW5nIGEgbWljcm9waG9uZSB0aGF0IHJlY29yZGVkIGF1ZGlvLiBQcnVpdHQgc2FpZCB0aGUgcmVjb3JkaW5nIGNhcHR1cmVkIENhcnRlciBhc2tpbmcgUmVkdXMgdG8gc3RvcCBhbmQgcHV0IGhpcyBoYW5kcyBvbiB0aGUgdHJ1Y2suIFJlZHVzIGNvbXBsaWVkLCBidXQgYmVnYW4gdG8gc3RydWdnbGUgd2hlbiBDYXJ0ZXIgc3RhcnRlZCB0byBoYW5kY3VmZiBoaW0sIFBydWl0dCBzYWlkLiAgRHVyaW5nIHRoZSBzaXgtbWludXRlIGNvbmZyb250YXRpb24sIENhcnRlciB0b2xkIFJlZHVzIDE0IHRpbWVzIHRvIHB1dCBoaXMgaGFuZHMgYmVoaW5kIGhpcyBiYWNrIGFuZCB0b2xkIGhpbSB0aHJlZSB0aW1lcyB0aGF0IGhlIHdhcyB1bmRlciBhcnJlc3QsIFBydWl0dCBzYWlkLiBDYXJ0ZXIgdG9sZCBSZWR1cyB0byBzdG9wIHJlc2lzdGluZyA1NiB0aW1lcywgUHJ1aXR0IHNhaWQuICBSZWR1cyBhdCBvbmUgcG9pbnQgZ3JhYmJlZCBDYXJ0ZXIncyBwb2xpY2UgYmF0b24gYW5kIHN0cnVjayB0aGUgb2ZmaWNlciB3aXRoIGl0LCBhdXRob3JpdGllcyBzYWlkLiAgQ2FydGVyIHJlZ2FpbmVkIGNvbnRyb2wgb2YgdGhlIGJhdG9uIGFuZCBSZWR1cyBicm9rZSBmcmVlLiBQcnVpdHQgc2FpZCBDYXJ0ZXIgZHJldyBoaXMgaGFuZGd1biwgb3JkZXJlZCBSZWR1cyB0byBzdG9wLCBhbmQgUmVkdXMgY2hhcmdlZCBoaW0gd2l0aCBoaXMgaGFuZCByYWlzZWQuIENhcnRlciBmaXJlZCBzaXggdGltZXMuICBcXHUyMDIyIGh0dHA6Ly93d3cubXlzYW5hbnRvbmlvLmNvbS9uZXdzL2xvY2FsL2FydGljbGUvVUlXLVN0dWRlbnQtc2xhaW4tYnktY2FtcHVzLW9mZmljZXItd2FzLTU1MjUyMjMucGhwIFxcdTIwMjIgaHR0cDovL3d3dy5teXNhbmFudG9uaW8uY29tL25ld3MvbG9jYWwvYXJ0aWNsZS9BdXRvcHN5LVVJVy1zdHVkZW50LXNob3QtaW4tdGhlLWJhY2stNTMzNTY5My5waHAgXFx1MjAyMiBodHRwOi8vd3d3LmV4cHJlc3NuZXdzLmNvbS9uZXdzL2xvY2FsL2FydGljbGUvV2l0bmVzcy1VSVctc3R1ZGVudC1mb3VnaHQtb2ZmaWNlci1iZWZvcmUtZmF0YWwtNTA3NzE2Mi5waHAjLzBcIiwgXCJvZmZpY2VyX25hbWVzXCI6IFwiQ3BsLiBDaHJpc3RvcGhlciBDYXJ0ZXJcIn0sIHtcImluY2lkZW50X2RhdGVcIjogbnVsbCwgXCJjaXR5XCI6IFwiQ2VudHJhbGlhXCIsIFwic2VhcmNoZWRfZGF0ZVwiOiBcIjIwMTQtMDYtMjlcIiwgXCJ2aWN0aW1fYWdlXCI6IDQzLCBcInNob3RzX2ZpcmVkXCI6IDEsIFwid2VhcG9uXCI6IFwiaGFuZGd1blwiLCBcInZpY3RpbV9yYWNlXCI6IFwidW5rbm93blwiLCBcImFnZW5jeVwiOiBcIkNlbnRyYWxpYSBQb2xpY2UgRGVwYXJ0bWVudFwiLCBcImNvdW50eVwiOiBcIkxld2lzXCIsIFwic291cmNlX3VybFwiOiBcImh0dHA6Ly93d3cuY2hyb25saW5lLmNvbS9hcnRpY2xlX2M4ZmYwYjgyLWZmYmEtMTFlMy05ODQxLTAwMWE0YmNmODg3YS5odG1sXCIsIFwidmljdGltX2FybWVkXCI6IFwiYXJtZWRcIiwgXCJ2aWN0aW1fbmFtZVwiOiBcIlVucmVsZWFzZWRcIiwgXCJzdGF0ZVwiOiBcIldBXCIsIFwic2hvb3RpbmdzXCI6IFwieWVzXCIsIFwidmljdGltX2dlbmRlclwiOiBcIm1hbGVcIiwgXCJvdXRjb21lXCI6IFwia2lsbGVkXCIsIFwic3VtbWFyeVwiOiBcIlRoZSBvZmZpY2VyIHdhcyBjYWxsZWQgdG8gYW4gaW5jaWRlbnQgYXQgYSBjb252ZW5pZW5jZSBzdG9yZSByZWdhcmRpbmcgYSBzdG9sZW4gYnVycml0bywgdGhlIHN1c3BlY3Qgd2hpbGUgYmVpbmcgZGV0YWluZWQgYXR0ZW1wdGVkIHRvIGRyYXcgaGlzIHdlYXBvbiwgdGhlIG9mZmljZXIgZmlyZWQgYXQgbGVhc3Qgb25lIHJvdW5kIGF0IHRoZSBzdXNwZWN0LCB0aGUgc3VzcGVjdCB3YXMgZGVhZCBhdCB0aGUgc2NlbmUuXCIsIFwib2ZmaWNlcl9uYW1lc1wiOiBcIlJ1YmVuIFJhbWlyZXpcIn0sIHtcImluY2lkZW50X2RhdGVcIjogbnVsbCwgXCJjaXR5XCI6IFwiT2FrIFZpZXdcIiwgXCJzZWFyY2hlZF9kYXRlXCI6IFwiMjAxMy0wNy0xMlwiLCBcInZpY3RpbV9hZ2VcIjogNDIsIFwic2hvdHNfZmlyZWRcIjogbnVsbCwgXCJ3ZWFwb25cIjogXCJoYW5kZ3VuXCIsIFwidmljdGltX3JhY2VcIjogXCJ3aGl0ZVwiLCBcImFnZW5jeVwiOiBcIlZlbnR1cmEgQ291bnR5IFNoZXJpZmZcIiwgXCJjb3VudHlcIjogXCJWZW50dXJhXCIsIFwic291cmNlX3VybFwiOiBcImh0dHA6Ly93d3cudmNzdGFyLmNvbS9uZXdzL2F1dGhvcml0aWVzLWlkZW50aWZ5LW1hbi1zaG90LXRvLWRlYXRoLWJ5LWluLW9ha1wiLCBcInZpY3RpbV9hcm1lZFwiOiBcImFybWVkXCIsIFwidmljdGltX25hbWVcIjogXCJEYW5pZWwgQ3VyXFx1MDBhZFRpcyBIb3VmZWtcIiwgXCJzdGF0ZVwiOiBcIkNBXCIsIFwic2hvb3RpbmdzXCI6IFwieWVzXCIsIFwidmljdGltX2dlbmRlclwiOiBcIm1hbGVcIiwgXCJvdXRjb21lXCI6IFwia2lsbGVkXCIsIFwic3VtbWFyeVwiOiBcIkhvdWZlayBwb2ludGVkIGEgaGFuZGd1biBhdCBkZXB1dGllcywgdGhleSBzaG90IGhpbSBhbmQgY2FsbGVkIGVtZXJnZW5jeSBwZXJzb25uZWwsIEhvdWZlayBkaWVkIGF0IHNjZW5lIG9mIGd1bnNob3Qgd291bmRzLiBBcyBhbiBhc2lkZSwgdGhlIEFudGktRGVmYW1hdGlvbiBMZWFndWUgcmVwb3J0ZWQgSG91ZmVrIHRvIGJlIGEgXFxcInByb21pXFx1MDBhZG5lbnQgbG9jYWwgd2hpdGUgc3VwcmVtYVxcdTAwYWRjaXN0XFxcIiBodHRwOi8vYmxvZy5hZGwub3JnL2V4dHJlbWlzbS92ZW50dXJhLWNvdW50eS1kZXB1dGllcy1raWxsLXdoaXRlLXN1cHJlbWFjaXN0LXdoby1wb2ludGVkLWhhbmRndW5cIiwgXCJvZmZpY2VyX25hbWVzXCI6IG51bGx9LCB7XCJpbmNpZGVudF9kYXRlXCI6IG51bGwsIFwiY2l0eVwiOiBcIkZhaXJ2aWV3XCIsIFwic2VhcmNoZWRfZGF0ZVwiOiBcIjIwMTItMDEtMjlcIiwgXCJ2aWN0aW1fYWdlXCI6IDM3LCBcInNob3RzX2ZpcmVkXCI6IDMsIFwid2VhcG9uXCI6IFwia25pZmUgb3IgY3V0dGluZyBpbnN0cnVtZW50XCIsIFwidmljdGltX3JhY2VcIjogXCJ3aGl0ZVwiLCBcImFnZW5jeVwiOiBcIkZhaXJ2aWV3IFBvbGljZSBEZXBhcnRtZW50XCIsIFwiY291bnR5XCI6IFwiTXVsdG5vbWFoXCIsIFwic291cmNlX3VybFwiOiBcImh0dHA6Ly9wb3J0bGFuZHRyaWJ1bmUuY29tL2NvbXBvbmVudC9jb250ZW50L2FydGljbGU/aWQ9MTk0NjNcIiwgXCJ2aWN0aW1fYXJtZWRcIjogXCJhcm1lZFwiLCBcInZpY3RpbV9uYW1lXCI6IFwiTGFycnkgTWF1cmljZSBXZXNsZXkgTWNraW5uZXlcIiwgXCJzdGF0ZVwiOiBcIk9SXCIsIFwic2hvb3RpbmdzXCI6IFwieWVzXCIsIFwidmljdGltX2dlbmRlclwiOiBcIm1hbGVcIiwgXCJvdXRjb21lXCI6IFwia2lsbGVkXCIsIFwic3VtbWFyeVwiOiBcIlBvbGljZSBhbnN3ZXJlZCBhIERWIGNhbGwgYW5kIHNhaWQgdGhleSBzYXcgTWNLaW5uZXkgdy9hIGxhcmdlIGtpdGNoZW4ga25pZmUgcG9pbnRlZCBhdCB0aGUgb2ZmaWNlciB3aG8gYW5zd2VyZWQgdGhlIGRvb3IuIEhpcyBwYXJ0bmVyLCBNaWtlIE1vcnRvbiwgc2hvdCBNY0tpbm5leSAzIHRpbWVzLiBQZXIgTXVsdG5vbWFoIGNvdW50eSBwb2xpY3ksIHRoZSBjYXNlIHdlbnQgYmVmb3JlIGEgZ3JhbmQganVyeS4gTWNLaW5uZXkncyBtb3RoZXIgdGVzdGlmaWVkIHRoYXQgaGUgd2Fzbid0IGdpdmVuIHRpbWUgdG8gZm9sbG93IHRoZWlyIGNvbW1hbmQgdG8gZHJvcCB0aGUga25pZmUuIFRoZSBvZmZpY2VycyB3ZXJlIGNsZWFyZWQgb2Ygd3Jvbmdkb2luZy5cIiwgXCJvZmZpY2VyX25hbWVzXCI6IFwiTWlrZSBNb3J0aW9uXCJ9LCB7XCJpbmNpZGVudF9kYXRlXCI6IG51bGwsIFwiY2l0eVwiOiBcIkZvcnQgV2F5bmVcIiwgXCJzZWFyY2hlZF9kYXRlXCI6IFwiMjAxMy0wNC0yN1wiLCBcInZpY3RpbV9hZ2VcIjogMTksIFwic2hvdHNfZmlyZWRcIjogbnVsbCwgXCJ3ZWFwb25cIjogXCJmaXJlYXJtOyBub3Qgc3RhdGVkXCIsIFwidmljdGltX3JhY2VcIjogXCJibGFjayBvciBhZnJpY2FuIGFtZXJpY2FuXCIsIFwiYWdlbmN5XCI6IFwiRm9ydCBXYXluZSBQb2xpY2UgRGVwYXJ0bWVudFwiLCBcImNvdW50eVwiOiBcIkFsbGVuXCIsIFwic291cmNlX3VybFwiOiBcImh0dHA6Ly9uZXdzLXNlbnRpbmVsLmNvbS9hcHBzL3BiY3MuZGxsL2FydGljbGU/QUlEPS8yMDE0MDgxOC9ORVdTLzE0MDgxOTYzNlwiLCBcInZpY3RpbV9hcm1lZFwiOiBcImFybWVkXCIsIFwidmljdGltX25hbWVcIjogXCJUYXZvbnRhZSBKYW1hciBPciBcXFwiVGpcXFwiIEhhbmV5XCIsIFwic3RhdGVcIjogXCJJTlwiLCBcInNob290aW5nc1wiOiBcInllc1wiLCBcInZpY3RpbV9nZW5kZXJcIjogXCJtYWxlXCIsIFwib3V0Y29tZVwiOiBcImtpbGxlZFwiLCBcInN1bW1hcnlcIjogbnVsbCwgXCJvZmZpY2VyX25hbWVzXCI6IFwiQ2FtZXJvbiBBLiBOb3JyaXMgQW5kIEpvaG4gRC4gRHJ1bW1lclwifSwge1wiaW5jaWRlbnRfZGF0ZVwiOiBudWxsLCBcImNpdHlcIjogXCJSb2Fub2tlXCIsIFwic2VhcmNoZWRfZGF0ZVwiOiBcIjIwMDctMTItMjdcIiwgXCJ2aWN0aW1fYWdlXCI6IG51bGwsIFwic2hvdHNfZmlyZWRcIjogbnVsbCwgXCJ3ZWFwb25cIjogXCJrbmlmZSBvciBjdXR0aW5nIGluc3RydW1lbnRcIiwgXCJ2aWN0aW1fcmFjZVwiOiBcIndoaXRlXCIsIFwiYWdlbmN5XCI6IFwiUm9hbm9rZSBQb2xpY2UgRGVwYXJ0bWVudFwiLCBcImNvdW50eVwiOiBcIlJvYW5va2VcIiwgXCJzb3VyY2VfdXJsXCI6IFwiaHR0cDovL3d3dy53c2xzLmNvbS9zdG9yeS8yMDg3MDQ5OC9wb2xpY2UtbmFtZS1vZmZpY2VyLWludm9sdmVkLWluLWZhdGFsLXNob290aW5nXCIsIFwidmljdGltX2FybWVkXCI6IFwiYXJtZWRcIiwgXCJ2aWN0aW1fbmFtZVwiOiBcIlNoYXJpZiBBbC1NYWxpa1wiLCBcInN0YXRlXCI6IFwiVkFcIiwgXCJzaG9vdGluZ3NcIjogXCJ5ZXNcIiwgXCJ2aWN0aW1fZ2VuZGVyXCI6IFwibWFsZVwiLCBcIm91dGNvbWVcIjogXCJraWxsZWRcIiwgXCJzdW1tYXJ5XCI6IFwiUG9saWNlIHNheSB0aGV5IHdlcmUgcmVzcG9uZGluZyB0byBhIGRvbWVzdGljIGRpc3B1dGUgYW5kIHNob3QgdmljdGltIHdoZW4gaGUgd2FzIGhvbGRpbmcgYSBrbmlmZSB0byBoaXMgZ2lybGZyaWVuZCdzIHRocm9hdC4gSGlzIGdpcmxmcmllbmQgZGVuaWVkIHBvbGljZSBhY2NvdW50cyBhbmQgc2FpZCB2aWN0aW0gbmV2ZXIgaGVsZCBrbmlmZSB0byBoZXIgdGhyb2F0LlwiLCBcIm9mZmljZXJfbmFtZXNcIjogXCJTZ3QuIEpvaG4gQnV6em9cIn0sIHtcImluY2lkZW50X2RhdGVcIjogbnVsbCwgXCJjaXR5XCI6IFwiU2FuIEFudG9uaW9cIiwgXCJzZWFyY2hlZF9kYXRlXCI6IFwiMjAxNC0wMi0yOFwiLCBcInZpY3RpbV9hZ2VcIjogMjMsIFwic2hvdHNfZmlyZWRcIjogMywgXCJ3ZWFwb25cIjogXCJoYW5kZ3VuXCIsIFwidmljdGltX3JhY2VcIjogXCJibGFjayBvciBhZnJpY2FuIGFtZXJpY2FuXCIsIFwiYWdlbmN5XCI6IFwiT2ZmLUR1dHkgU0FQRCAoU2FuIEFudG9uaW8gUG9saWNlIERlcGFydG1lbnQpXCIsIFwiY291bnR5XCI6IFwiQmV4YXJcIiwgXCJzb3VyY2VfdXJsXCI6IFwiaHR0cDovL3d3dy5teXNhbmFudG9uaW8uY29tL25ld3MvbG9jYWwvYXJ0aWNsZS9NYW4tamFpbGVkLWluLWluY2lkZW50LXRoYXQtbGVkLXRvLWZhdGFsLXNob290aW5nLTUyOTA1NTcucGhwXCIsIFwidmljdGltX2FybWVkXCI6IFwiYXJtZWRcIiwgXCJ2aWN0aW1fbmFtZVwiOiBcIk1hcnF1aXNlIEpvbmVzXCIsIFwic3RhdGVcIjogXCJUWFwiLCBcInNob290aW5nc1wiOiBcInllc1wiLCBcInZpY3RpbV9nZW5kZXJcIjogXCJtYWxlXCIsIFwib3V0Y29tZVwiOiBcImtpbGxlZFwiLCBcInN1bW1hcnlcIjogXCJTQU4gQU5UT05JTyBcXHUyMDE0IEEgZHJpdmVyIGluIGEgY3Jhc2ggdGhhdCBsZWQgdG8gYW4gb2ZmaWNlci1pbnZvbHZlZCBzaG9vdGluZyBsYXN0IHdlZWsgYXQgYSBkcml2ZSB0aHJvdWdoIHJlZnVzZWQgdG8gdHVybiBvZmYgaGlzIGNhciB3aGVuIG9yZGVyZWQgdG8gYW5kIHdhcyBhcnJlc3RlZCBvbiBvdXRzdGFuZGluZyBtdW5pY2lwYWwgY291cnQgd2FycmFudHMsIGFjY29yZGluZyB0byBhIHBvbGljZSByZXBvcnQgcmVsZWFzZWQgV2VkbmVzZGF5LiAgRmFiaWFuIEdhcnphLCAyMSwgd2FzIGRyaXZpbmcgYSAxOTk0IENhZGlsbGFjIEVsIERvcmFkbyB0aGF0IHJlYXItZW5kZWQgYSB3aGl0ZSBTVVYgZWFybHkgRnJpZGF5IGluIHRoZSBkcml2ZS10aHJvdWdoIG9mIENoYWNobydzLCBpbiB0aGUgODYwMCBibG9jayBvZiBQZXJyaW4gQmVpdGVsIFJvYWQgb24gdGhlIE5vcnRoZWFzdCBTaWRlLiAgR2FyemEgdHJpZWQgdG8gYmFjayB1cCBhbmQgbGVhdmUgdGhlIHNjZW5lIG9mIHRoZSAxIGEubS4gd3JlY2ssIGFjY29yZGluZyB0byBwb2xpY2UuIFRoZSBTVVYncyBkcml2ZXIsIHdob3NlIGlkZW50aXR5IGlzIHVua25vd24sIFxcdTIwMWNleGNoYW5nZWQgd29yZHNcXHUyMDFkIHdpdGggdGhlIHBlb3BsZSBpbiB0aGUgQ2FkaWxsYWMgYW5kIGxlZnQgdGhlIHNjZW5lLCBhY2NvcmRpbmcgdG8gcG9saWNlLiAgQSB3aXRuZXNzIHRvbGQgT2ZmaWNlciBSb2JlcnQgRW5jaW5hIG9mIHRoZSBTYW4gQW50b25pbyBQb2xpY2UgRGVwYXJ0bWVudCBhYm91dCB0aGUgaW5jaWRlbnQgYW5kIGFkZGVkIC4gRW5jaW5hIHdhcyBpbiBmdWxsIHVuaWZvcm0gd29ya2luZyBhbiBvZmYtZHV0eSBzZWN1cml0eSBqb2IgYXQgdGhlIHJlc3RhdXJhbnQsIG9mIHRoZSBpbmNpZGVudCwgYWRkaW5nIHRoYXQgdGhlIHBlb3BsZSBpbiB0aGUgQ2FkaWxsYWMgc2VlbWVkIGludG94aWNhdGVkLiAgVGhlIHdpdG5lc3Mgc2FpZCB0aGUgb2ZmaWNlciByZXBlYXRlZGx5IGFza2VkIEdhcnphIHRvIHR1cm4gb2ZmIHRoZSBjYXIgYW5kIHN0ZXAgb3V0c2lkZSB0aGUgY2FyLiBHYXJ6YSBhbmQgaGlzIHBhc3NlbmdlciBNYXJxdWlzZSBKb25lcywgMjMsIHdlcmUgbm90IGZvbGxvd2luZyBFbmNpbmEncyBvcmRlcnMgYW5kIEpvbmVzIHNlZW1lZCB0byBiZSByZWFjaGluZyBmb3Igc29tZXRoaW5nIGluIHRoZSBjYXIsIHRoZSB3aXRuZXNzIHRvbGQgcG9saWNlLiAgRW5jaW5hIHdhcyBhYmxlIHRvIHR1cm4gb2ZmIHRoZSBjYXIgaGltc2VsZiwgYW5kIHB1dCB0aGUga2V5cyBvbiB0aGUgcm9vZiB3aGlsZSB0cnlpbmcgdG8gaGFuZGN1ZmYgR2FyemEsIGFjY29yZGluZyB0byBwb2xpY2UuICBBdCB0aGF0IHBvaW50LCBwb2xpY2Ugc2FpZCBKb25lcyBnb3Qgb3V0IG9mIHRoZSBwYXNzZW5nZXIgZG9vciBhbmQgcHVsbGVkIGEgcmV2b2x2ZXIgZnJvbSB0aGUgYXJlYSBvZiBoaXMgd2Fpc3QsIHR1cm5pbmcgdG8gbG9vayBhdCBFbmNpbmEuICBUaGUgd2l0bmVzcyBzYWlkIEVuY2luYSB0aGVuIGZpcmVkIHNob3RzLiAgSm9uZXMgc3RhcnRlZCB0byBydW4gd2VzdHdhcmQgYmVmb3JlIGNvbGxhcHNpbmcsIGFjY29yZGluZyB0byB0aGUgcG9saWNlIHJlcG9ydC4gIEFuIGFycml2aW5nIG9mZmljZXIgZm91bmQgSm9uZXMgbHlpbmcgZmFjZSBkb3duIHRvd2FyZCBQZXJyaW4gQmVpdGVsIHJvYWQgd2l0aCBhIGd1bnNob3Qgd291bmQgb24gdGhlIGxlZnQgc2lkZSBvZiBoaXMgYmFjay4gSGUgd2FzIG5vdCBicmVhdGhpbmcgYW5kIHdhcyBwcm9ub3VuY2VkIGRlYWQgd2l0aGluIG1pbnV0ZXMsIGFjY29yZGluZyB0byBwb2xpY2UuICBcXHUyMDIyIGh0dHA6Ly93d3cubXlzYW5hbnRvbmlvLmNvbS9uZXdzL2xvY2FsL2FydGljbGUvTWFuLWphaWxlZC1pbi1pbmNpZGVudC10aGF0LWxlZC10by1mYXRhbC1zaG9vdGluZy01MjkwNTU3LnBocCBcXHUyMDIyIGh0dHA6Ly93d3cuZXhwcmVzc25ld3MuY29tL25ld3MvbG9jYWwvYXJ0aWNsZS9MYXdzdWl0LUNvcC10YXJnZXRlZC1taW5vcml0aWVzLWluLWluY2lkZW50LTU0MDUzODIucGhwIFxcdTIwMjIgaHR0cDovL3d3dy5rZW5zNS5jb20vc3RvcnkvbmV3cy9sb2NhbC8yMDE0LzA2LzI3LzEwNjY0NDg2LyBcXHUyMDIyIGh0dHA6Ly93d3cua2VuczUuY29tL3N0b3J5L25ld3MvbG9jYWwvMjAxNC8wNi8yNy8xMDY2NDM4NC8gXFx1MjAyMiBodHRwOi8vd3d3LnNhbmFudG9uaW8uZ292L0NvbW1wYS9OZXdzL1RhYklkLzMxNy9BcnRNSUQvMTk3MC9BcnRpY2xlSUQvMTQ0NS9Db3VuY2lsd29tYW4tVGF5bG9yLVJlbGVhc2VzLVN0YXRlbWVudC1vbi1DaGFjaG8lRTIlODAlOTlzLVNob290aW5nLUluY2lkZW50LmFzcHhcIiwgXCJvZmZpY2VyX25hbWVzXCI6IFwiT2ZmaWNlciBSb2JlcnQgRW5jaW5hXCJ9LCB7XCJpbmNpZGVudF9kYXRlXCI6IG51bGwsIFwiY2l0eVwiOiBcIkVsaXphYmV0aFwiLCBcInNlYXJjaGVkX2RhdGVcIjogXCIyMDE0LTA2LTI5XCIsIFwidmljdGltX2FnZVwiOiA0NCwgXCJzaG90c19maXJlZFwiOiAxLCBcIndlYXBvblwiOiBcImtuaWZlIG9yIGN1dHRpbmcgaW5zdHJ1bWVudFwiLCBcInZpY3RpbV9yYWNlXCI6IFwidW5rbm93blwiLCBcImFnZW5jeVwiOiBcIkVsaXphYmV0aCBQb2xpY2UgRGVwYXJ0bWVudFwiLCBcImNvdW50eVwiOiBcIlVuaW9uXCIsIFwic291cmNlX3VybFwiOiBcImh0dHA6Ly93d3cubmouY29tL3VuaW9uL2luZGV4LnNzZi8yMDE0LzA2L2VsaXphYmV0aF9tYW5fc2hvdF9ieV9wb2xpY2Vfd2FzX3RocmVhdGVuaW5nX3dvbWFuX3dpdGhfa25pZmVfYXV0aG9yaXRpZXNfc2F5Lmh0bWxcIiwgXCJ2aWN0aW1fYXJtZWRcIjogXCJhcm1lZFwiLCBcInZpY3RpbV9uYW1lXCI6IFwiSm9obiBPbWFyIERlbHZhbGxlXCIsIFwic3RhdGVcIjogXCJOSlwiLCBcInNob290aW5nc1wiOiBcInllc1wiLCBcInZpY3RpbV9nZW5kZXJcIjogXCJtYWxlXCIsIFwib3V0Y29tZVwiOiBcImtpbGxlZFwiLCBcInN1bW1hcnlcIjogXCJPZmZpY2VycyB3ZXJlIGNhbGxlZCB0byB0aGUgc2NlbmUgb2YgYSBkb21lc3RpYyBkaXNwdXRlIHdoZXJlIHRoZSBzdXNwZWN0IHdhcyBob2xkaW5nIGEgd29tYW4gYXQga25pZmUgcG9pbnQuIEluIHRoZSBhbHRlcmNhdGlvbiB0aGF0IGZvbGxvd2VkIHRoZSBzdXNwZWN0IHdhcyBzaG90IG9uY2UsIGFuZCB3YXMgcHJvbm91bmNlZCBkZWFkIGF0IHRoZSBzY2VuZS5cIiwgXCJvZmZpY2VyX25hbWVzXCI6IG51bGx9LCB7XCJpbmNpZGVudF9kYXRlXCI6IG51bGwsIFwiY2l0eVwiOiBcIkhhcnJpbWFuXCIsIFwic2VhcmNoZWRfZGF0ZVwiOiBcIjIwMTQtMDgtMTlcIiwgXCJ2aWN0aW1fYWdlXCI6IDI4LCBcInNob3RzX2ZpcmVkXCI6IDEwLCBcIndlYXBvblwiOiBcImhhbmRndW5cIiwgXCJ2aWN0aW1fcmFjZVwiOiBcIndoaXRlXCIsIFwiYWdlbmN5XCI6IFwiSGFycmltYW4gUG9saWNlIERlcHRcIiwgXCJjb3VudHlcIjogXCJSb2FuZVwiLCBcInNvdXJjZV91cmxcIjogXCJodHRwOi8vd3d3LndiaXIuY29tL3N0b3J5L25ld3MvbG9jYWwva2luZ3N0b24taGFycmltYW4tcm9hbmUvMjAxNC8wOC8yMC9kYS1vZmZpY2Vycy1qdXN0aWZpZWQtaW4tc2hvb3RpbmctYXJtZWQtYnVyZ2xhcnktc3VzcGVjdC8xNDM1MjMxNy9cIiwgXCJ2aWN0aW1fYXJtZWRcIjogXCJhcm1lZFwiLCBcInZpY3RpbV9uYW1lXCI6IFwiTWlyYW5kYSBHdXlcIiwgXCJzdGF0ZVwiOiBcIlROXCIsIFwic2hvb3RpbmdzXCI6IFwieWVzXCIsIFwidmljdGltX2dlbmRlclwiOiBcImZlbWFsZVwiLCBcIm91dGNvbWVcIjogXCJraWxsZWRcIiwgXCJzdW1tYXJ5XCI6IFwiSGFycmltYW4gaW52ZXN0aWdhdG9yIEx0LiBEYW4gU2NobmVpZGVyIGVudGVyZWQgdGhlIGhvdXNlIGZpcnN0IGFuZCBjb25mcm9udGVkIEd1eSBpbiB0aGUga2l0Y2hlbiBhbmQgaGVyIHJvb21tYXRlLCBNZWxpc3NhIEdyb3ZlLCBpbiB0aGUgZmFtaWx5IHJvb20uIEdyb3ZlIGdvdCBkb3duIG9uIHRoZSBmbG9vciwgYW5kIGJvdGggdGhlIG9mZmljZXIgYW5kIEdyb3ZlIHNhaWQgdGhhdCBHdXkgcG9pbnRlZCB0aGUgZ3VuIGF0IGhlciBvd24gaGVhZCBhbmQgcHVsbGVkIHRoZSB0cmlnZ2VyLiBJdCBjbGlja2VkIGJ1dCBkaWRuJ3QgZ28gb2ZmLCBhbmQgTHQuIFNjaG5laWRlciBvcmRlcmVkIGhlciB0byBkcm9wIHRoZSBndW4uICBBdCB0aGF0IHBvaW50LCB0aGUgcmVsZWFzZSBzYWlkIHRoYXQgUm9hbmUgQ291bnR5IGRlcHV0eSBDaHJpcyBXaGl0ZSBjYW1lIGluIHRoZSBmcm9udCBkb29yLCBhbmQgR3V5IHBvaW50ZWQgdGhlIGd1biBpbiBoaXMgZGlyZWN0aW9uLCBCb3RoIG9mZmljZXJzIHNhaWQgdGhleSBvcmRlcmVkIEd1eSB0byBkcm9wIHRoZSBndW4gc2V2ZXJhbCB0aW1lcywgYnV0IHNoZSBpbnN0ZWFkIGJlZ2FuIHRvIHdhbGsgdG93YXJkcyBEZXB1dHkgV2hpdGUgd2l0aCB0aGUgZ3VuIHJhaXNlZC4gVGhhdCdzIHdoZW4gYm90aCBvZmZpY2VycyBmaXJlZCB0aGVpciBndW5zIGF0IEd1eSB1bnRpbCBzaGUgZHJvcHBlZCB0byB0aGUgZmxvb3IgYW5kIHJlbGVhc2VkIHRoZSBndW4uXCIsIFwib2ZmaWNlcl9uYW1lc1wiOiBcIkx0LiBEYW4gU2NobmVpZGVyLCBDaHJpcyBXaGl0ZSBcIn0sIHtcImluY2lkZW50X2RhdGVcIjogbnVsbCwgXCJjaXR5XCI6IFwiQ2VudHJhbGlhXCIsIFwic2VhcmNoZWRfZGF0ZVwiOiBcIjIwMTQtMDItMTNcIiwgXCJ2aWN0aW1fYWdlXCI6IDQ4LCBcInNob3RzX2ZpcmVkXCI6IDEsIFwid2VhcG9uXCI6IFwia25pZmUgb3IgY3V0dGluZyBpbnN0cnVtZW50XCIsIFwidmljdGltX3JhY2VcIjogXCJ1bmtub3duXCIsIFwiYWdlbmN5XCI6IFwiQ2VudHJhbGlhIFBvbGljZSBEZXBhcnRtZW50XCIsIFwiY291bnR5XCI6IFwiTGV3aXNcIiwgXCJzb3VyY2VfdXJsXCI6IFwiaHR0cDovL3d3dy5jaHJvbmxpbmUuY29tL2FydGljbGVfYjU0YWVjZDAtOTRiOS0xMWUzLThiMzQtMDAxYTRiY2Y4ODdhLmh0bWxcIiwgXCJ2aWN0aW1fYXJtZWRcIjogXCJhcm1lZFwiLCBcInZpY3RpbV9uYW1lXCI6IFwiVW5yZWxlYXNlZFwiLCBcInN0YXRlXCI6IFwiV0FcIiwgXCJzaG9vdGluZ3NcIjogXCJ5ZXNcIiwgXCJ2aWN0aW1fZ2VuZGVyXCI6IFwibWFsZVwiLCBcIm91dGNvbWVcIjogXCJraWxsZWRcIiwgXCJzdW1tYXJ5XCI6IFwiUG9saWNlIHdlcmUgY2FsbGVkIGR1ZSB0byBhIHJlcG9ydCBvZiBhIG1hbiBoYW5naW5nIGFyb3VuZCBvdXRzaWRlIG9mIGEgY2xvc2VkIGJ1c2luZXNzLiBPbmUgb2ZmaWNlciBhcHByb2FjaGVkIHRoZSBzdXNwZWN0IGF0IHdoaWNoIHRpbWUgaGUgZGlzcGxheWVkIGEga25pZmUsIHdoZW4gb3JkZXJlZCB0byBkcm9wIHRoZSBrbmlmZSwgaGUgcmFuIGFuZCBhIHNlY29uZCBwb2xpY2Ugb2ZmaWNlIGZpcmVkIGhpcyB3ZWFwb24sIGRpc2NoYXJnaW5nIGF0IGxlYXN0IG9uZSByb3VuZCBhbmQga2lsbGluZyB0aGUgc3VzcGVjdC5cIiwgXCJvZmZpY2VyX25hbWVzXCI6IFwiUGhpbCBXZWlzbWlsbGVyXCJ9LCB7XCJpbmNpZGVudF9kYXRlXCI6IG51bGwsIFwiY2l0eVwiOiBcIlNhbnRhIE1hcmlhXCIsIFwic2VhcmNoZWRfZGF0ZVwiOiBcIjIwMTItMDgtMDJcIiwgXCJ2aWN0aW1fYWdlXCI6IDM3LCBcInNob3RzX2ZpcmVkXCI6IDE0LCBcIndlYXBvblwiOiBcInRveS9mYWtlL25vbi1sZXRoYWwgZ3VuXCIsIFwidmljdGltX3JhY2VcIjogXCJoaXNwYW5pYyBvciBsYXRpbm9cIiwgXCJhZ2VuY3lcIjogXCJTYW50YSBNYXJpYSBQb2xpY2UgRGVwYXJ0bWVudFwiLCBcImNvdW50eVwiOiBcIlNhbnRhIEJhcmJhcmFcIiwgXCJzb3VyY2VfdXJsXCI6IFwiaHR0cDovL3d3dy5sb21wb2NyZWNvcmQuY29tL25ld3MvbG9jYWwvY3JpbWUtYW5kLWNvdXJ0cy9mYXRhbC1wb2xpY2Utc2hvb3RpbmctZGVlbWVkLWp1c3RpZmllZC9hcnRpY2xlX2ZhZjJlZGEyLTIxYmMtMTFlMy1hNzNjLTAwMTliYjI5NjNmNC5odG1sXCIsIFwidmljdGltX2FybWVkXCI6IFwiYXJtZWRcIiwgXCJ2aWN0aW1fbmFtZVwiOiBcIlJvYmVydCBQYWRpbGxhIFJleWVzXCIsIFwic3RhdGVcIjogXCJDQVwiLCBcInNob290aW5nc1wiOiBcInllc1wiLCBcInZpY3RpbV9nZW5kZXJcIjogXCJtYWxlXCIsIFwib3V0Y29tZVwiOiBcImtpbGxlZFwiLCBcInN1bW1hcnlcIjogXCJSZXllcyBsZWQgdGhlIHBvbGljZSBpbiBhIGNhciBjaGFzZSB3aGljaCBlbmRlZCBhZnRlciBoaXMgY2FyIHdhcyBkaXNhYmxlZCB3aXRoIGEgc3Bpa2Ugc3RyaXAgb24gSGlnaHdheSAxLiBIZSBicmFuZGlzaGVkIGEgcmVhbGlzdGljIGxvb2tpbmcgZmFrZSBzZW1pLWF1dG9tYXRpYyB3ZWFwb24gYW5kIGFsbCB0aHJlZSBvZmZpY2VycyBmaXJlZCBzaG90cy4gMTggc2hvdHMgd2VyZSBmaXJlZCwgNSBoaXQgUmV5ZXMuIEhlIGhhZCBtZXRoYW1waGV0YW1pbmVzIGluIGhpcyBzeXN0ZW0gYXMgd2VsbCBhcyBhbGNvaG9sLCBhbmQgYWxyZWFkeSBoYWQgXFxcIjIgc3RyaWtlc1xcXCIgaW4gdGhlIENhbGlmb3JuaWEgc3lzdGVtLiBUaGVyZSBpcyBzb21lIHNwZWN1bGF0aW9uIHRoYXQgaGUgbWlnaHQgaGF2ZSBiZWVuIGNvbnNpZGVyaW5nIHN1aWNpZGUgYnkgY29wLiBUaGUga2lsbGluZyB3YXMgbGF0ZXIgZGVlbWVkIGp1c3RpZmllZCBieSB0aGUgbG9jYWwgREEuXCIsIFwib2ZmaWNlcl9uYW1lc1wiOiBudWxsfSwge1wiaW5jaWRlbnRfZGF0ZVwiOiBudWxsLCBcImNpdHlcIjogXCJGb3J0IFdheW5lXCIsIFwic2VhcmNoZWRfZGF0ZVwiOiBcIjIwMTMtMDItMjBcIiwgXCJ2aWN0aW1fYWdlXCI6IDIxLCBcInNob3RzX2ZpcmVkXCI6IG51bGwsIFwid2VhcG9uXCI6IFwiZmlyZWFybTsgbm90IHN0YXRlZFwiLCBcInZpY3RpbV9yYWNlXCI6IFwiYmxhY2sgb3IgYWZyaWNhbiBhbWVyaWNhblwiLCBcImFnZW5jeVwiOiBcIkZvcnQgV2F5bmUgUG9saWNlIERlcGFydG1lbnRcIiwgXCJjb3VudHlcIjogXCJBbGxlblwiLCBcInNvdXJjZV91cmxcIjogXCJodHRwOi8vdXNndW52aW9sZW5jZS53b3JkcHJlc3MuY29tLzIwMTMvMDIvMjAva2lsbGVkLXN0ZXBoZW4tb25lYWwtd2F0dGxleS1paS1mb3J0LXdheW5lLWluL1wiLCBcInZpY3RpbV9hcm1lZFwiOiBcImFybWVkXCIsIFwidmljdGltX25hbWVcIjogXCJTdGVwaGVuIE9cXHUyMDE5TmVhbCBXYXR0bGV5IElpXCIsIFwic3RhdGVcIjogXCJJTlwiLCBcInNob290aW5nc1wiOiBcInllc1wiLCBcInZpY3RpbV9nZW5kZXJcIjogXCJtYWxlXCIsIFwib3V0Y29tZVwiOiBcImtpbGxlZFwiLCBcInN1bW1hcnlcIjogXCJBdCAyOjI3IGEubS4gV2VkbmVzZGF5LCBvZmZpY2VycyB3ZXJlIGNhbGxlZCB0byBhbiBhcm1lZCByb2JiZXJ5IGF0IENWUyBQaGFybWFjeSwgMjgwMiBFLiBTdGF0ZSBCbHZkLiwgYXQgQmVhY29uIFN0cmVldC4gIE9mZmljZXJzIGNoYXNlZCBXYXR0bGV5IHRvd2FyZCBCYWxkd2luIENyZWVrIEFwYXJ0bWVudHMgaW4gdGhlIDE5MDAgYmxvY2sgb2YgSG9ic29uIFJvYWQuIEFzIHR3byBvZmZpY2VycyBhcHByb2FjaGVkIEJ1aWxkaW5nIEYsIHRoZXkgZm91bmQgV2F0dGxleSBzdGFuZGluZyBpbiB0aGUgc3RhaXJ3ZWxsIGFyZWEgb24gdGhlIHNlY29uZCBmbG9vciwgWW9yayBzYWlkLiAgV2F0dGxleSBzZWVtZWQgdW5mYW1pbGlhciB3aXRoIHRoZSBhcGFydG1lbnQgY29tcGxleCwgWW9yayBzYWlkLCBhbmQgZGlkblxcdTIwMTl0IHJlYWxpemUgdGhhdCB0aGUgdG9wIG9mIHRoZSBzdGFpcndheSB3YXMgYmxvY2tlZCwgdHJhcHBpbmcgaGltIGF0IHRoZSB0b3Agb2YgdGhlIHN0YWlycy4gIFxcdTIwMWNIZSByYW4gdXAgdGhlIHN0YWlyd2F5IGFuZCBkaXNjb3ZlcmVkIGl0IHdhcyBib2FyZGVkIG9mZixcXHUyMDFkIFlvcmsgc2FpZC4gXFx1MjAxY1RoZSBvZmZpY2VycyB3ZXJlIGF0IHRoZSBib3R0b20gb2YgdGhlIHN0YWlyc1xcdTIwMjYgdGhlbiBXYXR0bGV5IHR1cm5lZCBhcm91bmQgYW5kIHBvaW50ZWQgdGhlIHdlYXBvbiBhdCB0aGUgb2ZmaWNlcnMuXFx1MjAxZCAgT25lIG9mIHRoZSB0d28gb2ZmaWNlcnMgZmlyZWQgaGlzIHdlYXBvbiBhdCBXYXR0bGV5LCBzdHJpa2luZyBoaW0gbXVsdGlwbGUgdGltZXMsIFlvcmsgc2FpZC5cIiwgXCJvZmZpY2VyX25hbWVzXCI6IG51bGx9LCB7XCJpbmNpZGVudF9kYXRlXCI6IG51bGwsIFwiY2l0eVwiOiBcIk9rbGFob21hIENpdHlcIiwgXCJzZWFyY2hlZF9kYXRlXCI6IFwiMjAxMy0wNy0xMVwiLCBcInZpY3RpbV9hZ2VcIjogMjQsIFwic2hvdHNfZmlyZWRcIjogbnVsbCwgXCJ3ZWFwb25cIjogXCJoYW5kZ3VuXCIsIFwidmljdGltX3JhY2VcIjogXCJibGFjayBvciBhZnJpY2FuIGFtZXJpY2FuXCIsIFwiYWdlbmN5XCI6IFwiT2tsYWhvbWEgQ2l0eSBwb2xpY2VcIiwgXCJjb3VudHlcIjogbnVsbCwgXCJzb3VyY2VfdXJsXCI6IFwiaHR0cDovL3d3dy5uZXdzOS5jb20vc3RvcnkvMjI4Mjk4MTQvbmV3LWRldGFpbHMtaW4tZGVhZGx5LW9mZmljZXItaW52b2x2ZWQtc2hvb3RpbmctaW4tZG93bnRvd24tb2tjXCIsIFwidmljdGltX2FybWVkXCI6IFwiYXJtZWRcIiwgXCJ2aWN0aW1fbmFtZVwiOiBcIkJyaWFuIFNpbW1zIEpyLlwiLCBcInN0YXRlXCI6IFwiT0tcIiwgXCJzaG9vdGluZ3NcIjogXCJ5ZXNcIiwgXCJ2aWN0aW1fZ2VuZGVyXCI6IFwibWFsZVwiLCBcIm91dGNvbWVcIjogXCJraWxsZWRcIiwgXCJzdW1tYXJ5XCI6IFwiVW5pZm9ybWVkLCBvZmYtZHV0eSBvZmZpY2VycyB3b3JraW5nIHNlY3VyaXR5IG91dHNpZGUgYSBjb25jZXJ0IHZlbnVlLCBmb3VuZCBTaW1tcyBhc2xlZXAgb3IgcGFzc2VkIG91dCBpbiBhIGNhciwgd2l0aCBhIGd1biBpbiBoaXMgd2Fpc3RiYW5kLiBUaGV5IG9yZGVyZWQgaGltIHRvIHB1dCB0aGUgZ3VuIGF3YXksIGhlIGRpZCBub3QsIGhlIHdhcyBzaG90IGFuZCBraWxsZWQuXCIsIFwib2ZmaWNlcl9uYW1lc1wiOiBcIlNndC4gUGF1bCBHYWx5b25cIn0sIHtcImluY2lkZW50X2RhdGVcIjogbnVsbCwgXCJjaXR5XCI6IFwiT3JsYW5kb1wiLCBcInNlYXJjaGVkX2RhdGVcIjogXCIyMDE0LTA4LTIwXCIsIFwidmljdGltX2FnZVwiOiAyMiwgXCJzaG90c19maXJlZFwiOiA5LCBcIndlYXBvblwiOiBcInVuYXJtZWRcIiwgXCJ2aWN0aW1fcmFjZVwiOiBcInVua25vd25cIiwgXCJhZ2VuY3lcIjogXCJvcmxhbmRvIHBvbGljZSBkZXBhcnRtZW50XCIsIFwiY291bnR5XCI6IFwiT3JhbmdlXCIsIFwic291cmNlX3VybFwiOiBcImh0dHA6Ly90aGVzZW50Lm5sLzFBeWFwN2wgXCIsIFwidmljdGltX2FybWVkXCI6IFwidW5hcm1lZFwiLCBcInZpY3RpbV9uYW1lXCI6IFwiTWFyaWEgRmVybmFuZGEgR29kaW5lelwiLCBcInN0YXRlXCI6IFwiRkxcIiwgXCJzaG9vdGluZ3NcIjogXCJ5ZXNcIiwgXCJ2aWN0aW1fZ2VuZGVyXCI6IFwiZmVtYWxlXCIsIFwib3V0Y29tZVwiOiBcImtpbGxlZFwiLCBcInN1bW1hcnlcIjogXCJLaWxsZWQgYnkgb2ZmaWNlciBzdHJheSBidWxsZXQuIEEgc3VzcGVjdCBjYXJyeWluZyBhIHVubG9hZGVkIGd1biBnb3QgaW50byBhIGJhciBhbHRlcmNhdGlvbi4gUG9saWNlIGNvbmZyb250ZWQgaGltIG91dHNpZGUgYW5kIGZpcmVzIHdlcmUgc2hvdC5cIiwgXCJvZmZpY2VyX25hbWVzXCI6IFwiRWR1YXJkbyBTYW5ndWlub1wifSwge1wiaW5jaWRlbnRfZGF0ZVwiOiBudWxsLCBcImNpdHlcIjogXCJEYWxsYXNcIiwgXCJzZWFyY2hlZF9kYXRlXCI6IFwiMjAxNC0wOC0xMFwiLCBcInZpY3RpbV9hZ2VcIjogMjYsIFwic2hvdHNfZmlyZWRcIjogNSwgXCJ3ZWFwb25cIjogXCJ1bmFybWVkXCIsIFwidmljdGltX3JhY2VcIjogXCJ3aGl0ZVwiLCBcImFnZW5jeVwiOiBcIkRhbGxhcyBQb2xpY2UgRGVwdFwiLCBcImNvdW50eVwiOiBudWxsLCBcInNvdXJjZV91cmxcIjogXCJodHRwOi8vd3d3Lm5iY2Rmdy5jb20vbmV3cy9sb2NhbC9NYW4tRGllcy1Jbi1EYWxsYXMtT2ZmaWNlci1JbnZvbHZlZC1TaG9vdGluZy0yNzA3MDU1MTEuaHRtbFwiLCBcInZpY3RpbV9hcm1lZFwiOiBcInVuYXJtZWRcIiwgXCJ2aWN0aW1fbmFtZVwiOiBcIkFuZHJldyBTY290dCBHYXluaWVyXCIsIFwic3RhdGVcIjogXCJUWFwiLCBcInNob290aW5nc1wiOiBcInllc1wiLCBcInZpY3RpbV9nZW5kZXJcIjogXCJtYWxlXCIsIFwib3V0Y29tZVwiOiBcImtpbGxlZFwiLCBcInN1bW1hcnlcIjogXCJcXFwiV2UgaGF2ZSBhIHJlYWxseSBiYWQgcHJvYmxlbSBpbiBEYWxsYXMsXFxcIiBGbGFuYWdhbiBzYWlkLiBJbiByZXNwb25zZSB0byBjb21wbGFpbnRzIGFuZCBsYXdzdWl0cywgRGFsbGFzIFBvbGljZSBDaGllZiBEYXZpZCBCcm93biByZXZpc2VkIHBvbGljeSBhbmQgdHJhaW5pbmcgc3RhbmRhcmRzIGZvciB1c2Ugb2YgZm9yY2UgaW4gSmFudWFyeVwiLCBcIm9mZmljZXJfbmFtZXNcIjogXCJBbnRvbmlvIEh1ZHNvblwifSwge1wiaW5jaWRlbnRfZGF0ZVwiOiBudWxsLCBcImNpdHlcIjogXCJDZWRhciBGYWxsc1wiLCBcInNlYXJjaGVkX2RhdGVcIjogXCIyMDEzLTEyLTI1XCIsIFwidmljdGltX2FnZVwiOiAyNywgXCJzaG90c19maXJlZFwiOiAyLCBcIndlYXBvblwiOiBcImhhbmRndW5cIiwgXCJ2aWN0aW1fcmFjZVwiOiBcIndoaXRlXCIsIFwiYWdlbmN5XCI6IFwiQ2VkYXIgRmFsbHMgUG9saWNlIERlcGFydG1lbnRcIiwgXCJjb3VudHlcIjogXCJCbGFjayBIYXdrXCIsIFwic291cmNlX3VybFwiOiBcImh0dHA6Ly93d3cud3JleC5jb20vc3RvcnkvMjQzMDA0NTMvMjAxMy8xMi8yNS9vZmZpY2VyLWludm9sdmVkLXNob290aW5nLWluLWNlZGFyLWZhbGxzLXNlbmRzLXR3by10by1ob3NwaXRhbFwiLCBcInZpY3RpbV9hcm1lZFwiOiBcInVuYXJtZWRcIiwgXCJ2aWN0aW1fbmFtZVwiOiBcIlphY2ggQ2h1cmNoXCIsIFwic3RhdGVcIjogXCJJQVwiLCBcInNob290aW5nc1wiOiBcInllc1wiLCBcInZpY3RpbV9nZW5kZXJcIjogXCJtYWxlXCIsIFwib3V0Y29tZVwiOiBcImhpdFwiLCBcInN1bW1hcnlcIjogXCJUaGUgc2hvb3RpbmcgaGFwcGVuZWQgbmVhciBTZWNvbmQgU3RyZWV0IGFuZCBIdWRzb24gUm9hZCBpbiBDZWRhciBGYWxscyBhcm91bmQgMyBhLm0uIFdlZG5lc2RheS4gUG9saWNlIENoaWVmIEplZmYgT2xzb24gc2F5cyAyNy15ZWFyLW9sZCBaYWNoYXJ5IENodXJjaCB3YXMgc2xlZXBpbmcgaW4gYSBwYXJrZWQgY2FyIG5lYXIgdGhlIGludGVyc2VjdGlvbiwgYW5kIHRoZSBjYXIgd2FzIHN0aWxsIHJ1bm5pbmcuICBQb2xpY2Ugc2F5IGFuIGFsdGVyY2F0aW9uIGhhcHBlbmVkIGFmdGVyIHRoZSBpbnZlc3RpZ2F0aW5nIG9mZmljZXIgZ290IENodXJjaCBvdXQgb2YgdGhlIGNhciwgYW5kIGRpc2NvdmVyZWQgbWFyaWp1YW5hLiAgQWNjb3JkaW5nIHRvIENoaWVmIE9sc29uLCBPZmZpY2VyIEJvYiBBbmRlcnNvbiB3YXMgcHV0dGluZyBDaHVyY2ggaW4gaGlzIHBhdHJvbCBjYXIgd2hlbiBDaHVyY2ggZm91Z2h0IGJhY2ssIGhpdHRpbmcgQW5kZXJzb24gb3ZlciB0aGUgaGVhZC4gIE9sc29uIHNheXMgZHVyaW5nIHRoZSBhbHRlcmNhdGlvbiwgYm90aCBBbmRlcnNvbiBhbmQgQ2h1cmNoIHdlcmUgYXQgb25lIHBvaW50IG9uIHRoZSBncm91bmQuICBBbmRlcnNvbiBmaXJlZCBoaXMgd2VhcG9uIHR3aWNlLCBoaXR0aW5nIENodXJjaC4gIE9sc29uIHNheXMgb3RoZXIgb2ZmaWNlcnMgd2VyZSBhcnJpdmluZyB0byB0aGUgc2NlbmUgYXQgdGhlIHRpbWUgdGhlIHNob3RzIHdlcmUgZmlyZWQuICBCb3RoIHdlcmUgdGFrZW4gdG8gdGhlIGhvc3BpdGFsLiBQb2xpY2Ugc2FpZCBBbmRlcnNvbiB3YXMgcmVsZWFzZWQgYWZ0ZXIgdHJlYXRtZW50IG9mIGZhY2lhbCBhbmQgaGVhZCBpbmp1cmllcywgd2hpbGUgQ2h1cmNoIHJlbWFpbnMgaW4gdGhlIGhvc3BpdGFsIGluIHN0YWJsZSBjb25kaXRpb24uICBDaGFyZ2VzIGFnYWluc3QgQ2h1cmNoIGFyZSBwZW5kaW5nIGhpcyByZWxlYXNlIGZyb20gbWVkaWNhbCB0cmVhdG1lbnQuICBPZmZpY2VyIEFuZGVyc29uIHdhcyB3ZWFyaW5nIGEgYm9keSBjYW1lcmEgd2hlbiB0aGUgaW5jaWRlbnQgaGFwcGVuZWQsIGJ1dCBoZSBmYWlsZWQgdG8gaGF2ZSBpdCBvbiBkdXJpbmcgdGhpcyBpbmNpZGVudC5cIiwgXCJvZmZpY2VyX25hbWVzXCI6IFwiQm9iIEFuZGVyc29uXCJ9LCB7XCJpbmNpZGVudF9kYXRlXCI6IG51bGwsIFwiY2l0eVwiOiBcIlJlbm9cIiwgXCJzZWFyY2hlZF9kYXRlXCI6IFwiMjAxMy0wNy0xMVwiLCBcInZpY3RpbV9hZ2VcIjogMjcsIFwic2hvdHNfZmlyZWRcIjogMjIsIFwid2VhcG9uXCI6IFwic2hvdGd1blwiLCBcInZpY3RpbV9yYWNlXCI6IFwiYmxhY2sgb3IgYWZyaWNhbiBhbWVyaWNhblwiLCBcImFnZW5jeVwiOiBcIlJlbm8gYW5kIFNwYXJrcyBwb2xpY2VcIiwgXCJjb3VudHlcIjogXCJXYXNob2VcIiwgXCJzb3VyY2VfdXJsXCI6IFwiaHR0cDovL3d3dy5teW5ld3M0LmNvbS9tb3N0cG9wdWxhci9zdG9yeS9ELUEtZmluZHMtb2ZmaWNlci1pbnZvbHZlZC1zaG9vdGluZy1qdXN0aWZpZWQva2kxM2xHTjZFRUdVWGMwOHVPQzZBdy5jc3B4XCIsIFwidmljdGltX2FybWVkXCI6IFwiYXJtZWRcIiwgXCJ2aWN0aW1fbmFtZVwiOiBcIktlbm5ldGggSmV3ZWwgU3RhZmZvcmRcIiwgXCJzdGF0ZVwiOiBcIk5WXCIsIFwic2hvb3RpbmdzXCI6IFwieWVzXCIsIFwidmljdGltX2dlbmRlclwiOiBcIm1hbGVcIiwgXCJvdXRjb21lXCI6IFwia2lsbGVkXCIsIFwic3VtbWFyeVwiOiBcIlN0YWZmb3JkLCByZXBvcnRlZGx5IHN1aWNpZGFsIGFuZCBzdWZmZXJpbmcgUFRTRCwgd2luZHMgdXAgaW4gc29tZW9uZSdzIGJhY2t5YXJkIHdpdGggYSBzaG90Z3VuLiA1IG9mZmljZXJzIHNob290IDIyIHJvdW5kcywgaGl0dGluZyBoaW0gMTQgdGltZXMuXCIsIFwib2ZmaWNlcl9uYW1lc1wiOiBudWxsfSwge1wiaW5jaWRlbnRfZGF0ZVwiOiBudWxsLCBcImNpdHlcIjogXCJTYWdpbmF3XCIsIFwic2VhcmNoZWRfZGF0ZVwiOiBcIjIwMTItMDctMDFcIiwgXCJ2aWN0aW1fYWdlXCI6IDQ5LCBcInNob3RzX2ZpcmVkXCI6IDQ2LCBcIndlYXBvblwiOiBcImtuaWZlIG9yIGN1dHRpbmcgaW5zdHJ1bWVudFwiLCBcInZpY3RpbV9yYWNlXCI6IFwiYmxhY2sgb3IgYWZyaWNhbiBhbWVyaWNhblwiLCBcImFnZW5jeVwiOiBcIlNhZ2luYXcgUG9saWNlXCIsIFwiY291bnR5XCI6IFwiU2FnaW5hd1wiLCBcInNvdXJjZV91cmxcIjogXCJodHRwOi8vd3d3LmNubi5jb20vMjAxMi8wOS8yMS9qdXN0aWNlL21pY2hpZ2FuLXBvbGljZS1zaG9vdGluZy9cIiwgXCJ2aWN0aW1fYXJtZWRcIjogXCJhcm1lZFwiLCBcInZpY3RpbV9uYW1lXCI6IFwiTWlsdG9uIEhhbGxcIiwgXCJzdGF0ZVwiOiBcIk1JXCIsIFwic2hvb3RpbmdzXCI6IFwieWVzXCIsIFwidmljdGltX2dlbmRlclwiOiBcIm1hbGVcIiwgXCJvdXRjb21lXCI6IFwia2lsbGVkXCIsIFwic3VtbWFyeVwiOiBcIlxcXCJIYWxsIHdhcyBhcm1lZCB3aXRoIGEgMy1pbmNoIG1ldGFsIGZvbGRpbmcga25pZmUuXFxcIiAoc3JjOiBodHRwOi8vd3d3Lm1saXZlLmNvbS9uZXdzL3NhZ2luYXcvaW5kZXguc3NmLzIwMTIvMDcvc2FnaW5hd19zZWVzX3RoaXJkX3BvbGljZS1pbnZvLmh0bWwgKSBcXFwiVGhlIGVpZ2h0IG9mZmljZXJzLCBhcyB3ZWxsIGFzIGEgcG9saWNlIGRvZywgaGFkIGZvcm1lZCBhIHNlbWktY2lyY2xlIGFyb3VuZCBIYWxsLlxcXCIgU2l4IG9mIHRoZSBlaWdodCBvZmZpY2VycyBmaXJlZCBhdCBIYWxsLiBIYWxsIHdhcyBzdHJ1Y2sgMTEgdGltZXMuIFxcXCJIYWxsJ3MgZmFtaWx5IHNhaWQgdGhhdCBoZSBoYWQgYSBoaXN0b3J5IG9mIG1lbnRhbCBpbGxuZXNzLlxcXCIgSGUgd2FzIGFsc28gaG9tZWxlc3MuIEhhbGwncyByYWNlIHRha2VuIGZyb20gdGhpcyBzaXRlOiBodHRwOi8vd3d3Lm1saXZlLmNvbS9uZXdzL3NhZ2luYXcvaW5kZXguc3NmLzIwMTIvMDcvcmVwb3J0c19hbGJ1cXVlcnF1ZV9wb2xpY2VfYWN0Lmh0bWxcIiwgXCJvZmZpY2VyX25hbWVzXCI6IG51bGx9LCB7XCJpbmNpZGVudF9kYXRlXCI6IG51bGwsIFwiY2l0eVwiOiBudWxsLCBcInNlYXJjaGVkX2RhdGVcIjogXCIyMDExLTAyLTA0XCIsIFwidmljdGltX2FnZVwiOiBudWxsLCBcInNob3RzX2ZpcmVkXCI6IG51bGwsIFwid2VhcG9uXCI6IG51bGwsIFwidmljdGltX3JhY2VcIjogbnVsbCwgXCJhZ2VuY3lcIjogbnVsbCwgXCJjb3VudHlcIjogbnVsbCwgXCJzb3VyY2VfdXJsXCI6IG51bGwsIFwidmljdGltX2FybWVkXCI6IG51bGwsIFwidmljdGltX25hbWVcIjogbnVsbCwgXCJzdGF0ZVwiOiBudWxsLCBcInNob290aW5nc1wiOiBcIm5vXCIsIFwidmljdGltX2dlbmRlclwiOiBudWxsLCBcIm91dGNvbWVcIjogbnVsbCwgXCJzdW1tYXJ5XCI6IG51bGwsIFwib2ZmaWNlcl9uYW1lc1wiOiBudWxsfV19O1xuXG5cbihmdW5jdGlvbigpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uKGUpIHtcbiAgICBzZWxmLmluaXQoKVxuICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0gZS5kYXRhLFxuICAgICAgICAgIGlkID0gcmVxdWVzdC5pZCxcbiAgICAgICAgICBwYXJhbXMgPSByZXF1ZXN0LnBhcmFtcztcblxuICAgICAgICBzZWxmLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgcmVzdWx0czogc2VsZi5zZWFyY2gocGFyYW1zKVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuZXJyb3IoZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuICB9KTtcblxuXG5cbiAgc2VsZi5zZWFyY2ggPSBmdW5jdGlvbihmaWx0ZXJQYXJhbXMpIHtcbiAgICByZXR1cm4gc2VsZi5kYXRhLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XG4gICAgICAvLyB2aWN0aW0gYWdlXG4gICAgICBpZiAoaXRlbS52aWN0aW1fYWdlIDwgXy5kZWVwR2V0KGZpbHRlclBhcmFtcywgJ3ZpY3RpbS5hZ2UubG93ZXInLCAwKSAgfHwgXG4gICAgICAgICAgaXRlbS52aWN0aW1fYWdlID4gXy5kZWVwR2V0KGZpbHRlclBhcmFtcywgJ3ZpY3RpbS5hZ2UudXBwZXInLCAxMDApIFxuICAgICAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIHZpY3RpbSBnZW5kZXJcbiAgICAgIGlmICghXy5jb250YWlucyhfLmRlZXBHZXQoZmlsdGVyUGFyYW1zLCAndmljdGltLmdlbmRlcicsIFtdKSwgaXRlbS52aWN0aW1fZ2VuZGVyKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIHZpY3RpbSBhcm1lZFxuICAgICAgaWYgKCFfLmNvbnRhaW5zKF8uZGVlcEdldChmaWx0ZXJQYXJhbXMsICd2aWN0aW0uYXJtZWQnLCBbXSksIGl0ZW0udmljdGltX2FybWVkKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIHZpY3RpbSBvdXRjb21lXG4gICAgICBpZiAoIV8uY29udGFpbnMoXy5kZWVwR2V0KGZpbHRlclBhcmFtcywgJ3ZpY3RpbS5vdXRjb21lJywgW10pLCBpdGVtLm91dGNvbWUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH07XG5cblxuICAvLyBJTklUSUFMSVNBVElPTlxuXG5cbiAgdmFyIHJlcXVpcmVkUHJvcHMgPSBbXG4gICAgJ3ZpY3RpbV9hZ2UnLFxuICAgICd2aWN0aW1fZ2VuZGVyJyxcbiAgICAnc3RhdGUnLFxuICAgICdjaXR5JyxcbiAgICAnYWdlbmN5JyxcbiAgICAnb3V0Y29tZScsXG4gIF07XG5cblxuICBzZWxmLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXNlbGYuZGF0YSkge1xuICAgICAgc2VsZi5kYXRhID0gW107XG5cbiAgICAgIGRiLnJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIC8vIG5lZWQgcmVxdWlyZWQgcHJvcHNcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPHJlcXVpcmVkUHJvcHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBpZiAoIWl0ZW1bcmVxdWlyZWRQcm9wc1tpXV0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBnZXQgbGF0L2xuZ1xuICAgICAgICB2YXIgc3RhdGUgPSBpdGVtLnN0YXRlLnRvVXBwZXJDYXNlKCksXG4gICAgICAgICAgY2l0eSA9IGl0ZW0uY2l0eS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGlmIChzdGF0ZUNpdGllc1tzdGF0ZV0gJiYgc3RhdGVDaXRpZXNbc3RhdGVdW2NpdHldKSB7XG4gICAgICAgICAgaXRlbS5sYXRsbmcgPSBzdGF0ZUNpdGllc1tzdGF0ZV1bY2l0eV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm9ybWFsaXplIGZpZWxkc1xuICAgICAgICBpdGVtLnZpY3RpbV9nZW5kZXIgPSBpdGVtLnZpY3RpbV9nZW5kZXIudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGl0ZW0udmljdGltX3JhY2UgPSAoaXRlbS52aWN0aW1fcmFjZSB8fCAndW5rbm93bicpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGl0ZW0udmljdGltX2FybWVkID0gKGl0ZW0udmljdGltX2FybWVkIHx8ICcnKS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgc3dpdGNoIChpdGVtLnZpY3RpbV9hcm1lZCkge1xuICAgICAgICAgIGNhc2UgJ2FybWVkJzpcbiAgICAgICAgICBjYXNlICd1bmFybWVkJzpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBpdGVtLm91dGNvbWUgPSAndW5rbm93bic7XG4gICAgICAgIH1cblxuICAgICAgICBpdGVtLm91dGNvbWUgPSAoaXRlbS5vdXRjb21lIHx8ICcnKS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgc3dpdGNoIChpdGVtLm91dGNvbWUpIHtcbiAgICAgICAgICBjYXNlICdoaXQnOlxuICAgICAgICAgIGNhc2UgJ2tpbGxlZCc6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgaXRlbS5vdXRjb21lID0gJ3Vua25vd24nO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5kYXRhLnB1c2goaXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gRC5yZXNvbHZlZCgpO1xuICB9XG5cblxufSkoc2VsZik7XG4iLCIvKipcbiogYXR0ZW1wdCBvZiBhIHNpbXBsZSBkZWZlci9wcm9taXNlIGxpYnJhcnkgZm9yIG1vYmlsZSBkZXZlbG9wbWVudFxuKiBAYXV0aG9yIEpvbmF0aGFuIEdvdHRpIDwgamdvdHRpIGF0IGpnb3R0aSBkb3QgbmV0PlxuKiBAc2luY2UgMjAxMi0xMFxuKiBAdmVyc2lvbiAwLjcuMlxuKi9cbihmdW5jdGlvbih1bmRlZil7XG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdHZhciBuZXh0VGlja1xuXHRcdCwgaXNGdW5jID0gZnVuY3Rpb24oZil7IHJldHVybiAoIHR5cGVvZiBmID09PSAnZnVuY3Rpb24nICk7IH1cblx0XHQsIGlzQXJyYXkgPSBmdW5jdGlvbihhKXsgcmV0dXJuIEFycmF5LmlzQXJyYXkgPyBBcnJheS5pc0FycmF5KGEpIDogKGEgaW5zdGFuY2VvZiBBcnJheSk7IH1cblx0XHQsIGlzT2JqT3JGdW5jID0gZnVuY3Rpb24obyl7IHJldHVybiAhIShvICYmICh0eXBlb2YgbykubWF0Y2goL2Z1bmN0aW9ufG9iamVjdC8pKTsgfVxuXHRcdCwgaXNOb3RWYWwgPSBmdW5jdGlvbih2KXsgcmV0dXJuICh2ID09PSBmYWxzZSB8fCB2ID09PSB1bmRlZiB8fCB2ID09PSBudWxsKTsgfVxuXHRcdCwgc2xpY2UgPSBmdW5jdGlvbihhLCBvZmZzZXQpeyByZXR1cm4gW10uc2xpY2UuY2FsbChhLCBvZmZzZXQpOyB9XG5cdFx0LCB1bmRlZlN0ciA9ICd1bmRlZmluZWQnXG5cdFx0LCB0RXJyID0gdHlwZW9mIFR5cGVFcnJvciA9PT0gdW5kZWZTdHIgPyBFcnJvciA6IFR5cGVFcnJvclxuXHQ7XG5cdGlmICggKHR5cGVvZiBwcm9jZXNzICE9PSB1bmRlZlN0cikgJiYgcHJvY2Vzcy5uZXh0VGljayApIHtcblx0XHRuZXh0VGljayA9IHByb2Nlc3MubmV4dFRpY2s7XG5cdH0gZWxzZSBpZiAoIHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCAhPT0gdW5kZWZTdHIgKSB7XG5cdFx0dmFyIG50aWNrQ2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpLCBxdWV1ZSA9IFtdO1xuXHRcdG50aWNrQ2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbigpeyBxdWV1ZS5sZW5ndGggJiYgKHF1ZXVlLnNoaWZ0KCkpKCk7IH07XG5cdFx0bmV4dFRpY2sgPSBmdW5jdGlvbihjYil7XG5cdFx0XHRxdWV1ZS5wdXNoKGNiKTtcblx0XHRcdG50aWNrQ2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSgwKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdG5leHRUaWNrID0gZnVuY3Rpb24oY2IpeyBzZXRUaW1lb3V0KGNiLCAwKTsgfTtcblx0fVxuXHRmdW5jdGlvbiByZXRocm93KGUpeyBuZXh0VGljayhmdW5jdGlvbigpeyB0aHJvdyBlO30pOyB9XG5cblx0LyoqXG5cdCAqIEB0eXBlZGVmIGRlZmVycmVkXG5cdCAqIEBwcm9wZXJ0eSB7cHJvbWlzZX0gcHJvbWlzZVxuXHQgKiBAbWV0aG9kIHJlc29sdmVcblx0ICogQG1ldGhvZCBmdWxmaWxsXG5cdCAqIEBtZXRob2QgcmVqZWN0XG5cdCAqL1xuXG5cdC8qKlxuXHQgKiBAdHlwZWRlZiB7ZnVuY3Rpb259IGZ1bGZpbGxlZFxuXHQgKiBAcGFyYW0geyp9IHZhbHVlIHByb21pc2UgcmVzb2x2ZWQgdmFsdWVcblx0ICogQHJldHVybnMgeyp9IG5leHQgcHJvbWlzZSByZXNvbHV0aW9uIHZhbHVlXG5cdCAqL1xuXG5cdC8qKlxuXHQgKiBAdHlwZWRlZiB7ZnVuY3Rpb259IGZhaWxlZFxuXHQgKiBAcGFyYW0geyp9IHJlYXNvbiBwcm9taXNlIHJlamVjdGlvbiByZWFzb25cblx0ICogQHJldHVybnMgeyp9IG5leHQgcHJvbWlzZSByZXNvbHV0aW9uIHZhbHVlIG9yIHJldGhyb3cgdGhlIHJlYXNvblxuXHQgKi9cblxuXHQvLy0tIGRlZmluaW5nIHVuZW5jbG9zZWQgcHJvbWlzZSBtZXRob2RzIC0tLy9cblx0LyoqXG5cdCAqIHNhbWUgYXMgdGhlbiB3aXRob3V0IGZhaWxlZCBjYWxsYmFja1xuXHQgKiBAcGFyYW0ge2Z1bGZpbGxlZH0gZnVsZmlsbGVkIGNhbGxiYWNrXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfSBhIG5ldyBwcm9taXNlXG5cdCAqL1xuXHRmdW5jdGlvbiBwcm9taXNlX3N1Y2Nlc3MoZnVsZmlsbGVkKXsgcmV0dXJuIHRoaXMudGhlbihmdWxmaWxsZWQsIHVuZGVmKTsgfVxuXG5cdC8qKlxuXHQgKiBzYW1lIGFzIHRoZW4gd2l0aCBvbmx5IGEgZmFpbGVkIGNhbGxiYWNrXG5cdCAqIEBwYXJhbSB7ZmFpbGVkfSBmYWlsZWQgY2FsbGJhY2tcblx0ICogQHJldHVybnMge3Byb21pc2V9IGEgbmV3IHByb21pc2Vcblx0ICovXG5cdGZ1bmN0aW9uIHByb21pc2VfZXJyb3IoZmFpbGVkKXsgcmV0dXJuIHRoaXMudGhlbih1bmRlZiwgZmFpbGVkKTsgfVxuXG5cblx0LyoqXG5cdCAqIHNhbWUgYXMgdGhlbiBidXQgZnVsZmlsbGVkIGNhbGxiYWNrIHdpbGwgcmVjZWl2ZSBtdWx0aXBsZSBwYXJhbWV0ZXJzIHdoZW4gcHJvbWlzZSBpcyBmdWxmaWxsZWQgd2l0aCBhbiBBcnJheVxuXHQgKiBAcGFyYW0ge2Z1bGZpbGxlZH0gZnVsZmlsbGVkIGNhbGxiYWNrXG5cdCAqIEBwYXJhbSB7ZmFpbGVkfSBmYWlsZWQgY2FsbGJhY2tcblx0ICogQHJldHVybnMge3Byb21pc2V9IGEgbmV3IHByb21pc2Vcblx0ICovXG5cdGZ1bmN0aW9uIHByb21pc2VfYXBwbHkoZnVsZmlsbGVkLCBmYWlsZWQpe1xuXHRcdHJldHVybiB0aGlzLnRoZW4oXG5cdFx0XHRmdW5jdGlvbihhKXtcblx0XHRcdFx0cmV0dXJuIGlzRnVuYyhmdWxmaWxsZWQpID8gZnVsZmlsbGVkLmFwcGx5KG51bGwsIGlzQXJyYXkoYSkgPyBhIDogW2FdKSA6IChkZWZlci5vbmx5RnVuY3MgPyBhIDogZnVsZmlsbGVkKTtcblx0XHRcdH1cblx0XHRcdCwgZmFpbGVkIHx8IHVuZGVmXG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBjbGVhbnVwIG1ldGhvZCB3aGljaCB3aWxsIGJlIGFsd2F5cyBleGVjdXRlZCByZWdhcmRsZXNzIGZ1bGZpbGxtZW50IG9yIHJlamVjdGlvblxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiBhIGNhbGxiYWNrIGNhbGxlZCByZWdhcmRsZXNzIG9mIHRoZSBmdWxmaWxsbWVudCBvciByZWplY3Rpb24gb2YgdGhlIHByb21pc2Ugd2hpY2ggd2lsbCBiZSBjYWxsZWRcblx0ICogICAgICAgICAgICAgICAgICAgICAgd2hlbiB0aGUgcHJvbWlzZSBpcyBub3QgcGVuZGluZyBhbnltb3JlXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfSB0aGUgc2FtZSBwcm9taXNlIHVudG91Y2hlZFxuXHQgKi9cblx0ZnVuY3Rpb24gcHJvbWlzZV9lbnN1cmUoY2Ipe1xuXHRcdGZ1bmN0aW9uIF9jYigpeyBjYigpOyB9XG5cdFx0dGhpcy50aGVuKF9jYiwgX2NiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiB0YWtlIGEgc2luZ2xlIGNhbGxiYWNrIHdoaWNoIHdhaXQgZm9yIGFuIGVycm9yIGFzIGZpcnN0IHBhcmFtZXRlci4gb3RoZXIgcmVzb2x1dGlvbiB2YWx1ZXMgYXJlIHBhc3NlZCBhcyB3aXRoIHRoZSBhcHBseS9zcHJlYWQgbWV0aG9kXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiIGEgY2FsbGJhY2sgY2FsbGVkIHJlZ2FyZGxlc3Mgb2YgdGhlIGZ1bGZpbGxtZW50IG9yIHJlamVjdGlvbiBvZiB0aGUgcHJvbWlzZSB3aGljaCB3aWxsIGJlIGNhbGxlZFxuXHQgKiAgICAgICAgICAgICAgICAgICAgICB3aGVuIHRoZSBwcm9taXNlIGlzIG5vdCBwZW5kaW5nIGFueW1vcmUgd2l0aCBlcnJvciBhcyBmaXJzdCBwYXJhbWV0ZXIgaWYgYW55IGFzIGluIG5vZGUgc3R5bGVcblx0ICogICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suIFJlc3Qgb2YgcGFyYW1ldGVycyB3aWxsIGJlIGFwcGxpZWQgYXMgd2l0aCB0aGUgYXBwbHkgbWV0aG9kLlxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gYSBuZXcgcHJvbWlzZVxuXHQgKi9cblx0ZnVuY3Rpb24gcHJvbWlzZV9ub2RpZnkoY2Ipe1xuXHRcdHJldHVybiB0aGlzLnRoZW4oXG5cdFx0XHRmdW5jdGlvbihhKXtcblx0XHRcdFx0cmV0dXJuIGlzRnVuYyhjYikgPyBjYi5hcHBseShudWxsLCBpc0FycmF5KGEpID8gYS5zcGxpY2UoMCwwLHVuZGVmaW5lZCkgJiYgYSA6IFt1bmRlZmluZWQsYV0pIDogKGRlZmVyLm9ubHlGdW5jcyA/IGEgOiBjYik7XG5cdFx0XHR9XG5cdFx0XHQsIGZ1bmN0aW9uKGUpe1xuXHRcdFx0XHRyZXR1cm4gY2IoZSk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbZmFpbGVkXSB3aXRob3V0IHBhcmFtZXRlciB3aWxsIG9ubHkgcmV0aHJvdyBwcm9taXNlIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSBvZiB0aGUgcHJvbWlzZSBsaWJyYXJ5IG9uIG5leHQgdGlja1xuXHQgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiBwYXNzZWQgYSBmYWlsZWQgbWV0aG9kIHRoZW4gd2lsbCBjYWxsIGZhaWxlZCBvbiByZWplY3Rpb24gYW5kIHRocm93IHRoZSBlcnJvciBhZ2FpbiBpZiBmYWlsZWQgZGlkbid0XG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfSBhIG5ldyBwcm9taXNlXG5cdCAqL1xuXHRmdW5jdGlvbiBwcm9taXNlX3JldGhyb3coZmFpbGVkKXtcblx0XHRyZXR1cm4gdGhpcy50aGVuKFxuXHRcdFx0dW5kZWZcblx0XHRcdCwgZmFpbGVkID8gZnVuY3Rpb24oZSl7IGZhaWxlZChlKTsgdGhyb3cgZTsgfSA6IHJldGhyb3dcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCogQHBhcmFtIHtib29sZWFufSBbYWx3YXlzQXN5bmNdIGlmIHNldCBmb3JjZSB0aGUgYXN5bmMgcmVzb2x1dGlvbiBmb3IgdGhpcyBwcm9taXNlIGluZGVwZW5kYW50bHkgb2YgdGhlIEQuYWx3YXlzQXN5bmMgb3B0aW9uXG5cdCogQHJldHVybnMge2RlZmVycmVkfSBkZWZlcmVkIG9iamVjdCB3aXRoIHByb3BlcnR5ICdwcm9taXNlJyBhbmQgbWV0aG9kcyByZWplY3QsZnVsZmlsbCxyZXNvbHZlIChmdWxmaWxsIGJlaW5nIGFuIGFsaWFzIGZvciByZXNvbHZlKVxuXHQqL1xuXHR2YXIgZGVmZXIgPSBmdW5jdGlvbiAoYWx3YXlzQXN5bmMpe1xuXHRcdHZhciBhbHdheXNBc3luY0ZuID0gKHVuZGVmICE9PSBhbHdheXNBc3luYyA/IGFsd2F5c0FzeW5jIDogZGVmZXIuYWx3YXlzQXN5bmMpID8gbmV4dFRpY2sgOiBmdW5jdGlvbihmbil7Zm4oKTt9XG5cdFx0XHQsIHN0YXR1cyA9IDAgLy8gLTEgZmFpbGVkIHwgMSBmdWxmaWxsZWRcblx0XHRcdCwgcGVuZGluZ3MgPSBbXVxuXHRcdFx0LCB2YWx1ZVxuXHRcdFx0LyoqXG5cdFx0XHQgKiBAdHlwZWRlZiBwcm9taXNlXG5cdFx0XHQgKi9cblx0XHRcdCwgX3Byb21pc2UgID0ge1xuXHRcdFx0XHQvKipcblx0XHRcdFx0ICogQHBhcmFtIHtmdWxmaWxsZWR8ZnVuY3Rpb259IGZ1bGZpbGxlZCBjYWxsYmFja1xuXHRcdFx0XHQgKiBAcGFyYW0ge2ZhaWxlZHxmdW5jdGlvbn0gZmFpbGVkIGNhbGxiYWNrXG5cdFx0XHRcdCAqIEByZXR1cm5zIHtwcm9taXNlfSBhIG5ldyBwcm9taXNlXG5cdFx0XHRcdCAqL1xuXHRcdFx0XHR0aGVuOiBmdW5jdGlvbihmdWxmaWxsZWQsIGZhaWxlZCl7XG5cdFx0XHRcdFx0dmFyIGQgPSBkZWZlcigpO1xuXHRcdFx0XHRcdHBlbmRpbmdzLnB1c2goW1xuXHRcdFx0XHRcdFx0ZnVuY3Rpb24odmFsdWUpe1xuXHRcdFx0XHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0XHRcdFx0aWYoIGlzTm90VmFsKGZ1bGZpbGxlZCkpe1xuXHRcdFx0XHRcdFx0XHRcdFx0ZC5yZXNvbHZlKHZhbHVlKTtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZC5yZXNvbHZlKGlzRnVuYyhmdWxmaWxsZWQpID8gZnVsZmlsbGVkKHZhbHVlKSA6IChkZWZlci5vbmx5RnVuY3MgPyB2YWx1ZSA6IGZ1bGZpbGxlZCkpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fWNhdGNoKGUpe1xuXHRcdFx0XHRcdFx0XHRcdGQucmVqZWN0KGUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQsIGZ1bmN0aW9uKGVycil7XG5cdFx0XHRcdFx0XHRcdGlmICggaXNOb3RWYWwoZmFpbGVkKSB8fCAoKCFpc0Z1bmMoZmFpbGVkKSkgJiYgZGVmZXIub25seUZ1bmNzKSApIHtcblx0XHRcdFx0XHRcdFx0XHRkLnJlamVjdChlcnIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmICggZmFpbGVkICkge1xuXHRcdFx0XHRcdFx0XHRcdHRyeXsgZC5yZXNvbHZlKGlzRnVuYyhmYWlsZWQpID8gZmFpbGVkKGVycikgOiBmYWlsZWQpOyB9Y2F0Y2goZSl7IGQucmVqZWN0KGUpO31cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF0pO1xuXHRcdFx0XHRcdHN0YXR1cyAhPT0gMCAmJiBhbHdheXNBc3luY0ZuKGV4ZWNDYWxsYmFja3MpO1xuXHRcdFx0XHRcdHJldHVybiBkLnByb21pc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQsIHN1Y2Nlc3M6IHByb21pc2Vfc3VjY2Vzc1xuXG5cdFx0XHRcdCwgZXJyb3I6IHByb21pc2VfZXJyb3Jcblx0XHRcdFx0LCBvdGhlcndpc2U6IHByb21pc2VfZXJyb3JcblxuXHRcdFx0XHQsIGFwcGx5OiBwcm9taXNlX2FwcGx5XG5cdFx0XHRcdCwgc3ByZWFkOiBwcm9taXNlX2FwcGx5XG5cblx0XHRcdFx0LCBlbnN1cmU6IHByb21pc2VfZW5zdXJlXG5cblx0XHRcdFx0LCBub2RpZnk6IHByb21pc2Vfbm9kaWZ5XG5cblx0XHRcdFx0LCByZXRocm93OiBwcm9taXNlX3JldGhyb3dcblxuXHRcdFx0XHQsIGlzUGVuZGluZzogZnVuY3Rpb24oKXsgcmV0dXJuIHN0YXR1cyA9PT0gMDsgfVxuXG5cdFx0XHRcdCwgZ2V0U3RhdHVzOiBmdW5jdGlvbigpeyByZXR1cm4gc3RhdHVzOyB9XG5cdFx0XHR9XG5cdFx0O1xuXHRcdF9wcm9taXNlLnRvU291cmNlID0gX3Byb21pc2UudG9TdHJpbmcgPSBfcHJvbWlzZS52YWx1ZU9mID0gZnVuY3Rpb24oKXtyZXR1cm4gdmFsdWUgPT09IHVuZGVmID8gdGhpcyA6IHZhbHVlOyB9O1xuXG5cblx0XHRmdW5jdGlvbiBleGVjQ2FsbGJhY2tzKCl7XG5cdFx0XHQvKmpzaGludCBiaXR3aXNlOmZhbHNlKi9cblx0XHRcdGlmICggc3RhdHVzID09PSAwICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR2YXIgY2JzID0gcGVuZGluZ3MsIGkgPSAwLCBsID0gY2JzLmxlbmd0aCwgY2JJbmRleCA9IH5zdGF0dXMgPyAwIDogMSwgY2I7XG5cdFx0XHRwZW5kaW5ncyA9IFtdO1xuXHRcdFx0Zm9yKCA7IGkgPCBsOyBpKysgKXtcblx0XHRcdFx0KGNiID0gY2JzW2ldW2NiSW5kZXhdKSAmJiBjYih2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogZnVsZmlsbCBkZWZlcnJlZCB3aXRoIGdpdmVuIHZhbHVlXG5cdFx0ICogQHBhcmFtIHsqfSB2YWxcblx0XHQgKiBAcmV0dXJucyB7ZGVmZXJyZWR9IHRoaXMgZm9yIG1ldGhvZCBjaGFpbmluZ1xuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIF9yZXNvbHZlKHZhbCl7XG5cdFx0XHR2YXIgZG9uZSA9IGZhbHNlO1xuXHRcdFx0ZnVuY3Rpb24gb25jZShmKXtcblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKHgpe1xuXHRcdFx0XHRcdGlmIChkb25lKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRkb25lID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHJldHVybiBmKHgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmICggc3RhdHVzICkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhciB0aGVuID0gaXNPYmpPckZ1bmModmFsKSAmJiB2YWwudGhlbjtcblx0XHRcdFx0aWYgKCBpc0Z1bmModGhlbikgKSB7IC8vIG1hbmFnaW5nIGEgcHJvbWlzZVxuXHRcdFx0XHRcdGlmKCB2YWwgPT09IF9wcm9taXNlICl7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgdEVycihcIlByb21pc2UgY2FuJ3QgcmVzb2x2ZSBpdHNlbGZcIik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoZW4uY2FsbCh2YWwsIG9uY2UoX3Jlc29sdmUpLCBvbmNlKF9yZWplY3QpKTtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRvbmNlKF9yZWplY3QpKGUpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHRcdGFsd2F5c0FzeW5jRm4oZnVuY3Rpb24oKXtcblx0XHRcdFx0dmFsdWUgPSB2YWw7XG5cdFx0XHRcdHN0YXR1cyA9IDE7XG5cdFx0XHRcdGV4ZWNDYWxsYmFja3MoKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogcmVqZWN0IGRlZmVycmVkIHdpdGggZ2l2ZW4gcmVhc29uXG5cdFx0ICogQHBhcmFtIHsqfSBFcnJcblx0XHQgKiBAcmV0dXJucyB7ZGVmZXJyZWR9IHRoaXMgZm9yIG1ldGhvZCBjaGFpbmluZ1xuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIF9yZWplY3QoRXJyKXtcblx0XHRcdHN0YXR1cyB8fCBhbHdheXNBc3luY0ZuKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHRyeXsgdGhyb3coRXJyKTsgfWNhdGNoKGUpeyB2YWx1ZSA9IGU7IH1cblx0XHRcdFx0c3RhdHVzID0gLTE7XG5cdFx0XHRcdGV4ZWNDYWxsYmFja3MoKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdHJldHVybiAvKipAdHlwZSBkZWZlcnJlZCAqLyB7XG5cdFx0XHRwcm9taXNlOl9wcm9taXNlXG5cdFx0XHQscmVzb2x2ZTpfcmVzb2x2ZVxuXHRcdFx0LGZ1bGZpbGw6X3Jlc29sdmUgLy8gYWxpYXNcblx0XHRcdCxyZWplY3Q6X3JlamVjdFxuXHRcdH07XG5cdH07XG5cblx0ZGVmZXIuZGVmZXJyZWQgPSBkZWZlci5kZWZlciA9IGRlZmVyO1xuXHRkZWZlci5uZXh0VGljayA9IG5leHRUaWNrO1xuXHRkZWZlci5hbHdheXNBc3luYyA9IHRydWU7IC8vIHNldHRpbmcgdGhpcyB3aWxsIGNoYW5nZSBkZWZhdWx0IGJlaGF2aW91ci4gdXNlIGl0IG9ubHkgaWYgbmVjZXNzYXJ5IGFzIGFzeW5jaHJvbmljaXR5IHdpbGwgZm9yY2Ugc29tZSBkZWxheSBiZXR3ZWVuIHlvdXIgcHJvbWlzZSByZXNvbHV0aW9ucyBhbmQgaXMgbm90IGFsd2F5cyB3aGF0IHlvdSB3YW50LlxuXHQvKipcblx0KiBzZXR0aW5nIG9ubHlGdW5jcyB0byBmYWxzZSB3aWxsIGJyZWFrIHByb21pc2VzL0ErIGNvbmZvcm1pdHkgYnkgYWxsb3dpbmcgeW91IHRvIHBhc3Mgbm9uIHVuZGVmaW5lZC9udWxsIHZhbHVlcyBpbnN0ZWFkIG9mIGNhbGxiYWNrc1xuXHQqIGluc3RlYWQgb2YganVzdCBpZ25vcmluZyBhbnkgbm9uIGZ1bmN0aW9uIHBhcmFtZXRlcnMgdG8gdGhlbixzdWNjZXNzLGVycm9yLi4uIGl0IHdpbGwgYWNjZXB0IG5vbiBudWxsfHVuZGVmaW5lZCB2YWx1ZXMuXG5cdCogdGhpcyB3aWxsIGFsbG93IHlvdSBzaG9ydGN1dHMgbGlrZSBwcm9taXNlLnRoZW4oJ3ZhbCcsJ2hhbmRsZWQgZXJyb3InJylcblx0KiB0byBiZSBlcXVpdmFsZW50IG9mIHByb21pc2UudGhlbihmdW5jdGlvbigpeyByZXR1cm4gJ3ZhbCc7fSxmdW5jdGlvbigpeyByZXR1cm4gJ2hhbmRsZWQgZXJyb3InfSlcblx0Ki9cblx0ZGVmZXIub25seUZ1bmNzID0gdHJ1ZTtcblxuXHQvKipcblx0ICogcmV0dXJuIGEgZnVsZmlsbGVkIHByb21pc2Ugb2YgZ2l2ZW4gdmFsdWUgKGFsd2F5cyBhc3luYyByZXNvbHV0aW9uKVxuXHQgKiBAcGFyYW0geyp9IHZhbHVlXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfVxuXHQgKi9cblx0ZGVmZXIucmVzb2x2ZWQgPSBkZWZlci5mdWxmaWxsZWQgPSBmdW5jdGlvbih2YWx1ZSl7IHJldHVybiBkZWZlcih0cnVlKS5yZXNvbHZlKHZhbHVlKS5wcm9taXNlOyB9O1xuXG5cdC8qKlxuXHQgKiByZXR1cm4gYSByZWplY3RlZCBwcm9taXNlIHdpdGggZ2l2ZW4gcmVhc29uIG9mIHJlamVjdGlvbiAoYWx3YXlzIGFzeW5jIHJlamVjdGlvbilcblx0ICogQHBhcmFtIHsqfSByZWFzb25cblx0ICogQHJldHVybnMge3Byb21pc2V9XG5cdCAqL1xuXHRkZWZlci5yZWplY3RlZCA9IGZ1bmN0aW9uKHJlYXNvbil7IHJldHVybiBkZWZlcih0cnVlKS5yZWplY3QocmVhc29uKS5wcm9taXNlOyB9O1xuXG5cdC8qKlxuXHQgKiByZXR1cm4gYSBwcm9taXNlIHdpdGggbm8gcmVzb2x1dGlvbiB2YWx1ZSB3aGljaCB3aWxsIGJlIHJlc29sdmVkIGluIHRpbWUgbXMgKHVzaW5nIHNldFRpbWVvdXQpXG5cdCAqIEBwYXJhbSB7aW50fSBbdGltZV0gaW4gbXMgZGVmYXVsdCB0byAwXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfVxuXHQgKi9cblx0ZGVmZXIud2FpdCA9IGZ1bmN0aW9uKHRpbWUpe1xuXHRcdHZhciBkID0gZGVmZXIoKTtcblx0XHRzZXRUaW1lb3V0KGQucmVzb2x2ZSwgdGltZSB8fCAwKTtcblx0XHRyZXR1cm4gZC5wcm9taXNlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiByZXR1cm4gYSBwcm9taXNlIGZvciB0aGUgcmV0dXJuIHZhbHVlIG9mIGZ1bmN0aW9uIGNhbGwgd2hpY2ggd2lsbCBiZSBmdWxmaWxsZWQgaW4gZGVsYXkgbXMgb3IgcmVqZWN0ZWQgaWYgZ2l2ZW4gZm4gdGhyb3cgYW4gZXJyb3Jcblx0ICogQHBhcmFtIHsqfSBmbiB0byBleGVjdXRlIG9yIHZhbHVlIHRvIHJldHVybiBhZnRlciBnaXZlbiBkZWxheVxuXHQgKiBAcGFyYW0ge2ludH0gW2RlbGF5XSBpbiBtcyBkZWZhdWx0IHRvIDBcblx0ICogQHJldHVybnMge3Byb21pc2V9XG5cdCAqL1xuXHRkZWZlci5kZWxheSA9IGZ1bmN0aW9uKGZuLCBkZWxheSl7XG5cdFx0dmFyIGQgPSBkZWZlcigpO1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgdHJ5eyBkLnJlc29sdmUoaXNGdW5jKGZuKSA/IGZuLmFwcGx5KG51bGwpIDogZm4pOyB9Y2F0Y2goZSl7IGQucmVqZWN0KGUpOyB9IH0sIGRlbGF5IHx8IDApO1xuXHRcdHJldHVybiBkLnByb21pc2U7XG5cdH07XG5cblx0LyoqXG5cdCAqIGlmIGdpdmVuIHZhbHVlIGlzIG5vdCBhIHByb21pc2UgcmV0dXJuIGEgZnVsZmlsbGVkIHByb21pc2UgcmVzb2x2ZWQgdG8gZ2l2ZW4gdmFsdWVcblx0ICogQHBhcmFtIHsqfSBwcm9taXNlIGEgdmFsdWUgb3IgYSBwcm9taXNlXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfVxuXHQgKi9cblx0ZGVmZXIucHJvbWlzaWZ5ID0gZnVuY3Rpb24ocHJvbWlzZSl7XG5cdFx0aWYgKCBwcm9taXNlICYmIGlzRnVuYyhwcm9taXNlLnRoZW4pICkgeyByZXR1cm4gcHJvbWlzZTt9XG5cdFx0cmV0dXJuIGRlZmVyLnJlc29sdmVkKHByb21pc2UpO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIG11bHRpUHJvbWlzZVJlc29sdmVyKGNhbGxlckFyZ3VtZW50cywgcmV0dXJuUHJvbWlzZXMpe1xuXHRcdHZhciBwcm9taXNlcyA9IHNsaWNlKGNhbGxlckFyZ3VtZW50cyk7XG5cdFx0aWYgKCBwcm9taXNlcy5sZW5ndGggPT09IDEgJiYgaXNBcnJheShwcm9taXNlc1swXSkgKSB7XG5cdFx0XHRpZighIHByb21pc2VzWzBdLmxlbmd0aCApe1xuXHRcdFx0XHRyZXR1cm4gZGVmZXIuZnVsZmlsbGVkKFtdKTtcblx0XHRcdH1cblx0XHRcdHByb21pc2VzID0gcHJvbWlzZXNbMF07XG5cdFx0fVxuXHRcdHZhciBhcmdzID0gW11cblx0XHRcdCwgZCA9IGRlZmVyKClcblx0XHRcdCwgYyA9IHByb21pc2VzLmxlbmd0aFxuXHRcdDtcblx0XHRpZiAoICFjICkge1xuXHRcdFx0ZC5yZXNvbHZlKGFyZ3MpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcmVzb2x2ZXIgPSBmdW5jdGlvbihpKXtcblx0XHRcdFx0cHJvbWlzZXNbaV0gPSBkZWZlci5wcm9taXNpZnkocHJvbWlzZXNbaV0pO1xuXHRcdFx0XHRwcm9taXNlc1tpXS50aGVuKFxuXHRcdFx0XHRcdGZ1bmN0aW9uKHYpe1xuXHRcdFx0XHRcdFx0YXJnc1tpXSA9IHJldHVyblByb21pc2VzID8gcHJvbWlzZXNbaV0gOiB2O1xuXHRcdFx0XHRcdFx0KC0tYykgfHwgZC5yZXNvbHZlKGFyZ3MpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQsIGZ1bmN0aW9uKGUpe1xuXHRcdFx0XHRcdFx0aWYoICEgcmV0dXJuUHJvbWlzZXMgKXtcblx0XHRcdFx0XHRcdFx0ZC5yZWplY3QoZSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRhcmdzW2ldID0gcHJvbWlzZXNbaV07XG5cdFx0XHRcdFx0XHRcdCgtLWMpIHx8IGQucmVzb2x2ZShhcmdzKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9O1xuXHRcdFx0Zm9yKCB2YXIgaSA9IDAsIGwgPSBjOyBpIDwgbDsgaSsrICl7XG5cdFx0XHRcdHJlc29sdmVyKGkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZC5wcm9taXNlO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2VxdWVuY2VaZW5pZmllcihwcm9taXNlLCB6ZW5WYWx1ZSl7XG5cdFx0cmV0dXJuIHByb21pc2UudGhlbihpc0Z1bmMoemVuVmFsdWUpID8gemVuVmFsdWUgOiBmdW5jdGlvbigpe3JldHVybiB6ZW5WYWx1ZTt9KTtcblx0fVxuXHRmdW5jdGlvbiBzZXF1ZW5jZVByb21pc2VSZXNvbHZlcihjYWxsZXJBcmd1bWVudHMpe1xuXHRcdHZhciBmdW5jcyA9IHNsaWNlKGNhbGxlckFyZ3VtZW50cyk7XG5cdFx0aWYgKCBmdW5jcy5sZW5ndGggPT09IDEgJiYgaXNBcnJheShmdW5jc1swXSkgKSB7XG5cdFx0XHRmdW5jcyA9IGZ1bmNzWzBdO1xuXHRcdH1cblx0XHR2YXIgZCA9IGRlZmVyKCksIGk9MCwgbD1mdW5jcy5sZW5ndGgsIHByb21pc2UgPSBkZWZlci5yZXNvbHZlZCgpO1xuXHRcdGZvcig7IGk8bDsgaSsrKXtcblx0XHRcdHByb21pc2UgPSBzZXF1ZW5jZVplbmlmaWVyKHByb21pc2UsIGZ1bmNzW2ldKTtcblx0XHR9XG5cdFx0ZC5yZXNvbHZlKHByb21pc2UpO1xuXHRcdHJldHVybiBkLnByb21pc2U7XG5cdH1cblxuXHQvKipcblx0ICogcmV0dXJuIGEgcHJvbWlzZSBmb3IgYWxsIGdpdmVuIHByb21pc2VzIC8gdmFsdWVzLlxuXHQgKiB0aGUgcmV0dXJuZWQgcHJvbWlzZXMgd2lsbCBiZSBmdWxmaWxsZWQgd2l0aCBhIGxpc3Qgb2YgcmVzb2x2ZWQgdmFsdWUuXG5cdCAqIGlmIGFueSBnaXZlbiBwcm9taXNlIGlzIHJlamVjdGVkIHRoZW4gb24gdGhlIGZpcnN0IHJlamVjdGlvbiB0aGUgcmV0dXJuZWQgcHJvbWlzZWQgd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lIHJlYXNvblxuXHQgKiBAcGFyYW0ge2FycmF5fC4uLip9IFtwcm9taXNlXSBjYW4gYmUgYSBzaW5nbGUgYXJyYXkgb2YgcHJvbWlzZS92YWx1ZXMgYXMgZmlyc3QgcGFyYW1ldGVyIG9yIGEgbGlzdCBvZiBkaXJlY3QgcGFyYW1ldGVycyBwcm9taXNlL3ZhbHVlXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfSBvZiBhIGxpc3Qgb2YgZ2l2ZW4gcHJvbWlzZSByZXNvbHV0aW9uIHZhbHVlXG5cdCAqL1xuXHRkZWZlci5hbGwgPSBmdW5jdGlvbigpeyByZXR1cm4gbXVsdGlQcm9taXNlUmVzb2x2ZXIoYXJndW1lbnRzLGZhbHNlKTsgfTtcblxuXHQvKipcblx0ICogcmV0dXJuIGFuIGFsd2F5cyBmdWxmaWxsZWQgcHJvbWlzZSBvZiBhcnJheTxwcm9taXNlPiBsaXN0IG9mIHByb21pc2VzL3ZhbHVlcyByZWdhcmRsZXNzIHRoZXkgcmVzb2x2ZSBmdWxmaWxsZWQgb3IgcmVqZWN0ZWRcblx0ICogQHBhcmFtIHthcnJheXwuLi4qfSBbcHJvbWlzZV0gY2FuIGJlIGEgc2luZ2xlIGFycmF5IG9mIHByb21pc2UvdmFsdWVzIGFzIGZpcnN0IHBhcmFtZXRlciBvciBhIGxpc3Qgb2YgZGlyZWN0IHBhcmFtZXRlcnMgcHJvbWlzZS92YWx1ZVxuXHQgKiAgICAgICAgICAgICAgICAgICAgIChub24gcHJvbWlzZSB2YWx1ZXMgd2lsbCBiZSBwcm9taXNpZmllZClcblx0ICogQHJldHVybnMge3Byb21pc2V9IG9mIHRoZSBsaXN0IG9mIGdpdmVuIHByb21pc2VzXG5cdCAqL1xuXHRkZWZlci5yZXNvbHZlQWxsID0gZnVuY3Rpb24oKXsgcmV0dXJuIG11bHRpUHJvbWlzZVJlc29sdmVyKGFyZ3VtZW50cyx0cnVlKTsgfTtcblxuXHQvKipcblx0KiBleGVjdXRlIGdpdmVuIGZ1bmN0aW9uIGluIHNlcXVlbmNlIHBhc3NpbmcgdGhlaXIgcmV0dXJuZWQgdmFsdWVzIHRvIHRoZSBuZXh0IG9uZSBpbiBzZXF1ZW5jZS5cblx0KiBZb3UgY2FuIHBhc3MgdmFsdWVzIG9yIHByb21pc2UgaW5zdGVhZCBvZiBmdW5jdGlvbnMgdGhleSB3aWxsIGJlIHBhc3NlZCBpbiB0aGUgc2VxdWVuY2UgYXMgaWYgYSBmdW5jdGlvbiByZXR1cm5lZCB0aGVtLlxuXHQqIGlmIGFueSBmdW5jdGlvbiB0aHJvdyBhbiBlcnJvciBvciBhIHJlamVjdGVkIHByb21pc2UgdGhlIGZpbmFsIHJldHVybmVkIHByb21pc2Ugd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoYXQgcmVhc29uLlxuXHQqIEBwYXJhbSB7YXJyYXl8Li4uKn0gW2Z1bmN0aW9uXSBsaXN0IG9mIGZ1bmN0aW9uIHRvIGNhbGwgaW4gc2VxdWVuY2UgcmVjZWl2aW5nIHByZXZpb3VzIG9uZSBhcyBhIHBhcmFtZXRlclxuXHQqICAgICAgICAgICAgICAgICAgICAgKG5vbiBmdW5jdGlvbiB2YWx1ZXMgd2lsbCBiZSB0cmVhdGVkIGFzIGlmIHJldHVybmVkIGJ5IGEgZnVuY3Rpb24pXG5cdCogQHJldHVybnMge3Byb21pc2V9IG9mIHRoZSBsaXN0IG9mIGdpdmVuIHByb21pc2VzXG5cdCovXG5cdGRlZmVyLnNlcXVlbmNlID0gZnVuY3Rpb24oKXsgcmV0dXJuIHNlcXVlbmNlUHJvbWlzZVJlc29sdmVyKGFyZ3VtZW50cyk7IH07XG5cblx0LyoqXG5cdCAqIHRyYW5zZm9ybSBhIHR5cGljYWwgbm9kZWpzIGFzeW5jIG1ldGhvZCBhd2FpdGluZyBhIGNhbGxiYWNrIGFzIGxhc3QgcGFyYW1ldGVyLCByZWNlaXZpbmcgZXJyb3IgYXMgZmlyc3QgcGFyYW1ldGVyIHRvIGEgZnVuY3Rpb24gdGhhdFxuXHQgKiB3aWxsIHJldHVybiBhIHByb21pc2UgaW5zdGVhZC4gdGhlIHJldHVybmVkIHByb21pc2Ugd2lsbCByZXNvbHZlIHdpdGggbm9ybWFsIGNhbGxiYWNrIHZhbHVlIG1pbnVzIHRoZSBmaXJzdCBlcnJvciBwYXJhbWV0ZXIgb25cblx0ICogZnVsZmlsbCBhbmQgd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoYXQgZXJyb3IgYXMgcmVhc29uIGluIGNhc2Ugb2YgZXJyb3IuXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBbc3ViamVjdF0gb3B0aW9uYWwgc3ViamVjdCBvZiB0aGUgbWV0aG9kIHRvIGVuY2Fwc3VsYXRlXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIHRoZSBmdW5jdGlvbiB0byBlbmNhcHN1bGF0ZSBpZiB0aGUgbm9ybWFsIGNhbGxiYWNrIHNob3VsZCByZWNlaXZlIG1vcmUgdGhhbiBhIHNpbmdsZSBwYXJhbWV0ZXIgKG1pbnVzIHRoZSBlcnJvcilcblx0ICogICAgICAgICAgICAgICAgICAgICAgdGhlIHByb21pc2Ugd2lsbCByZXNvbHZlIHdpdGggdGhlIGxpc3Qgb3IgcGFyYW1ldGVycyBhcyBmdWxmaWxsbWVudCB2YWx1ZS4gSWYgb25seSBvbmUgcGFyYW1ldGVyIGlzIHNlbnQgdG8gdGhlXG5cdCAqICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrIHRoZW4gaXQgd2lsbCBiZSB1c2VkIGFzIHRoZSByZXNvbHV0aW9uIHZhbHVlLlxuXHQgKiBAcmV0dXJucyB7RnVuY3Rpb259XG5cdCAqL1xuXHRkZWZlci5ub2RlQ2Fwc3VsZSA9IGZ1bmN0aW9uKHN1YmplY3QsIGZuKXtcblx0XHRpZiAoICFmbiApIHtcblx0XHRcdGZuID0gc3ViamVjdDtcblx0XHRcdHN1YmplY3QgPSB2b2lkKDApO1xuXHRcdH1cblx0XHRyZXR1cm4gZnVuY3Rpb24oKXtcblx0XHRcdHZhciBkID0gZGVmZXIoKSwgYXJncyA9IHNsaWNlKGFyZ3VtZW50cyk7XG5cdFx0XHRhcmdzLnB1c2goZnVuY3Rpb24oZXJyLCByZXMpe1xuXHRcdFx0XHRlcnIgPyBkLnJlamVjdChlcnIpIDogZC5yZXNvbHZlKGFyZ3VtZW50cy5sZW5ndGggPiAyID8gc2xpY2UoYXJndW1lbnRzLCAxKSA6IHJlcyk7XG5cdFx0XHR9KTtcblx0XHRcdHRyeXtcblx0XHRcdFx0Zm4uYXBwbHkoc3ViamVjdCwgYXJncyk7XG5cdFx0XHR9Y2F0Y2goZSl7XG5cdFx0XHRcdGQucmVqZWN0KGUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGQucHJvbWlzZTtcblx0XHR9O1xuXHR9O1xuXG5cdC8qZ2xvYmFsIGRlZmluZSovXG5cdGlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuXHRcdGRlZmluZSgnRC5qcycsIFtdLCBmdW5jdGlvbigpeyByZXR1cm4gZGVmZXI7IH0pO1xuXHR9IGVsc2UgaWYgKCB0eXBlb2Ygd2luZG93ICE9PSB1bmRlZlN0ciApIHtcblx0XHR2YXIgb2xkRCA9IHdpbmRvdy5EO1xuXHRcdC8qKlxuXHRcdCAqIHJlc3RvcmUgZ2xvYmFsIEQgdmFyaWFibGUgdG8gaXRzIHByZXZpb3VzIHZhbHVlIGFuZCByZXR1cm4gRCB0byB0aGUgdXNlclxuXHRcdCAqIEByZXR1cm5zIHtGdW5jdGlvbn1cblx0XHQgKi9cblx0XHRkZWZlci5ub0NvbmZsaWN0ID0gZnVuY3Rpb24oKXtcblx0XHRcdHdpbmRvdy5EID0gb2xkRDtcblx0XHRcdHJldHVybiBkZWZlcjtcblx0XHR9O1xuXHRcdHdpbmRvdy5EID0gZGVmZXI7XG5cdH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgIT09IHVuZGVmU3RyICYmIG1vZHVsZS5leHBvcnRzICkge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZGVmZXI7XG5cdH1cbn0pKCk7XG4iLCIvLyAgICAgVW5kZXJzY29yZS5qcyAxLjguM1xuLy8gICAgIGh0dHA6Ly91bmRlcnNjb3JlanMub3JnXG4vLyAgICAgKGMpIDIwMDktMjAxNSBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuLy8gICAgIFVuZGVyc2NvcmUgbWF5IGJlIGZyZWVseSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG5cbihmdW5jdGlvbigpIHtcblxuICAvLyBCYXNlbGluZSBzZXR1cFxuICAvLyAtLS0tLS0tLS0tLS0tLVxuXG4gIC8vIEVzdGFibGlzaCB0aGUgcm9vdCBvYmplY3QsIGB3aW5kb3dgIGluIHRoZSBicm93c2VyLCBvciBgZXhwb3J0c2Agb24gdGhlIHNlcnZlci5cbiAgdmFyIHJvb3QgPSB0aGlzO1xuXG4gIC8vIFNhdmUgdGhlIHByZXZpb3VzIHZhbHVlIG9mIHRoZSBgX2AgdmFyaWFibGUuXG4gIHZhciBwcmV2aW91c1VuZGVyc2NvcmUgPSByb290Ll87XG5cbiAgLy8gU2F2ZSBieXRlcyBpbiB0aGUgbWluaWZpZWQgKGJ1dCBub3QgZ3ppcHBlZCkgdmVyc2lvbjpcbiAgdmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsIE9ialByb3RvID0gT2JqZWN0LnByb3RvdHlwZSwgRnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIC8vIENyZWF0ZSBxdWljayByZWZlcmVuY2UgdmFyaWFibGVzIGZvciBzcGVlZCBhY2Nlc3MgdG8gY29yZSBwcm90b3R5cGVzLlxuICB2YXJcbiAgICBwdXNoICAgICAgICAgICAgID0gQXJyYXlQcm90by5wdXNoLFxuICAgIHNsaWNlICAgICAgICAgICAgPSBBcnJheVByb3RvLnNsaWNlLFxuICAgIHRvU3RyaW5nICAgICAgICAgPSBPYmpQcm90by50b1N0cmluZyxcbiAgICBoYXNPd25Qcm9wZXJ0eSAgID0gT2JqUHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbiAgLy8gQWxsICoqRUNNQVNjcmlwdCA1KiogbmF0aXZlIGZ1bmN0aW9uIGltcGxlbWVudGF0aW9ucyB0aGF0IHdlIGhvcGUgdG8gdXNlXG4gIC8vIGFyZSBkZWNsYXJlZCBoZXJlLlxuICB2YXJcbiAgICBuYXRpdmVJc0FycmF5ICAgICAgPSBBcnJheS5pc0FycmF5LFxuICAgIG5hdGl2ZUtleXMgICAgICAgICA9IE9iamVjdC5rZXlzLFxuICAgIG5hdGl2ZUJpbmQgICAgICAgICA9IEZ1bmNQcm90by5iaW5kLFxuICAgIG5hdGl2ZUNyZWF0ZSAgICAgICA9IE9iamVjdC5jcmVhdGU7XG5cbiAgLy8gTmFrZWQgZnVuY3Rpb24gcmVmZXJlbmNlIGZvciBzdXJyb2dhdGUtcHJvdG90eXBlLXN3YXBwaW5nLlxuICB2YXIgQ3RvciA9IGZ1bmN0aW9uKCl7fTtcblxuICAvLyBDcmVhdGUgYSBzYWZlIHJlZmVyZW5jZSB0byB0aGUgVW5kZXJzY29yZSBvYmplY3QgZm9yIHVzZSBiZWxvdy5cbiAgdmFyIF8gPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgXykgcmV0dXJuIG9iajtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgXykpIHJldHVybiBuZXcgXyhvYmopO1xuICAgIHRoaXMuX3dyYXBwZWQgPSBvYmo7XG4gIH07XG5cbiAgLy8gRXhwb3J0IHRoZSBVbmRlcnNjb3JlIG9iamVjdCBmb3IgKipOb2RlLmpzKiosIHdpdGhcbiAgLy8gYmFja3dhcmRzLWNvbXBhdGliaWxpdHkgZm9yIHRoZSBvbGQgYHJlcXVpcmUoKWAgQVBJLiBJZiB3ZSdyZSBpblxuICAvLyB0aGUgYnJvd3NlciwgYWRkIGBfYCBhcyBhIGdsb2JhbCBvYmplY3QuXG4gIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IF87XG4gICAgfVxuICAgIGV4cG9ydHMuXyA9IF87XG4gIH0gZWxzZSB7XG4gICAgcm9vdC5fID0gXztcbiAgfVxuXG4gIC8vIEN1cnJlbnQgdmVyc2lvbi5cbiAgXy5WRVJTSU9OID0gJzEuOC4zJztcblxuICAvLyBJbnRlcm5hbCBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gZWZmaWNpZW50IChmb3IgY3VycmVudCBlbmdpbmVzKSB2ZXJzaW9uXG4gIC8vIG9mIHRoZSBwYXNzZWQtaW4gY2FsbGJhY2ssIHRvIGJlIHJlcGVhdGVkbHkgYXBwbGllZCBpbiBvdGhlciBVbmRlcnNjb3JlXG4gIC8vIGZ1bmN0aW9ucy5cbiAgdmFyIG9wdGltaXplQ2IgPSBmdW5jdGlvbihmdW5jLCBjb250ZXh0LCBhcmdDb3VudCkge1xuICAgIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHJldHVybiBmdW5jO1xuICAgIHN3aXRjaCAoYXJnQ291bnQgPT0gbnVsbCA/IDMgOiBhcmdDb3VudCkge1xuICAgICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCB2YWx1ZSk7XG4gICAgICB9O1xuICAgICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24odmFsdWUsIG90aGVyKSB7XG4gICAgICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgdmFsdWUsIG90aGVyKTtcbiAgICAgIH07XG4gICAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgICAgfTtcbiAgICAgIGNhc2UgNDogcmV0dXJuIGZ1bmN0aW9uKGFjY3VtdWxhdG9yLCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCBhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKTtcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBBIG1vc3RseS1pbnRlcm5hbCBmdW5jdGlvbiB0byBnZW5lcmF0ZSBjYWxsYmFja3MgdGhhdCBjYW4gYmUgYXBwbGllZFxuICAvLyB0byBlYWNoIGVsZW1lbnQgaW4gYSBjb2xsZWN0aW9uLCByZXR1cm5pbmcgdGhlIGRlc2lyZWQgcmVzdWx0IOKAlCBlaXRoZXJcbiAgLy8gaWRlbnRpdHksIGFuIGFyYml0cmFyeSBjYWxsYmFjaywgYSBwcm9wZXJ0eSBtYXRjaGVyLCBvciBhIHByb3BlcnR5IGFjY2Vzc29yLlxuICB2YXIgY2IgPSBmdW5jdGlvbih2YWx1ZSwgY29udGV4dCwgYXJnQ291bnQpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIF8uaWRlbnRpdHk7XG4gICAgaWYgKF8uaXNGdW5jdGlvbih2YWx1ZSkpIHJldHVybiBvcHRpbWl6ZUNiKHZhbHVlLCBjb250ZXh0LCBhcmdDb3VudCk7XG4gICAgaWYgKF8uaXNPYmplY3QodmFsdWUpKSByZXR1cm4gXy5tYXRjaGVyKHZhbHVlKTtcbiAgICByZXR1cm4gXy5wcm9wZXJ0eSh2YWx1ZSk7XG4gIH07XG4gIF8uaXRlcmF0ZWUgPSBmdW5jdGlvbih2YWx1ZSwgY29udGV4dCkge1xuICAgIHJldHVybiBjYih2YWx1ZSwgY29udGV4dCwgSW5maW5pdHkpO1xuICB9O1xuXG4gIC8vIEFuIGludGVybmFsIGZ1bmN0aW9uIGZvciBjcmVhdGluZyBhc3NpZ25lciBmdW5jdGlvbnMuXG4gIHZhciBjcmVhdGVBc3NpZ25lciA9IGZ1bmN0aW9uKGtleXNGdW5jLCB1bmRlZmluZWRPbmx5KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iaikge1xuICAgICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICBpZiAobGVuZ3RoIDwgMiB8fCBvYmogPT0gbnVsbCkgcmV0dXJuIG9iajtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF0sXG4gICAgICAgICAgICBrZXlzID0ga2V5c0Z1bmMoc291cmNlKSxcbiAgICAgICAgICAgIGwgPSBrZXlzLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoIXVuZGVmaW5lZE9ubHkgfHwgb2JqW2tleV0gPT09IHZvaWQgMCkgb2JqW2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICB9O1xuXG4gIC8vIEFuIGludGVybmFsIGZ1bmN0aW9uIGZvciBjcmVhdGluZyBhIG5ldyBvYmplY3QgdGhhdCBpbmhlcml0cyBmcm9tIGFub3RoZXIuXG4gIHZhciBiYXNlQ3JlYXRlID0gZnVuY3Rpb24ocHJvdG90eXBlKSB7XG4gICAgaWYgKCFfLmlzT2JqZWN0KHByb3RvdHlwZSkpIHJldHVybiB7fTtcbiAgICBpZiAobmF0aXZlQ3JlYXRlKSByZXR1cm4gbmF0aXZlQ3JlYXRlKHByb3RvdHlwZSk7XG4gICAgQ3Rvci5wcm90b3R5cGUgPSBwcm90b3R5cGU7XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBDdG9yO1xuICAgIEN0b3IucHJvdG90eXBlID0gbnVsbDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHZhciBwcm9wZXJ0eSA9IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmogPT0gbnVsbCA/IHZvaWQgMCA6IG9ialtrZXldO1xuICAgIH07XG4gIH07XG5cbiAgLy8gSGVscGVyIGZvciBjb2xsZWN0aW9uIG1ldGhvZHMgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgYSBjb2xsZWN0aW9uXG4gIC8vIHNob3VsZCBiZSBpdGVyYXRlZCBhcyBhbiBhcnJheSBvciBhcyBhbiBvYmplY3RcbiAgLy8gUmVsYXRlZDogaHR0cDovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9sZW5ndGhcbiAgLy8gQXZvaWRzIGEgdmVyeSBuYXN0eSBpT1MgOCBKSVQgYnVnIG9uIEFSTS02NC4gIzIwOTRcbiAgdmFyIE1BWF9BUlJBWV9JTkRFWCA9IE1hdGgucG93KDIsIDUzKSAtIDE7XG4gIHZhciBnZXRMZW5ndGggPSBwcm9wZXJ0eSgnbGVuZ3RoJyk7XG4gIHZhciBpc0FycmF5TGlrZSA9IGZ1bmN0aW9uKGNvbGxlY3Rpb24pIHtcbiAgICB2YXIgbGVuZ3RoID0gZ2V0TGVuZ3RoKGNvbGxlY3Rpb24pO1xuICAgIHJldHVybiB0eXBlb2YgbGVuZ3RoID09ICdudW1iZXInICYmIGxlbmd0aCA+PSAwICYmIGxlbmd0aCA8PSBNQVhfQVJSQVlfSU5ERVg7XG4gIH07XG5cbiAgLy8gQ29sbGVjdGlvbiBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBUaGUgY29ybmVyc3RvbmUsIGFuIGBlYWNoYCBpbXBsZW1lbnRhdGlvbiwgYWthIGBmb3JFYWNoYC5cbiAgLy8gSGFuZGxlcyByYXcgb2JqZWN0cyBpbiBhZGRpdGlvbiB0byBhcnJheS1saWtlcy4gVHJlYXRzIGFsbFxuICAvLyBzcGFyc2UgYXJyYXktbGlrZXMgYXMgaWYgdGhleSB3ZXJlIGRlbnNlLlxuICBfLmVhY2ggPSBfLmZvckVhY2ggPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0ZWUgPSBvcHRpbWl6ZUNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICB2YXIgaSwgbGVuZ3RoO1xuICAgIGlmIChpc0FycmF5TGlrZShvYmopKSB7XG4gICAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSBvYmoubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlcmF0ZWUob2JqW2ldLCBpLCBvYmopO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopO1xuICAgICAgZm9yIChpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpdGVyYXRlZShvYmpba2V5c1tpXV0sIGtleXNbaV0sIG9iaik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSByZXN1bHRzIG9mIGFwcGx5aW5nIHRoZSBpdGVyYXRlZSB0byBlYWNoIGVsZW1lbnQuXG4gIF8ubWFwID0gXy5jb2xsZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgIHZhciBrZXlzID0gIWlzQXJyYXlMaWtlKG9iaikgJiYgXy5rZXlzKG9iaiksXG4gICAgICAgIGxlbmd0aCA9IChrZXlzIHx8IG9iaikubGVuZ3RoLFxuICAgICAgICByZXN1bHRzID0gQXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgY3VycmVudEtleSA9IGtleXMgPyBrZXlzW2luZGV4XSA6IGluZGV4O1xuICAgICAgcmVzdWx0c1tpbmRleF0gPSBpdGVyYXRlZShvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIC8vIENyZWF0ZSBhIHJlZHVjaW5nIGZ1bmN0aW9uIGl0ZXJhdGluZyBsZWZ0IG9yIHJpZ2h0LlxuICBmdW5jdGlvbiBjcmVhdGVSZWR1Y2UoZGlyKSB7XG4gICAgLy8gT3B0aW1pemVkIGl0ZXJhdG9yIGZ1bmN0aW9uIGFzIHVzaW5nIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAvLyBpbiB0aGUgbWFpbiBmdW5jdGlvbiB3aWxsIGRlb3B0aW1pemUgdGhlLCBzZWUgIzE5OTEuXG4gICAgZnVuY3Rpb24gaXRlcmF0b3Iob2JqLCBpdGVyYXRlZSwgbWVtbywga2V5cywgaW5kZXgsIGxlbmd0aCkge1xuICAgICAgZm9yICg7IGluZGV4ID49IDAgJiYgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IGRpcikge1xuICAgICAgICB2YXIgY3VycmVudEtleSA9IGtleXMgPyBrZXlzW2luZGV4XSA6IGluZGV4O1xuICAgICAgICBtZW1vID0gaXRlcmF0ZWUobWVtbywgb2JqW2N1cnJlbnRLZXldLCBjdXJyZW50S2V5LCBvYmopO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1lbW87XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIG1lbW8sIGNvbnRleHQpIHtcbiAgICAgIGl0ZXJhdGVlID0gb3B0aW1pemVDYihpdGVyYXRlZSwgY29udGV4dCwgNCk7XG4gICAgICB2YXIga2V5cyA9ICFpc0FycmF5TGlrZShvYmopICYmIF8ua2V5cyhvYmopLFxuICAgICAgICAgIGxlbmd0aCA9IChrZXlzIHx8IG9iaikubGVuZ3RoLFxuICAgICAgICAgIGluZGV4ID0gZGlyID4gMCA/IDAgOiBsZW5ndGggLSAxO1xuICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBpbml0aWFsIHZhbHVlIGlmIG5vbmUgaXMgcHJvdmlkZWQuXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgbWVtbyA9IG9ialtrZXlzID8ga2V5c1tpbmRleF0gOiBpbmRleF07XG4gICAgICAgIGluZGV4ICs9IGRpcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVyYXRvcihvYmosIGl0ZXJhdGVlLCBtZW1vLCBrZXlzLCBpbmRleCwgbGVuZ3RoKTtcbiAgICB9O1xuICB9XG5cbiAgLy8gKipSZWR1Y2UqKiBidWlsZHMgdXAgYSBzaW5nbGUgcmVzdWx0IGZyb20gYSBsaXN0IG9mIHZhbHVlcywgYWthIGBpbmplY3RgLFxuICAvLyBvciBgZm9sZGxgLlxuICBfLnJlZHVjZSA9IF8uZm9sZGwgPSBfLmluamVjdCA9IGNyZWF0ZVJlZHVjZSgxKTtcblxuICAvLyBUaGUgcmlnaHQtYXNzb2NpYXRpdmUgdmVyc2lvbiBvZiByZWR1Y2UsIGFsc28ga25vd24gYXMgYGZvbGRyYC5cbiAgXy5yZWR1Y2VSaWdodCA9IF8uZm9sZHIgPSBjcmVhdGVSZWR1Y2UoLTEpO1xuXG4gIC8vIFJldHVybiB0aGUgZmlyc3QgdmFsdWUgd2hpY2ggcGFzc2VzIGEgdHJ1dGggdGVzdC4gQWxpYXNlZCBhcyBgZGV0ZWN0YC5cbiAgXy5maW5kID0gXy5kZXRlY3QgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBrZXk7XG4gICAgaWYgKGlzQXJyYXlMaWtlKG9iaikpIHtcbiAgICAgIGtleSA9IF8uZmluZEluZGV4KG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAga2V5ID0gXy5maW5kS2V5KG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICB9XG4gICAgaWYgKGtleSAhPT0gdm9pZCAwICYmIGtleSAhPT0gLTEpIHJldHVybiBvYmpba2V5XTtcbiAgfTtcblxuICAvLyBSZXR1cm4gYWxsIHRoZSBlbGVtZW50cyB0aGF0IHBhc3MgYSB0cnV0aCB0ZXN0LlxuICAvLyBBbGlhc2VkIGFzIGBzZWxlY3RgLlxuICBfLmZpbHRlciA9IF8uc2VsZWN0ID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgXy5lYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgbGlzdCkpIHJlc3VsdHMucHVzaCh2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGFsbCB0aGUgZWxlbWVudHMgZm9yIHdoaWNoIGEgdHJ1dGggdGVzdCBmYWlscy5cbiAgXy5yZWplY3QgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHJldHVybiBfLmZpbHRlcihvYmosIF8ubmVnYXRlKGNiKHByZWRpY2F0ZSkpLCBjb250ZXh0KTtcbiAgfTtcblxuICAvLyBEZXRlcm1pbmUgd2hldGhlciBhbGwgb2YgdGhlIGVsZW1lbnRzIG1hdGNoIGEgdHJ1dGggdGVzdC5cbiAgLy8gQWxpYXNlZCBhcyBgYWxsYC5cbiAgXy5ldmVyeSA9IF8uYWxsID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICBwcmVkaWNhdGUgPSBjYihwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIHZhciBrZXlzID0gIWlzQXJyYXlMaWtlKG9iaikgJiYgXy5rZXlzKG9iaiksXG4gICAgICAgIGxlbmd0aCA9IChrZXlzIHx8IG9iaikubGVuZ3RoO1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHZhciBjdXJyZW50S2V5ID0ga2V5cyA/IGtleXNbaW5kZXhdIDogaW5kZXg7XG4gICAgICBpZiAoIXByZWRpY2F0ZShvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaikpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLy8gRGV0ZXJtaW5lIGlmIGF0IGxlYXN0IG9uZSBlbGVtZW50IGluIHRoZSBvYmplY3QgbWF0Y2hlcyBhIHRydXRoIHRlc3QuXG4gIC8vIEFsaWFzZWQgYXMgYGFueWAuXG4gIF8uc29tZSA9IF8uYW55ID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICBwcmVkaWNhdGUgPSBjYihwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIHZhciBrZXlzID0gIWlzQXJyYXlMaWtlKG9iaikgJiYgXy5rZXlzKG9iaiksXG4gICAgICAgIGxlbmd0aCA9IChrZXlzIHx8IG9iaikubGVuZ3RoO1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHZhciBjdXJyZW50S2V5ID0ga2V5cyA/IGtleXNbaW5kZXhdIDogaW5kZXg7XG4gICAgICBpZiAocHJlZGljYXRlKG9ialtjdXJyZW50S2V5XSwgY3VycmVudEtleSwgb2JqKSkgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvLyBEZXRlcm1pbmUgaWYgdGhlIGFycmF5IG9yIG9iamVjdCBjb250YWlucyBhIGdpdmVuIGl0ZW0gKHVzaW5nIGA9PT1gKS5cbiAgLy8gQWxpYXNlZCBhcyBgaW5jbHVkZXNgIGFuZCBgaW5jbHVkZWAuXG4gIF8uY29udGFpbnMgPSBfLmluY2x1ZGVzID0gXy5pbmNsdWRlID0gZnVuY3Rpb24ob2JqLCBpdGVtLCBmcm9tSW5kZXgsIGd1YXJkKSB7XG4gICAgaWYgKCFpc0FycmF5TGlrZShvYmopKSBvYmogPSBfLnZhbHVlcyhvYmopO1xuICAgIGlmICh0eXBlb2YgZnJvbUluZGV4ICE9ICdudW1iZXInIHx8IGd1YXJkKSBmcm9tSW5kZXggPSAwO1xuICAgIHJldHVybiBfLmluZGV4T2Yob2JqLCBpdGVtLCBmcm9tSW5kZXgpID49IDA7XG4gIH07XG5cbiAgLy8gSW52b2tlIGEgbWV0aG9kICh3aXRoIGFyZ3VtZW50cykgb24gZXZlcnkgaXRlbSBpbiBhIGNvbGxlY3Rpb24uXG4gIF8uaW52b2tlID0gZnVuY3Rpb24ob2JqLCBtZXRob2QpIHtcbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICB2YXIgaXNGdW5jID0gXy5pc0Z1bmN0aW9uKG1ldGhvZCk7XG4gICAgcmV0dXJuIF8ubWFwKG9iaiwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHZhciBmdW5jID0gaXNGdW5jID8gbWV0aG9kIDogdmFsdWVbbWV0aG9kXTtcbiAgICAgIHJldHVybiBmdW5jID09IG51bGwgPyBmdW5jIDogZnVuYy5hcHBseSh2YWx1ZSwgYXJncyk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gQ29udmVuaWVuY2UgdmVyc2lvbiBvZiBhIGNvbW1vbiB1c2UgY2FzZSBvZiBgbWFwYDogZmV0Y2hpbmcgYSBwcm9wZXJ0eS5cbiAgXy5wbHVjayA9IGZ1bmN0aW9uKG9iaiwga2V5KSB7XG4gICAgcmV0dXJuIF8ubWFwKG9iaiwgXy5wcm9wZXJ0eShrZXkpKTtcbiAgfTtcblxuICAvLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIGEgY29tbW9uIHVzZSBjYXNlIG9mIGBmaWx0ZXJgOiBzZWxlY3Rpbmcgb25seSBvYmplY3RzXG4gIC8vIGNvbnRhaW5pbmcgc3BlY2lmaWMgYGtleTp2YWx1ZWAgcGFpcnMuXG4gIF8ud2hlcmUgPSBmdW5jdGlvbihvYmosIGF0dHJzKSB7XG4gICAgcmV0dXJuIF8uZmlsdGVyKG9iaiwgXy5tYXRjaGVyKGF0dHJzKSk7XG4gIH07XG5cbiAgLy8gQ29udmVuaWVuY2UgdmVyc2lvbiBvZiBhIGNvbW1vbiB1c2UgY2FzZSBvZiBgZmluZGA6IGdldHRpbmcgdGhlIGZpcnN0IG9iamVjdFxuICAvLyBjb250YWluaW5nIHNwZWNpZmljIGBrZXk6dmFsdWVgIHBhaXJzLlxuICBfLmZpbmRXaGVyZSA9IGZ1bmN0aW9uKG9iaiwgYXR0cnMpIHtcbiAgICByZXR1cm4gXy5maW5kKG9iaiwgXy5tYXRjaGVyKGF0dHJzKSk7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBtYXhpbXVtIGVsZW1lbnQgKG9yIGVsZW1lbnQtYmFzZWQgY29tcHV0YXRpb24pLlxuICBfLm1heCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0ID0gLUluZmluaXR5LCBsYXN0Q29tcHV0ZWQgPSAtSW5maW5pdHksXG4gICAgICAgIHZhbHVlLCBjb21wdXRlZDtcbiAgICBpZiAoaXRlcmF0ZWUgPT0gbnVsbCAmJiBvYmogIT0gbnVsbCkge1xuICAgICAgb2JqID0gaXNBcnJheUxpa2Uob2JqKSA/IG9iaiA6IF8udmFsdWVzKG9iaik7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gb2JqLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhbHVlID0gb2JqW2ldO1xuICAgICAgICBpZiAodmFsdWUgPiByZXN1bHQpIHtcbiAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICAgIF8uZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlKHZhbHVlLCBpbmRleCwgbGlzdCk7XG4gICAgICAgIGlmIChjb21wdXRlZCA+IGxhc3RDb21wdXRlZCB8fCBjb21wdXRlZCA9PT0gLUluZmluaXR5ICYmIHJlc3VsdCA9PT0gLUluZmluaXR5KSB7XG4gICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgbGFzdENvbXB1dGVkID0gY29tcHV0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgbWluaW11bSBlbGVtZW50IChvciBlbGVtZW50LWJhc2VkIGNvbXB1dGF0aW9uKS5cbiAgXy5taW4gPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgdmFyIHJlc3VsdCA9IEluZmluaXR5LCBsYXN0Q29tcHV0ZWQgPSBJbmZpbml0eSxcbiAgICAgICAgdmFsdWUsIGNvbXB1dGVkO1xuICAgIGlmIChpdGVyYXRlZSA9PSBudWxsICYmIG9iaiAhPSBudWxsKSB7XG4gICAgICBvYmogPSBpc0FycmF5TGlrZShvYmopID8gb2JqIDogXy52YWx1ZXMob2JqKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBvYmoubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFsdWUgPSBvYmpbaV07XG4gICAgICAgIGlmICh2YWx1ZSA8IHJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgICAgXy5lYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUodmFsdWUsIGluZGV4LCBsaXN0KTtcbiAgICAgICAgaWYgKGNvbXB1dGVkIDwgbGFzdENvbXB1dGVkIHx8IGNvbXB1dGVkID09PSBJbmZpbml0eSAmJiByZXN1bHQgPT09IEluZmluaXR5KSB7XG4gICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgbGFzdENvbXB1dGVkID0gY29tcHV0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFNodWZmbGUgYSBjb2xsZWN0aW9uLCB1c2luZyB0aGUgbW9kZXJuIHZlcnNpb24gb2YgdGhlXG4gIC8vIFtGaXNoZXItWWF0ZXMgc2h1ZmZsZV0oaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9GaXNoZXLigJNZYXRlc19zaHVmZmxlKS5cbiAgXy5zaHVmZmxlID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIHNldCA9IGlzQXJyYXlMaWtlKG9iaikgPyBvYmogOiBfLnZhbHVlcyhvYmopO1xuICAgIHZhciBsZW5ndGggPSBzZXQubGVuZ3RoO1xuICAgIHZhciBzaHVmZmxlZCA9IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwLCByYW5kOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgcmFuZCA9IF8ucmFuZG9tKDAsIGluZGV4KTtcbiAgICAgIGlmIChyYW5kICE9PSBpbmRleCkgc2h1ZmZsZWRbaW5kZXhdID0gc2h1ZmZsZWRbcmFuZF07XG4gICAgICBzaHVmZmxlZFtyYW5kXSA9IHNldFtpbmRleF07XG4gICAgfVxuICAgIHJldHVybiBzaHVmZmxlZDtcbiAgfTtcblxuICAvLyBTYW1wbGUgKipuKiogcmFuZG9tIHZhbHVlcyBmcm9tIGEgY29sbGVjdGlvbi5cbiAgLy8gSWYgKipuKiogaXMgbm90IHNwZWNpZmllZCwgcmV0dXJucyBhIHNpbmdsZSByYW5kb20gZWxlbWVudC5cbiAgLy8gVGhlIGludGVybmFsIGBndWFyZGAgYXJndW1lbnQgYWxsb3dzIGl0IHRvIHdvcmsgd2l0aCBgbWFwYC5cbiAgXy5zYW1wbGUgPSBmdW5jdGlvbihvYmosIG4sIGd1YXJkKSB7XG4gICAgaWYgKG4gPT0gbnVsbCB8fCBndWFyZCkge1xuICAgICAgaWYgKCFpc0FycmF5TGlrZShvYmopKSBvYmogPSBfLnZhbHVlcyhvYmopO1xuICAgICAgcmV0dXJuIG9ialtfLnJhbmRvbShvYmoubGVuZ3RoIC0gMSldO1xuICAgIH1cbiAgICByZXR1cm4gXy5zaHVmZmxlKG9iaikuc2xpY2UoMCwgTWF0aC5tYXgoMCwgbikpO1xuICB9O1xuXG4gIC8vIFNvcnQgdGhlIG9iamVjdCdzIHZhbHVlcyBieSBhIGNyaXRlcmlvbiBwcm9kdWNlZCBieSBhbiBpdGVyYXRlZS5cbiAgXy5zb3J0QnkgPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgcmV0dXJuIF8ucGx1Y2soXy5tYXAob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICBjcml0ZXJpYTogaXRlcmF0ZWUodmFsdWUsIGluZGV4LCBsaXN0KVxuICAgICAgfTtcbiAgICB9KS5zb3J0KGZ1bmN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gICAgICB2YXIgYSA9IGxlZnQuY3JpdGVyaWE7XG4gICAgICB2YXIgYiA9IHJpZ2h0LmNyaXRlcmlhO1xuICAgICAgaWYgKGEgIT09IGIpIHtcbiAgICAgICAgaWYgKGEgPiBiIHx8IGEgPT09IHZvaWQgMCkgcmV0dXJuIDE7XG4gICAgICAgIGlmIChhIDwgYiB8fCBiID09PSB2b2lkIDApIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsZWZ0LmluZGV4IC0gcmlnaHQuaW5kZXg7XG4gICAgfSksICd2YWx1ZScpO1xuICB9O1xuXG4gIC8vIEFuIGludGVybmFsIGZ1bmN0aW9uIHVzZWQgZm9yIGFnZ3JlZ2F0ZSBcImdyb3VwIGJ5XCIgb3BlcmF0aW9ucy5cbiAgdmFyIGdyb3VwID0gZnVuY3Rpb24oYmVoYXZpb3IpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgICBfLmVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGtleSA9IGl0ZXJhdGVlKHZhbHVlLCBpbmRleCwgb2JqKTtcbiAgICAgICAgYmVoYXZpb3IocmVzdWx0LCB2YWx1ZSwga2V5KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIEdyb3VwcyB0aGUgb2JqZWN0J3MgdmFsdWVzIGJ5IGEgY3JpdGVyaW9uLiBQYXNzIGVpdGhlciBhIHN0cmluZyBhdHRyaWJ1dGVcbiAgLy8gdG8gZ3JvdXAgYnksIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBjcml0ZXJpb24uXG4gIF8uZ3JvdXBCeSA9IGdyb3VwKGZ1bmN0aW9uKHJlc3VsdCwgdmFsdWUsIGtleSkge1xuICAgIGlmIChfLmhhcyhyZXN1bHQsIGtleSkpIHJlc3VsdFtrZXldLnB1c2godmFsdWUpOyBlbHNlIHJlc3VsdFtrZXldID0gW3ZhbHVlXTtcbiAgfSk7XG5cbiAgLy8gSW5kZXhlcyB0aGUgb2JqZWN0J3MgdmFsdWVzIGJ5IGEgY3JpdGVyaW9uLCBzaW1pbGFyIHRvIGBncm91cEJ5YCwgYnV0IGZvclxuICAvLyB3aGVuIHlvdSBrbm93IHRoYXQgeW91ciBpbmRleCB2YWx1ZXMgd2lsbCBiZSB1bmlxdWUuXG4gIF8uaW5kZXhCeSA9IGdyb3VwKGZ1bmN0aW9uKHJlc3VsdCwgdmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gIH0pO1xuXG4gIC8vIENvdW50cyBpbnN0YW5jZXMgb2YgYW4gb2JqZWN0IHRoYXQgZ3JvdXAgYnkgYSBjZXJ0YWluIGNyaXRlcmlvbi4gUGFzc1xuICAvLyBlaXRoZXIgYSBzdHJpbmcgYXR0cmlidXRlIHRvIGNvdW50IGJ5LCBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGVcbiAgLy8gY3JpdGVyaW9uLlxuICBfLmNvdW50QnkgPSBncm91cChmdW5jdGlvbihyZXN1bHQsIHZhbHVlLCBrZXkpIHtcbiAgICBpZiAoXy5oYXMocmVzdWx0LCBrZXkpKSByZXN1bHRba2V5XSsrOyBlbHNlIHJlc3VsdFtrZXldID0gMTtcbiAgfSk7XG5cbiAgLy8gU2FmZWx5IGNyZWF0ZSBhIHJlYWwsIGxpdmUgYXJyYXkgZnJvbSBhbnl0aGluZyBpdGVyYWJsZS5cbiAgXy50b0FycmF5ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKCFvYmopIHJldHVybiBbXTtcbiAgICBpZiAoXy5pc0FycmF5KG9iaikpIHJldHVybiBzbGljZS5jYWxsKG9iaik7XG4gICAgaWYgKGlzQXJyYXlMaWtlKG9iaikpIHJldHVybiBfLm1hcChvYmosIF8uaWRlbnRpdHkpO1xuICAgIHJldHVybiBfLnZhbHVlcyhvYmopO1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIGFuIG9iamVjdC5cbiAgXy5zaXplID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gMDtcbiAgICByZXR1cm4gaXNBcnJheUxpa2Uob2JqKSA/IG9iai5sZW5ndGggOiBfLmtleXMob2JqKS5sZW5ndGg7XG4gIH07XG5cbiAgLy8gU3BsaXQgYSBjb2xsZWN0aW9uIGludG8gdHdvIGFycmF5czogb25lIHdob3NlIGVsZW1lbnRzIGFsbCBzYXRpc2Z5IHRoZSBnaXZlblxuICAvLyBwcmVkaWNhdGUsIGFuZCBvbmUgd2hvc2UgZWxlbWVudHMgYWxsIGRvIG5vdCBzYXRpc2Z5IHRoZSBwcmVkaWNhdGUuXG4gIF8ucGFydGl0aW9uID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICBwcmVkaWNhdGUgPSBjYihwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIHZhciBwYXNzID0gW10sIGZhaWwgPSBbXTtcbiAgICBfLmVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwga2V5LCBvYmopIHtcbiAgICAgIChwcmVkaWNhdGUodmFsdWUsIGtleSwgb2JqKSA/IHBhc3MgOiBmYWlsKS5wdXNoKHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW3Bhc3MsIGZhaWxdO1xuICB9O1xuXG4gIC8vIEFycmF5IEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS1cblxuICAvLyBHZXQgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYW4gYXJyYXkuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gdGhlIGZpcnN0IE5cbiAgLy8gdmFsdWVzIGluIHRoZSBhcnJheS4gQWxpYXNlZCBhcyBgaGVhZGAgYW5kIGB0YWtlYC4gVGhlICoqZ3VhcmQqKiBjaGVja1xuICAvLyBhbGxvd3MgaXQgdG8gd29yayB3aXRoIGBfLm1hcGAuXG4gIF8uZmlyc3QgPSBfLmhlYWQgPSBfLnRha2UgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICBpZiAoYXJyYXkgPT0gbnVsbCkgcmV0dXJuIHZvaWQgMDtcbiAgICBpZiAobiA9PSBudWxsIHx8IGd1YXJkKSByZXR1cm4gYXJyYXlbMF07XG4gICAgcmV0dXJuIF8uaW5pdGlhbChhcnJheSwgYXJyYXkubGVuZ3RoIC0gbik7XG4gIH07XG5cbiAgLy8gUmV0dXJucyBldmVyeXRoaW5nIGJ1dCB0aGUgbGFzdCBlbnRyeSBvZiB0aGUgYXJyYXkuIEVzcGVjaWFsbHkgdXNlZnVsIG9uXG4gIC8vIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBQYXNzaW5nICoqbioqIHdpbGwgcmV0dXJuIGFsbCB0aGUgdmFsdWVzIGluXG4gIC8vIHRoZSBhcnJheSwgZXhjbHVkaW5nIHRoZSBsYXN0IE4uXG4gIF8uaW5pdGlhbCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIHJldHVybiBzbGljZS5jYWxsKGFycmF5LCAwLCBNYXRoLm1heCgwLCBhcnJheS5sZW5ndGggLSAobiA9PSBudWxsIHx8IGd1YXJkID8gMSA6IG4pKSk7XG4gIH07XG5cbiAgLy8gR2V0IHRoZSBsYXN0IGVsZW1lbnQgb2YgYW4gYXJyYXkuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gdGhlIGxhc3QgTlxuICAvLyB2YWx1ZXMgaW4gdGhlIGFycmF5LlxuICBfLmxhc3QgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICBpZiAoYXJyYXkgPT0gbnVsbCkgcmV0dXJuIHZvaWQgMDtcbiAgICBpZiAobiA9PSBudWxsIHx8IGd1YXJkKSByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIF8ucmVzdChhcnJheSwgTWF0aC5tYXgoMCwgYXJyYXkubGVuZ3RoIC0gbikpO1xuICB9O1xuXG4gIC8vIFJldHVybnMgZXZlcnl0aGluZyBidXQgdGhlIGZpcnN0IGVudHJ5IG9mIHRoZSBhcnJheS4gQWxpYXNlZCBhcyBgdGFpbGAgYW5kIGBkcm9wYC5cbiAgLy8gRXNwZWNpYWxseSB1c2VmdWwgb24gdGhlIGFyZ3VtZW50cyBvYmplY3QuIFBhc3NpbmcgYW4gKipuKiogd2lsbCByZXR1cm5cbiAgLy8gdGhlIHJlc3QgTiB2YWx1ZXMgaW4gdGhlIGFycmF5LlxuICBfLnJlc3QgPSBfLnRhaWwgPSBfLmRyb3AgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICByZXR1cm4gc2xpY2UuY2FsbChhcnJheSwgbiA9PSBudWxsIHx8IGd1YXJkID8gMSA6IG4pO1xuICB9O1xuXG4gIC8vIFRyaW0gb3V0IGFsbCBmYWxzeSB2YWx1ZXMgZnJvbSBhbiBhcnJheS5cbiAgXy5jb21wYWN0ID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICByZXR1cm4gXy5maWx0ZXIoYXJyYXksIF8uaWRlbnRpdHkpO1xuICB9O1xuXG4gIC8vIEludGVybmFsIGltcGxlbWVudGF0aW9uIG9mIGEgcmVjdXJzaXZlIGBmbGF0dGVuYCBmdW5jdGlvbi5cbiAgdmFyIGZsYXR0ZW4gPSBmdW5jdGlvbihpbnB1dCwgc2hhbGxvdywgc3RyaWN0LCBzdGFydEluZGV4KSB7XG4gICAgdmFyIG91dHB1dCA9IFtdLCBpZHggPSAwO1xuICAgIGZvciAodmFyIGkgPSBzdGFydEluZGV4IHx8IDAsIGxlbmd0aCA9IGdldExlbmd0aChpbnB1dCk7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHZhbHVlID0gaW5wdXRbaV07XG4gICAgICBpZiAoaXNBcnJheUxpa2UodmFsdWUpICYmIChfLmlzQXJyYXkodmFsdWUpIHx8IF8uaXNBcmd1bWVudHModmFsdWUpKSkge1xuICAgICAgICAvL2ZsYXR0ZW4gY3VycmVudCBsZXZlbCBvZiBhcnJheSBvciBhcmd1bWVudHMgb2JqZWN0XG4gICAgICAgIGlmICghc2hhbGxvdykgdmFsdWUgPSBmbGF0dGVuKHZhbHVlLCBzaGFsbG93LCBzdHJpY3QpO1xuICAgICAgICB2YXIgaiA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgb3V0cHV0Lmxlbmd0aCArPSBsZW47XG4gICAgICAgIHdoaWxlIChqIDwgbGVuKSB7XG4gICAgICAgICAgb3V0cHV0W2lkeCsrXSA9IHZhbHVlW2orK107XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIXN0cmljdCkge1xuICAgICAgICBvdXRwdXRbaWR4KytdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH07XG5cbiAgLy8gRmxhdHRlbiBvdXQgYW4gYXJyYXksIGVpdGhlciByZWN1cnNpdmVseSAoYnkgZGVmYXVsdCksIG9yIGp1c3Qgb25lIGxldmVsLlxuICBfLmZsYXR0ZW4gPSBmdW5jdGlvbihhcnJheSwgc2hhbGxvdykge1xuICAgIHJldHVybiBmbGF0dGVuKGFycmF5LCBzaGFsbG93LCBmYWxzZSk7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgdmVyc2lvbiBvZiB0aGUgYXJyYXkgdGhhdCBkb2VzIG5vdCBjb250YWluIHRoZSBzcGVjaWZpZWQgdmFsdWUocykuXG4gIF8ud2l0aG91dCA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgcmV0dXJuIF8uZGlmZmVyZW5jZShhcnJheSwgc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgfTtcblxuICAvLyBQcm9kdWNlIGEgZHVwbGljYXRlLWZyZWUgdmVyc2lvbiBvZiB0aGUgYXJyYXkuIElmIHRoZSBhcnJheSBoYXMgYWxyZWFkeVxuICAvLyBiZWVuIHNvcnRlZCwgeW91IGhhdmUgdGhlIG9wdGlvbiBvZiB1c2luZyBhIGZhc3RlciBhbGdvcml0aG0uXG4gIC8vIEFsaWFzZWQgYXMgYHVuaXF1ZWAuXG4gIF8udW5pcSA9IF8udW5pcXVlID0gZnVuY3Rpb24oYXJyYXksIGlzU29ydGVkLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIGlmICghXy5pc0Jvb2xlYW4oaXNTb3J0ZWQpKSB7XG4gICAgICBjb250ZXh0ID0gaXRlcmF0ZWU7XG4gICAgICBpdGVyYXRlZSA9IGlzU29ydGVkO1xuICAgICAgaXNTb3J0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGl0ZXJhdGVlICE9IG51bGwpIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgc2VlbiA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBnZXRMZW5ndGgoYXJyYXkpOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB2YWx1ZSA9IGFycmF5W2ldLFxuICAgICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSwgaSwgYXJyYXkpIDogdmFsdWU7XG4gICAgICBpZiAoaXNTb3J0ZWQpIHtcbiAgICAgICAgaWYgKCFpIHx8IHNlZW4gIT09IGNvbXB1dGVkKSByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgICAgIHNlZW4gPSBjb21wdXRlZDtcbiAgICAgIH0gZWxzZSBpZiAoaXRlcmF0ZWUpIHtcbiAgICAgICAgaWYgKCFfLmNvbnRhaW5zKHNlZW4sIGNvbXB1dGVkKSkge1xuICAgICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFfLmNvbnRhaW5zKHJlc3VsdCwgdmFsdWUpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBQcm9kdWNlIGFuIGFycmF5IHRoYXQgY29udGFpbnMgdGhlIHVuaW9uOiBlYWNoIGRpc3RpbmN0IGVsZW1lbnQgZnJvbSBhbGwgb2ZcbiAgLy8gdGhlIHBhc3NlZC1pbiBhcnJheXMuXG4gIF8udW5pb24gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXy51bmlxKGZsYXR0ZW4oYXJndW1lbnRzLCB0cnVlLCB0cnVlKSk7XG4gIH07XG5cbiAgLy8gUHJvZHVjZSBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIGV2ZXJ5IGl0ZW0gc2hhcmVkIGJldHdlZW4gYWxsIHRoZVxuICAvLyBwYXNzZWQtaW4gYXJyYXlzLlxuICBfLmludGVyc2VjdGlvbiA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBhcmdzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gZ2V0TGVuZ3RoKGFycmF5KTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IGFycmF5W2ldO1xuICAgICAgaWYgKF8uY29udGFpbnMocmVzdWx0LCBpdGVtKSkgY29udGludWU7XG4gICAgICBmb3IgKHZhciBqID0gMTsgaiA8IGFyZ3NMZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoIV8uY29udGFpbnMoYXJndW1lbnRzW2pdLCBpdGVtKSkgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAoaiA9PT0gYXJnc0xlbmd0aCkgcmVzdWx0LnB1c2goaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gVGFrZSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIG9uZSBhcnJheSBhbmQgYSBudW1iZXIgb2Ygb3RoZXIgYXJyYXlzLlxuICAvLyBPbmx5IHRoZSBlbGVtZW50cyBwcmVzZW50IGluIGp1c3QgdGhlIGZpcnN0IGFycmF5IHdpbGwgcmVtYWluLlxuICBfLmRpZmZlcmVuY2UgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHZhciByZXN0ID0gZmxhdHRlbihhcmd1bWVudHMsIHRydWUsIHRydWUsIDEpO1xuICAgIHJldHVybiBfLmZpbHRlcihhcnJheSwgZnVuY3Rpb24odmFsdWUpe1xuICAgICAgcmV0dXJuICFfLmNvbnRhaW5zKHJlc3QsIHZhbHVlKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBaaXAgdG9nZXRoZXIgbXVsdGlwbGUgbGlzdHMgaW50byBhIHNpbmdsZSBhcnJheSAtLSBlbGVtZW50cyB0aGF0IHNoYXJlXG4gIC8vIGFuIGluZGV4IGdvIHRvZ2V0aGVyLlxuICBfLnppcCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBfLnVuemlwKGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgLy8gQ29tcGxlbWVudCBvZiBfLnppcC4gVW56aXAgYWNjZXB0cyBhbiBhcnJheSBvZiBhcnJheXMgYW5kIGdyb3Vwc1xuICAvLyBlYWNoIGFycmF5J3MgZWxlbWVudHMgb24gc2hhcmVkIGluZGljZXNcbiAgXy51bnppcCA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgdmFyIGxlbmd0aCA9IGFycmF5ICYmIF8ubWF4KGFycmF5LCBnZXRMZW5ndGgpLmxlbmd0aCB8fCAwO1xuICAgIHZhciByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgcmVzdWx0W2luZGV4XSA9IF8ucGx1Y2soYXJyYXksIGluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBDb252ZXJ0cyBsaXN0cyBpbnRvIG9iamVjdHMuIFBhc3MgZWl0aGVyIGEgc2luZ2xlIGFycmF5IG9mIGBba2V5LCB2YWx1ZV1gXG4gIC8vIHBhaXJzLCBvciB0d28gcGFyYWxsZWwgYXJyYXlzIG9mIHRoZSBzYW1lIGxlbmd0aCAtLSBvbmUgb2Yga2V5cywgYW5kIG9uZSBvZlxuICAvLyB0aGUgY29ycmVzcG9uZGluZyB2YWx1ZXMuXG4gIF8ub2JqZWN0ID0gZnVuY3Rpb24obGlzdCwgdmFsdWVzKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBnZXRMZW5ndGgobGlzdCk7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHZhbHVlcykge1xuICAgICAgICByZXN1bHRbbGlzdFtpXV0gPSB2YWx1ZXNbaV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRbbGlzdFtpXVswXV0gPSBsaXN0W2ldWzFdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIEdlbmVyYXRvciBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIGZpbmRJbmRleCBhbmQgZmluZExhc3RJbmRleCBmdW5jdGlvbnNcbiAgZnVuY3Rpb24gY3JlYXRlUHJlZGljYXRlSW5kZXhGaW5kZXIoZGlyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGFycmF5LCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgICB2YXIgbGVuZ3RoID0gZ2V0TGVuZ3RoKGFycmF5KTtcbiAgICAgIHZhciBpbmRleCA9IGRpciA+IDAgPyAwIDogbGVuZ3RoIC0gMTtcbiAgICAgIGZvciAoOyBpbmRleCA+PSAwICYmIGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSBkaXIpIHtcbiAgICAgICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHJldHVybiBpbmRleDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAtMTtcbiAgICB9O1xuICB9XG5cbiAgLy8gUmV0dXJucyB0aGUgZmlyc3QgaW5kZXggb24gYW4gYXJyYXktbGlrZSB0aGF0IHBhc3NlcyBhIHByZWRpY2F0ZSB0ZXN0XG4gIF8uZmluZEluZGV4ID0gY3JlYXRlUHJlZGljYXRlSW5kZXhGaW5kZXIoMSk7XG4gIF8uZmluZExhc3RJbmRleCA9IGNyZWF0ZVByZWRpY2F0ZUluZGV4RmluZGVyKC0xKTtcblxuICAvLyBVc2UgYSBjb21wYXJhdG9yIGZ1bmN0aW9uIHRvIGZpZ3VyZSBvdXQgdGhlIHNtYWxsZXN0IGluZGV4IGF0IHdoaWNoXG4gIC8vIGFuIG9iamVjdCBzaG91bGQgYmUgaW5zZXJ0ZWQgc28gYXMgdG8gbWFpbnRhaW4gb3JkZXIuIFVzZXMgYmluYXJ5IHNlYXJjaC5cbiAgXy5zb3J0ZWRJbmRleCA9IGZ1bmN0aW9uKGFycmF5LCBvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCwgMSk7XG4gICAgdmFyIHZhbHVlID0gaXRlcmF0ZWUob2JqKTtcbiAgICB2YXIgbG93ID0gMCwgaGlnaCA9IGdldExlbmd0aChhcnJheSk7XG4gICAgd2hpbGUgKGxvdyA8IGhpZ2gpIHtcbiAgICAgIHZhciBtaWQgPSBNYXRoLmZsb29yKChsb3cgKyBoaWdoKSAvIDIpO1xuICAgICAgaWYgKGl0ZXJhdGVlKGFycmF5W21pZF0pIDwgdmFsdWUpIGxvdyA9IG1pZCArIDE7IGVsc2UgaGlnaCA9IG1pZDtcbiAgICB9XG4gICAgcmV0dXJuIGxvdztcbiAgfTtcblxuICAvLyBHZW5lcmF0b3IgZnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBpbmRleE9mIGFuZCBsYXN0SW5kZXhPZiBmdW5jdGlvbnNcbiAgZnVuY3Rpb24gY3JlYXRlSW5kZXhGaW5kZXIoZGlyLCBwcmVkaWNhdGVGaW5kLCBzb3J0ZWRJbmRleCkge1xuICAgIHJldHVybiBmdW5jdGlvbihhcnJheSwgaXRlbSwgaWR4KSB7XG4gICAgICB2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChhcnJheSk7XG4gICAgICBpZiAodHlwZW9mIGlkeCA9PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAoZGlyID4gMCkge1xuICAgICAgICAgICAgaSA9IGlkeCA+PSAwID8gaWR4IDogTWF0aC5tYXgoaWR4ICsgbGVuZ3RoLCBpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IGlkeCA+PSAwID8gTWF0aC5taW4oaWR4ICsgMSwgbGVuZ3RoKSA6IGlkeCArIGxlbmd0aCArIDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc29ydGVkSW5kZXggJiYgaWR4ICYmIGxlbmd0aCkge1xuICAgICAgICBpZHggPSBzb3J0ZWRJbmRleChhcnJheSwgaXRlbSk7XG4gICAgICAgIHJldHVybiBhcnJheVtpZHhdID09PSBpdGVtID8gaWR4IDogLTE7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbSAhPT0gaXRlbSkge1xuICAgICAgICBpZHggPSBwcmVkaWNhdGVGaW5kKHNsaWNlLmNhbGwoYXJyYXksIGksIGxlbmd0aCksIF8uaXNOYU4pO1xuICAgICAgICByZXR1cm4gaWR4ID49IDAgPyBpZHggKyBpIDogLTE7XG4gICAgICB9XG4gICAgICBmb3IgKGlkeCA9IGRpciA+IDAgPyBpIDogbGVuZ3RoIC0gMTsgaWR4ID49IDAgJiYgaWR4IDwgbGVuZ3RoOyBpZHggKz0gZGlyKSB7XG4gICAgICAgIGlmIChhcnJheVtpZHhdID09PSBpdGVtKSByZXR1cm4gaWR4O1xuICAgICAgfVxuICAgICAgcmV0dXJuIC0xO1xuICAgIH07XG4gIH1cblxuICAvLyBSZXR1cm4gdGhlIHBvc2l0aW9uIG9mIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIGFuIGl0ZW0gaW4gYW4gYXJyYXksXG4gIC8vIG9yIC0xIGlmIHRoZSBpdGVtIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGUgYXJyYXkuXG4gIC8vIElmIHRoZSBhcnJheSBpcyBsYXJnZSBhbmQgYWxyZWFkeSBpbiBzb3J0IG9yZGVyLCBwYXNzIGB0cnVlYFxuICAvLyBmb3IgKippc1NvcnRlZCoqIHRvIHVzZSBiaW5hcnkgc2VhcmNoLlxuICBfLmluZGV4T2YgPSBjcmVhdGVJbmRleEZpbmRlcigxLCBfLmZpbmRJbmRleCwgXy5zb3J0ZWRJbmRleCk7XG4gIF8ubGFzdEluZGV4T2YgPSBjcmVhdGVJbmRleEZpbmRlcigtMSwgXy5maW5kTGFzdEluZGV4KTtcblxuICAvLyBHZW5lcmF0ZSBhbiBpbnRlZ2VyIEFycmF5IGNvbnRhaW5pbmcgYW4gYXJpdGhtZXRpYyBwcm9ncmVzc2lvbi4gQSBwb3J0IG9mXG4gIC8vIHRoZSBuYXRpdmUgUHl0aG9uIGByYW5nZSgpYCBmdW5jdGlvbi4gU2VlXG4gIC8vIFt0aGUgUHl0aG9uIGRvY3VtZW50YXRpb25dKGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS9mdW5jdGlvbnMuaHRtbCNyYW5nZSkuXG4gIF8ucmFuZ2UgPSBmdW5jdGlvbihzdGFydCwgc3RvcCwgc3RlcCkge1xuICAgIGlmIChzdG9wID09IG51bGwpIHtcbiAgICAgIHN0b3AgPSBzdGFydCB8fCAwO1xuICAgICAgc3RhcnQgPSAwO1xuICAgIH1cbiAgICBzdGVwID0gc3RlcCB8fCAxO1xuXG4gICAgdmFyIGxlbmd0aCA9IE1hdGgubWF4KE1hdGguY2VpbCgoc3RvcCAtIHN0YXJ0KSAvIHN0ZXApLCAwKTtcbiAgICB2YXIgcmFuZ2UgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgbGVuZ3RoOyBpZHgrKywgc3RhcnQgKz0gc3RlcCkge1xuICAgICAgcmFuZ2VbaWR4XSA9IHN0YXJ0O1xuICAgIH1cblxuICAgIHJldHVybiByYW5nZTtcbiAgfTtcblxuICAvLyBGdW5jdGlvbiAoYWhlbSkgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIERldGVybWluZXMgd2hldGhlciB0byBleGVjdXRlIGEgZnVuY3Rpb24gYXMgYSBjb25zdHJ1Y3RvclxuICAvLyBvciBhIG5vcm1hbCBmdW5jdGlvbiB3aXRoIHRoZSBwcm92aWRlZCBhcmd1bWVudHNcbiAgdmFyIGV4ZWN1dGVCb3VuZCA9IGZ1bmN0aW9uKHNvdXJjZUZ1bmMsIGJvdW5kRnVuYywgY29udGV4dCwgY2FsbGluZ0NvbnRleHQsIGFyZ3MpIHtcbiAgICBpZiAoIShjYWxsaW5nQ29udGV4dCBpbnN0YW5jZW9mIGJvdW5kRnVuYykpIHJldHVybiBzb3VyY2VGdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIHZhciBzZWxmID0gYmFzZUNyZWF0ZShzb3VyY2VGdW5jLnByb3RvdHlwZSk7XG4gICAgdmFyIHJlc3VsdCA9IHNvdXJjZUZ1bmMuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgaWYgKF8uaXNPYmplY3QocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxuICAvLyBDcmVhdGUgYSBmdW5jdGlvbiBib3VuZCB0byBhIGdpdmVuIG9iamVjdCAoYXNzaWduaW5nIGB0aGlzYCwgYW5kIGFyZ3VtZW50cyxcbiAgLy8gb3B0aW9uYWxseSkuIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBGdW5jdGlvbi5iaW5kYCBpZlxuICAvLyBhdmFpbGFibGUuXG4gIF8uYmluZCA9IGZ1bmN0aW9uKGZ1bmMsIGNvbnRleHQpIHtcbiAgICBpZiAobmF0aXZlQmluZCAmJiBmdW5jLmJpbmQgPT09IG5hdGl2ZUJpbmQpIHJldHVybiBuYXRpdmVCaW5kLmFwcGx5KGZ1bmMsIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgaWYgKCFfLmlzRnVuY3Rpb24oZnVuYykpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JpbmQgbXVzdCBiZSBjYWxsZWQgb24gYSBmdW5jdGlvbicpO1xuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHZhciBib3VuZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGV4ZWN1dGVCb3VuZChmdW5jLCBib3VuZCwgY29udGV4dCwgdGhpcywgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgfTtcbiAgICByZXR1cm4gYm91bmQ7XG4gIH07XG5cbiAgLy8gUGFydGlhbGx5IGFwcGx5IGEgZnVuY3Rpb24gYnkgY3JlYXRpbmcgYSB2ZXJzaW9uIHRoYXQgaGFzIGhhZCBzb21lIG9mIGl0c1xuICAvLyBhcmd1bWVudHMgcHJlLWZpbGxlZCwgd2l0aG91dCBjaGFuZ2luZyBpdHMgZHluYW1pYyBgdGhpc2AgY29udGV4dC4gXyBhY3RzXG4gIC8vIGFzIGEgcGxhY2Vob2xkZXIsIGFsbG93aW5nIGFueSBjb21iaW5hdGlvbiBvZiBhcmd1bWVudHMgdG8gYmUgcHJlLWZpbGxlZC5cbiAgXy5wYXJ0aWFsID0gZnVuY3Rpb24oZnVuYykge1xuICAgIHZhciBib3VuZEFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgdmFyIGJvdW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcG9zaXRpb24gPSAwLCBsZW5ndGggPSBib3VuZEFyZ3MubGVuZ3RoO1xuICAgICAgdmFyIGFyZ3MgPSBBcnJheShsZW5ndGgpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBhcmdzW2ldID0gYm91bmRBcmdzW2ldID09PSBfID8gYXJndW1lbnRzW3Bvc2l0aW9uKytdIDogYm91bmRBcmdzW2ldO1xuICAgICAgfVxuICAgICAgd2hpbGUgKHBvc2l0aW9uIDwgYXJndW1lbnRzLmxlbmd0aCkgYXJncy5wdXNoKGFyZ3VtZW50c1twb3NpdGlvbisrXSk7XG4gICAgICByZXR1cm4gZXhlY3V0ZUJvdW5kKGZ1bmMsIGJvdW5kLCB0aGlzLCB0aGlzLCBhcmdzKTtcbiAgICB9O1xuICAgIHJldHVybiBib3VuZDtcbiAgfTtcblxuICAvLyBCaW5kIGEgbnVtYmVyIG9mIGFuIG9iamVjdCdzIG1ldGhvZHMgdG8gdGhhdCBvYmplY3QuIFJlbWFpbmluZyBhcmd1bWVudHNcbiAgLy8gYXJlIHRoZSBtZXRob2QgbmFtZXMgdG8gYmUgYm91bmQuIFVzZWZ1bCBmb3IgZW5zdXJpbmcgdGhhdCBhbGwgY2FsbGJhY2tzXG4gIC8vIGRlZmluZWQgb24gYW4gb2JqZWN0IGJlbG9uZyB0byBpdC5cbiAgXy5iaW5kQWxsID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGksIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsIGtleTtcbiAgICBpZiAobGVuZ3RoIDw9IDEpIHRocm93IG5ldyBFcnJvcignYmluZEFsbCBtdXN0IGJlIHBhc3NlZCBmdW5jdGlvbiBuYW1lcycpO1xuICAgIGZvciAoaSA9IDE7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gYXJndW1lbnRzW2ldO1xuICAgICAgb2JqW2tleV0gPSBfLmJpbmQob2JqW2tleV0sIG9iaik7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gTWVtb2l6ZSBhbiBleHBlbnNpdmUgZnVuY3Rpb24gYnkgc3RvcmluZyBpdHMgcmVzdWx0cy5cbiAgXy5tZW1vaXplID0gZnVuY3Rpb24oZnVuYywgaGFzaGVyKSB7XG4gICAgdmFyIG1lbW9pemUgPSBmdW5jdGlvbihrZXkpIHtcbiAgICAgIHZhciBjYWNoZSA9IG1lbW9pemUuY2FjaGU7XG4gICAgICB2YXIgYWRkcmVzcyA9ICcnICsgKGhhc2hlciA/IGhhc2hlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDoga2V5KTtcbiAgICAgIGlmICghXy5oYXMoY2FjaGUsIGFkZHJlc3MpKSBjYWNoZVthZGRyZXNzXSA9IGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHJldHVybiBjYWNoZVthZGRyZXNzXTtcbiAgICB9O1xuICAgIG1lbW9pemUuY2FjaGUgPSB7fTtcbiAgICByZXR1cm4gbWVtb2l6ZTtcbiAgfTtcblxuICAvLyBEZWxheXMgYSBmdW5jdGlvbiBmb3IgdGhlIGdpdmVuIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIGFuZCB0aGVuIGNhbGxzXG4gIC8vIGl0IHdpdGggdGhlIGFyZ3VtZW50cyBzdXBwbGllZC5cbiAgXy5kZWxheSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQpIHtcbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfSwgd2FpdCk7XG4gIH07XG5cbiAgLy8gRGVmZXJzIGEgZnVuY3Rpb24sIHNjaGVkdWxpbmcgaXQgdG8gcnVuIGFmdGVyIHRoZSBjdXJyZW50IGNhbGwgc3RhY2sgaGFzXG4gIC8vIGNsZWFyZWQuXG4gIF8uZGVmZXIgPSBfLnBhcnRpYWwoXy5kZWxheSwgXywgMSk7XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCB3aGVuIGludm9rZWQsIHdpbGwgb25seSBiZSB0cmlnZ2VyZWQgYXQgbW9zdCBvbmNlXG4gIC8vIGR1cmluZyBhIGdpdmVuIHdpbmRvdyBvZiB0aW1lLiBOb3JtYWxseSwgdGhlIHRocm90dGxlZCBmdW5jdGlvbiB3aWxsIHJ1blxuICAvLyBhcyBtdWNoIGFzIGl0IGNhbiwgd2l0aG91dCBldmVyIGdvaW5nIG1vcmUgdGhhbiBvbmNlIHBlciBgd2FpdGAgZHVyYXRpb247XG4gIC8vIGJ1dCBpZiB5b3UnZCBsaWtlIHRvIGRpc2FibGUgdGhlIGV4ZWN1dGlvbiBvbiB0aGUgbGVhZGluZyBlZGdlLCBwYXNzXG4gIC8vIGB7bGVhZGluZzogZmFsc2V9YC4gVG8gZGlzYWJsZSBleGVjdXRpb24gb24gdGhlIHRyYWlsaW5nIGVkZ2UsIGRpdHRvLlxuICBfLnRocm90dGxlID0gZnVuY3Rpb24oZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0LCBhcmdzLCByZXN1bHQ7XG4gICAgdmFyIHRpbWVvdXQgPSBudWxsO1xuICAgIHZhciBwcmV2aW91cyA9IDA7XG4gICAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG4gICAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICBwcmV2aW91cyA9IG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UgPyAwIDogXy5ub3coKTtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG5vdyA9IF8ubm93KCk7XG4gICAgICBpZiAoIXByZXZpb3VzICYmIG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UpIHByZXZpb3VzID0gbm93O1xuICAgICAgdmFyIHJlbWFpbmluZyA9IHdhaXQgLSAobm93IC0gcHJldmlvdXMpO1xuICAgICAgY29udGV4dCA9IHRoaXM7XG4gICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgaWYgKHJlbWFpbmluZyA8PSAwIHx8IHJlbWFpbmluZyA+IHdhaXQpIHtcbiAgICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcHJldmlvdXMgPSBub3c7XG4gICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgICAgfSBlbHNlIGlmICghdGltZW91dCAmJiBvcHRpb25zLnRyYWlsaW5nICE9PSBmYWxzZSkge1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgcmVtYWluaW5nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG4gIC8vIGJlIHRyaWdnZXJlZC4gVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGl0IHN0b3BzIGJlaW5nIGNhbGxlZCBmb3JcbiAgLy8gTiBtaWxsaXNlY29uZHMuIElmIGBpbW1lZGlhdGVgIGlzIHBhc3NlZCwgdHJpZ2dlciB0aGUgZnVuY3Rpb24gb24gdGhlXG4gIC8vIGxlYWRpbmcgZWRnZSwgaW5zdGVhZCBvZiB0aGUgdHJhaWxpbmcuXG4gIF8uZGVib3VuY2UgPSBmdW5jdGlvbihmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgICB2YXIgdGltZW91dCwgYXJncywgY29udGV4dCwgdGltZXN0YW1wLCByZXN1bHQ7XG5cbiAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBsYXN0ID0gXy5ub3coKSAtIHRpbWVzdGFtcDtcblxuICAgICAgaWYgKGxhc3QgPCB3YWl0ICYmIGxhc3QgPj0gMCkge1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCAtIGxhc3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgIGlmICghaW1tZWRpYXRlKSB7XG4gICAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICBpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBjb250ZXh0ID0gdGhpcztcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICB0aW1lc3RhbXAgPSBfLm5vdygpO1xuICAgICAgdmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgICBpZiAoIXRpbWVvdXQpIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAgIGlmIChjYWxsTm93KSB7XG4gICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgdGhlIGZpcnN0IGZ1bmN0aW9uIHBhc3NlZCBhcyBhbiBhcmd1bWVudCB0byB0aGUgc2Vjb25kLFxuICAvLyBhbGxvd2luZyB5b3UgdG8gYWRqdXN0IGFyZ3VtZW50cywgcnVuIGNvZGUgYmVmb3JlIGFuZCBhZnRlciwgYW5kXG4gIC8vIGNvbmRpdGlvbmFsbHkgZXhlY3V0ZSB0aGUgb3JpZ2luYWwgZnVuY3Rpb24uXG4gIF8ud3JhcCA9IGZ1bmN0aW9uKGZ1bmMsIHdyYXBwZXIpIHtcbiAgICByZXR1cm4gXy5wYXJ0aWFsKHdyYXBwZXIsIGZ1bmMpO1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBuZWdhdGVkIHZlcnNpb24gb2YgdGhlIHBhc3NlZC1pbiBwcmVkaWNhdGUuXG4gIF8ubmVnYXRlID0gZnVuY3Rpb24ocHJlZGljYXRlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICFwcmVkaWNhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGlzIHRoZSBjb21wb3NpdGlvbiBvZiBhIGxpc3Qgb2YgZnVuY3Rpb25zLCBlYWNoXG4gIC8vIGNvbnN1bWluZyB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiB0aGF0IGZvbGxvd3MuXG4gIF8uY29tcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgIHZhciBzdGFydCA9IGFyZ3MubGVuZ3RoIC0gMTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaSA9IHN0YXJ0O1xuICAgICAgdmFyIHJlc3VsdCA9IGFyZ3Nbc3RhcnRdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB3aGlsZSAoaS0tKSByZXN1bHQgPSBhcmdzW2ldLmNhbGwodGhpcywgcmVzdWx0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIG9ubHkgYmUgZXhlY3V0ZWQgb24gYW5kIGFmdGVyIHRoZSBOdGggY2FsbC5cbiAgXy5hZnRlciA9IGZ1bmN0aW9uKHRpbWVzLCBmdW5jKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKC0tdGltZXMgPCAxKSB7XG4gICAgICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIG9ubHkgYmUgZXhlY3V0ZWQgdXAgdG8gKGJ1dCBub3QgaW5jbHVkaW5nKSB0aGUgTnRoIGNhbGwuXG4gIF8uYmVmb3JlID0gZnVuY3Rpb24odGltZXMsIGZ1bmMpIHtcbiAgICB2YXIgbWVtbztcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoLS10aW1lcyA+IDApIHtcbiAgICAgICAgbWVtbyA9IGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aW1lcyA8PSAxKSBmdW5jID0gbnVsbDtcbiAgICAgIHJldHVybiBtZW1vO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBhdCBtb3N0IG9uZSB0aW1lLCBubyBtYXR0ZXIgaG93XG4gIC8vIG9mdGVuIHlvdSBjYWxsIGl0LiBVc2VmdWwgZm9yIGxhenkgaW5pdGlhbGl6YXRpb24uXG4gIF8ub25jZSA9IF8ucGFydGlhbChfLmJlZm9yZSwgMik7XG5cbiAgLy8gT2JqZWN0IEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gS2V5cyBpbiBJRSA8IDkgdGhhdCB3b24ndCBiZSBpdGVyYXRlZCBieSBgZm9yIGtleSBpbiAuLi5gIGFuZCB0aHVzIG1pc3NlZC5cbiAgdmFyIGhhc0VudW1CdWcgPSAhe3RvU3RyaW5nOiBudWxsfS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgndG9TdHJpbmcnKTtcbiAgdmFyIG5vbkVudW1lcmFibGVQcm9wcyA9IFsndmFsdWVPZicsICdpc1Byb3RvdHlwZU9mJywgJ3RvU3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAncHJvcGVydHlJc0VudW1lcmFibGUnLCAnaGFzT3duUHJvcGVydHknLCAndG9Mb2NhbGVTdHJpbmcnXTtcblxuICBmdW5jdGlvbiBjb2xsZWN0Tm9uRW51bVByb3BzKG9iaiwga2V5cykge1xuICAgIHZhciBub25FbnVtSWR4ID0gbm9uRW51bWVyYWJsZVByb3BzLmxlbmd0aDtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBvYmouY29uc3RydWN0b3I7XG4gICAgdmFyIHByb3RvID0gKF8uaXNGdW5jdGlvbihjb25zdHJ1Y3RvcikgJiYgY29uc3RydWN0b3IucHJvdG90eXBlKSB8fCBPYmpQcm90bztcblxuICAgIC8vIENvbnN0cnVjdG9yIGlzIGEgc3BlY2lhbCBjYXNlLlxuICAgIHZhciBwcm9wID0gJ2NvbnN0cnVjdG9yJztcbiAgICBpZiAoXy5oYXMob2JqLCBwcm9wKSAmJiAhXy5jb250YWlucyhrZXlzLCBwcm9wKSkga2V5cy5wdXNoKHByb3ApO1xuXG4gICAgd2hpbGUgKG5vbkVudW1JZHgtLSkge1xuICAgICAgcHJvcCA9IG5vbkVudW1lcmFibGVQcm9wc1tub25FbnVtSWR4XTtcbiAgICAgIGlmIChwcm9wIGluIG9iaiAmJiBvYmpbcHJvcF0gIT09IHByb3RvW3Byb3BdICYmICFfLmNvbnRhaW5zKGtleXMsIHByb3ApKSB7XG4gICAgICAgIGtleXMucHVzaChwcm9wKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBSZXRyaWV2ZSB0aGUgbmFtZXMgb2YgYW4gb2JqZWN0J3Mgb3duIHByb3BlcnRpZXMuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBPYmplY3Qua2V5c2BcbiAgXy5rZXlzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKCFfLmlzT2JqZWN0KG9iaikpIHJldHVybiBbXTtcbiAgICBpZiAobmF0aXZlS2V5cykgcmV0dXJuIG5hdGl2ZUtleXMob2JqKTtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIGlmIChfLmhhcyhvYmosIGtleSkpIGtleXMucHVzaChrZXkpO1xuICAgIC8vIEFoZW0sIElFIDwgOS5cbiAgICBpZiAoaGFzRW51bUJ1ZykgY29sbGVjdE5vbkVudW1Qcm9wcyhvYmosIGtleXMpO1xuICAgIHJldHVybiBrZXlzO1xuICB9O1xuXG4gIC8vIFJldHJpZXZlIGFsbCB0aGUgcHJvcGVydHkgbmFtZXMgb2YgYW4gb2JqZWN0LlxuICBfLmFsbEtleXMgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAoIV8uaXNPYmplY3Qob2JqKSkgcmV0dXJuIFtdO1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikga2V5cy5wdXNoKGtleSk7XG4gICAgLy8gQWhlbSwgSUUgPCA5LlxuICAgIGlmIChoYXNFbnVtQnVnKSBjb2xsZWN0Tm9uRW51bVByb3BzKG9iaiwga2V5cyk7XG4gICAgcmV0dXJuIGtleXM7XG4gIH07XG5cbiAgLy8gUmV0cmlldmUgdGhlIHZhbHVlcyBvZiBhbiBvYmplY3QncyBwcm9wZXJ0aWVzLlxuICBfLnZhbHVlcyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciB2YWx1ZXMgPSBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlc1tpXSA9IG9ialtrZXlzW2ldXTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfTtcblxuICAvLyBSZXR1cm5zIHRoZSByZXN1bHRzIG9mIGFwcGx5aW5nIHRoZSBpdGVyYXRlZSB0byBlYWNoIGVsZW1lbnQgb2YgdGhlIG9iamVjdFxuICAvLyBJbiBjb250cmFzdCB0byBfLm1hcCBpdCByZXR1cm5zIGFuIG9iamVjdFxuICBfLm1hcE9iamVjdCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICB2YXIga2V5cyA9ICBfLmtleXMob2JqKSxcbiAgICAgICAgICBsZW5ndGggPSBrZXlzLmxlbmd0aCxcbiAgICAgICAgICByZXN1bHRzID0ge30sXG4gICAgICAgICAgY3VycmVudEtleTtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY3VycmVudEtleSA9IGtleXNbaW5kZXhdO1xuICAgICAgICByZXN1bHRzW2N1cnJlbnRLZXldID0gaXRlcmF0ZWUob2JqW2N1cnJlbnRLZXldLCBjdXJyZW50S2V5LCBvYmopO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgLy8gQ29udmVydCBhbiBvYmplY3QgaW50byBhIGxpc3Qgb2YgYFtrZXksIHZhbHVlXWAgcGFpcnMuXG4gIF8ucGFpcnMgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgcGFpcnMgPSBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHBhaXJzW2ldID0gW2tleXNbaV0sIG9ialtrZXlzW2ldXV07XG4gICAgfVxuICAgIHJldHVybiBwYWlycztcbiAgfTtcblxuICAvLyBJbnZlcnQgdGhlIGtleXMgYW5kIHZhbHVlcyBvZiBhbiBvYmplY3QuIFRoZSB2YWx1ZXMgbXVzdCBiZSBzZXJpYWxpemFibGUuXG4gIF8uaW52ZXJ0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGtleXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdFtvYmpba2V5c1tpXV1dID0ga2V5c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSBzb3J0ZWQgbGlzdCBvZiB0aGUgZnVuY3Rpb24gbmFtZXMgYXZhaWxhYmxlIG9uIHRoZSBvYmplY3QuXG4gIC8vIEFsaWFzZWQgYXMgYG1ldGhvZHNgXG4gIF8uZnVuY3Rpb25zID0gXy5tZXRob2RzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIG5hbWVzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKF8uaXNGdW5jdGlvbihvYmpba2V5XSkpIG5hbWVzLnB1c2goa2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIG5hbWVzLnNvcnQoKTtcbiAgfTtcblxuICAvLyBFeHRlbmQgYSBnaXZlbiBvYmplY3Qgd2l0aCBhbGwgdGhlIHByb3BlcnRpZXMgaW4gcGFzc2VkLWluIG9iamVjdChzKS5cbiAgXy5leHRlbmQgPSBjcmVhdGVBc3NpZ25lcihfLmFsbEtleXMpO1xuXG4gIC8vIEFzc2lnbnMgYSBnaXZlbiBvYmplY3Qgd2l0aCBhbGwgdGhlIG93biBwcm9wZXJ0aWVzIGluIHRoZSBwYXNzZWQtaW4gb2JqZWN0KHMpXG4gIC8vIChodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvYXNzaWduKVxuICBfLmV4dGVuZE93biA9IF8uYXNzaWduID0gY3JlYXRlQXNzaWduZXIoXy5rZXlzKTtcblxuICAvLyBSZXR1cm5zIHRoZSBmaXJzdCBrZXkgb24gYW4gb2JqZWN0IHRoYXQgcGFzc2VzIGEgcHJlZGljYXRlIHRlc3RcbiAgXy5maW5kS2V5ID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICBwcmVkaWNhdGUgPSBjYihwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaiksIGtleTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmIChwcmVkaWNhdGUob2JqW2tleV0sIGtleSwgb2JqKSkgcmV0dXJuIGtleTtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgY29weSBvZiB0aGUgb2JqZWN0IG9ubHkgY29udGFpbmluZyB0aGUgd2hpdGVsaXN0ZWQgcHJvcGVydGllcy5cbiAgXy5waWNrID0gZnVuY3Rpb24ob2JqZWN0LCBvaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0ID0ge30sIG9iaiA9IG9iamVjdCwgaXRlcmF0ZWUsIGtleXM7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gcmVzdWx0O1xuICAgIGlmIChfLmlzRnVuY3Rpb24ob2l0ZXJhdGVlKSkge1xuICAgICAga2V5cyA9IF8uYWxsS2V5cyhvYmopO1xuICAgICAgaXRlcmF0ZWUgPSBvcHRpbWl6ZUNiKG9pdGVyYXRlZSwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleXMgPSBmbGF0dGVuKGFyZ3VtZW50cywgZmFsc2UsIGZhbHNlLCAxKTtcbiAgICAgIGl0ZXJhdGVlID0gZnVuY3Rpb24odmFsdWUsIGtleSwgb2JqKSB7IHJldHVybiBrZXkgaW4gb2JqOyB9O1xuICAgICAgb2JqID0gT2JqZWN0KG9iaik7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBrZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgIHZhciB2YWx1ZSA9IG9ialtrZXldO1xuICAgICAgaWYgKGl0ZXJhdGVlKHZhbHVlLCBrZXksIG9iaikpIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgIC8vIFJldHVybiBhIGNvcHkgb2YgdGhlIG9iamVjdCB3aXRob3V0IHRoZSBibGFja2xpc3RlZCBwcm9wZXJ0aWVzLlxuICBfLm9taXQgPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaWYgKF8uaXNGdW5jdGlvbihpdGVyYXRlZSkpIHtcbiAgICAgIGl0ZXJhdGVlID0gXy5uZWdhdGUoaXRlcmF0ZWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIga2V5cyA9IF8ubWFwKGZsYXR0ZW4oYXJndW1lbnRzLCBmYWxzZSwgZmFsc2UsIDEpLCBTdHJpbmcpO1xuICAgICAgaXRlcmF0ZWUgPSBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgICAgIHJldHVybiAhXy5jb250YWlucyhrZXlzLCBrZXkpO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIF8ucGljayhvYmosIGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgfTtcblxuICAvLyBGaWxsIGluIGEgZ2l2ZW4gb2JqZWN0IHdpdGggZGVmYXVsdCBwcm9wZXJ0aWVzLlxuICBfLmRlZmF1bHRzID0gY3JlYXRlQXNzaWduZXIoXy5hbGxLZXlzLCB0cnVlKTtcblxuICAvLyBDcmVhdGVzIGFuIG9iamVjdCB0aGF0IGluaGVyaXRzIGZyb20gdGhlIGdpdmVuIHByb3RvdHlwZSBvYmplY3QuXG4gIC8vIElmIGFkZGl0aW9uYWwgcHJvcGVydGllcyBhcmUgcHJvdmlkZWQgdGhlbiB0aGV5IHdpbGwgYmUgYWRkZWQgdG8gdGhlXG4gIC8vIGNyZWF0ZWQgb2JqZWN0LlxuICBfLmNyZWF0ZSA9IGZ1bmN0aW9uKHByb3RvdHlwZSwgcHJvcHMpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUNyZWF0ZShwcm90b3R5cGUpO1xuICAgIGlmIChwcm9wcykgXy5leHRlbmRPd24ocmVzdWx0LCBwcm9wcyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBDcmVhdGUgYSAoc2hhbGxvdy1jbG9uZWQpIGR1cGxpY2F0ZSBvZiBhbiBvYmplY3QuXG4gIF8uY2xvbmUgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAoIV8uaXNPYmplY3Qob2JqKSkgcmV0dXJuIG9iajtcbiAgICByZXR1cm4gXy5pc0FycmF5KG9iaikgPyBvYmouc2xpY2UoKSA6IF8uZXh0ZW5kKHt9LCBvYmopO1xuICB9O1xuXG4gIC8vIEludm9rZXMgaW50ZXJjZXB0b3Igd2l0aCB0aGUgb2JqLCBhbmQgdGhlbiByZXR1cm5zIG9iai5cbiAgLy8gVGhlIHByaW1hcnkgcHVycG9zZSBvZiB0aGlzIG1ldGhvZCBpcyB0byBcInRhcCBpbnRvXCIgYSBtZXRob2QgY2hhaW4sIGluXG4gIC8vIG9yZGVyIHRvIHBlcmZvcm0gb3BlcmF0aW9ucyBvbiBpbnRlcm1lZGlhdGUgcmVzdWx0cyB3aXRoaW4gdGhlIGNoYWluLlxuICBfLnRhcCA9IGZ1bmN0aW9uKG9iaiwgaW50ZXJjZXB0b3IpIHtcbiAgICBpbnRlcmNlcHRvcihvYmopO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gUmV0dXJucyB3aGV0aGVyIGFuIG9iamVjdCBoYXMgYSBnaXZlbiBzZXQgb2YgYGtleTp2YWx1ZWAgcGFpcnMuXG4gIF8uaXNNYXRjaCA9IGZ1bmN0aW9uKG9iamVjdCwgYXR0cnMpIHtcbiAgICB2YXIga2V5cyA9IF8ua2V5cyhhdHRycyksIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIGlmIChvYmplY3QgPT0gbnVsbCkgcmV0dXJuICFsZW5ndGg7XG4gICAgdmFyIG9iaiA9IE9iamVjdChvYmplY3QpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgaWYgKGF0dHJzW2tleV0gIT09IG9ialtrZXldIHx8ICEoa2V5IGluIG9iaikpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cblxuICAvLyBJbnRlcm5hbCByZWN1cnNpdmUgY29tcGFyaXNvbiBmdW5jdGlvbiBmb3IgYGlzRXF1YWxgLlxuICB2YXIgZXEgPSBmdW5jdGlvbihhLCBiLCBhU3RhY2ssIGJTdGFjaykge1xuICAgIC8vIElkZW50aWNhbCBvYmplY3RzIGFyZSBlcXVhbC4gYDAgPT09IC0wYCwgYnV0IHRoZXkgYXJlbid0IGlkZW50aWNhbC5cbiAgICAvLyBTZWUgdGhlIFtIYXJtb255IGBlZ2FsYCBwcm9wb3NhbF0oaHR0cDovL3dpa2kuZWNtYXNjcmlwdC5vcmcvZG9rdS5waHA/aWQ9aGFybW9ueTplZ2FsKS5cbiAgICBpZiAoYSA9PT0gYikgcmV0dXJuIGEgIT09IDAgfHwgMSAvIGEgPT09IDEgLyBiO1xuICAgIC8vIEEgc3RyaWN0IGNvbXBhcmlzb24gaXMgbmVjZXNzYXJ5IGJlY2F1c2UgYG51bGwgPT0gdW5kZWZpbmVkYC5cbiAgICBpZiAoYSA9PSBudWxsIHx8IGIgPT0gbnVsbCkgcmV0dXJuIGEgPT09IGI7XG4gICAgLy8gVW53cmFwIGFueSB3cmFwcGVkIG9iamVjdHMuXG4gICAgaWYgKGEgaW5zdGFuY2VvZiBfKSBhID0gYS5fd3JhcHBlZDtcbiAgICBpZiAoYiBpbnN0YW5jZW9mIF8pIGIgPSBiLl93cmFwcGVkO1xuICAgIC8vIENvbXBhcmUgYFtbQ2xhc3NdXWAgbmFtZXMuXG4gICAgdmFyIGNsYXNzTmFtZSA9IHRvU3RyaW5nLmNhbGwoYSk7XG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gdG9TdHJpbmcuY2FsbChiKSkgcmV0dXJuIGZhbHNlO1xuICAgIHN3aXRjaCAoY2xhc3NOYW1lKSB7XG4gICAgICAvLyBTdHJpbmdzLCBudW1iZXJzLCByZWd1bGFyIGV4cHJlc3Npb25zLCBkYXRlcywgYW5kIGJvb2xlYW5zIGFyZSBjb21wYXJlZCBieSB2YWx1ZS5cbiAgICAgIGNhc2UgJ1tvYmplY3QgUmVnRXhwXSc6XG4gICAgICAvLyBSZWdFeHBzIGFyZSBjb2VyY2VkIHRvIHN0cmluZ3MgZm9yIGNvbXBhcmlzb24gKE5vdGU6ICcnICsgL2EvaSA9PT0gJy9hL2knKVxuICAgICAgY2FzZSAnW29iamVjdCBTdHJpbmddJzpcbiAgICAgICAgLy8gUHJpbWl0aXZlcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBvYmplY3Qgd3JhcHBlcnMgYXJlIGVxdWl2YWxlbnQ7IHRodXMsIGBcIjVcImAgaXNcbiAgICAgICAgLy8gZXF1aXZhbGVudCB0byBgbmV3IFN0cmluZyhcIjVcIilgLlxuICAgICAgICByZXR1cm4gJycgKyBhID09PSAnJyArIGI7XG4gICAgICBjYXNlICdbb2JqZWN0IE51bWJlcl0nOlxuICAgICAgICAvLyBgTmFOYHMgYXJlIGVxdWl2YWxlbnQsIGJ1dCBub24tcmVmbGV4aXZlLlxuICAgICAgICAvLyBPYmplY3QoTmFOKSBpcyBlcXVpdmFsZW50IHRvIE5hTlxuICAgICAgICBpZiAoK2EgIT09ICthKSByZXR1cm4gK2IgIT09ICtiO1xuICAgICAgICAvLyBBbiBgZWdhbGAgY29tcGFyaXNvbiBpcyBwZXJmb3JtZWQgZm9yIG90aGVyIG51bWVyaWMgdmFsdWVzLlxuICAgICAgICByZXR1cm4gK2EgPT09IDAgPyAxIC8gK2EgPT09IDEgLyBiIDogK2EgPT09ICtiO1xuICAgICAgY2FzZSAnW29iamVjdCBEYXRlXSc6XG4gICAgICBjYXNlICdbb2JqZWN0IEJvb2xlYW5dJzpcbiAgICAgICAgLy8gQ29lcmNlIGRhdGVzIGFuZCBib29sZWFucyB0byBudW1lcmljIHByaW1pdGl2ZSB2YWx1ZXMuIERhdGVzIGFyZSBjb21wYXJlZCBieSB0aGVpclxuICAgICAgICAvLyBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnMuIE5vdGUgdGhhdCBpbnZhbGlkIGRhdGVzIHdpdGggbWlsbGlzZWNvbmQgcmVwcmVzZW50YXRpb25zXG4gICAgICAgIC8vIG9mIGBOYU5gIGFyZSBub3QgZXF1aXZhbGVudC5cbiAgICAgICAgcmV0dXJuICthID09PSArYjtcbiAgICB9XG5cbiAgICB2YXIgYXJlQXJyYXlzID0gY2xhc3NOYW1lID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIGlmICghYXJlQXJyYXlzKSB7XG4gICAgICBpZiAodHlwZW9mIGEgIT0gJ29iamVjdCcgfHwgdHlwZW9mIGIgIT0gJ29iamVjdCcpIHJldHVybiBmYWxzZTtcblxuICAgICAgLy8gT2JqZWN0cyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVpdmFsZW50LCBidXQgYE9iamVjdGBzIG9yIGBBcnJheWBzXG4gICAgICAvLyBmcm9tIGRpZmZlcmVudCBmcmFtZXMgYXJlLlxuICAgICAgdmFyIGFDdG9yID0gYS5jb25zdHJ1Y3RvciwgYkN0b3IgPSBiLmNvbnN0cnVjdG9yO1xuICAgICAgaWYgKGFDdG9yICE9PSBiQ3RvciAmJiAhKF8uaXNGdW5jdGlvbihhQ3RvcikgJiYgYUN0b3IgaW5zdGFuY2VvZiBhQ3RvciAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uaXNGdW5jdGlvbihiQ3RvcikgJiYgYkN0b3IgaW5zdGFuY2VvZiBiQ3RvcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCdjb25zdHJ1Y3RvcicgaW4gYSAmJiAnY29uc3RydWN0b3InIGluIGIpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gQXNzdW1lIGVxdWFsaXR5IGZvciBjeWNsaWMgc3RydWN0dXJlcy4gVGhlIGFsZ29yaXRobSBmb3IgZGV0ZWN0aW5nIGN5Y2xpY1xuICAgIC8vIHN0cnVjdHVyZXMgaXMgYWRhcHRlZCBmcm9tIEVTIDUuMSBzZWN0aW9uIDE1LjEyLjMsIGFic3RyYWN0IG9wZXJhdGlvbiBgSk9gLlxuXG4gICAgLy8gSW5pdGlhbGl6aW5nIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICAgIC8vIEl0J3MgZG9uZSBoZXJlIHNpbmNlIHdlIG9ubHkgbmVlZCB0aGVtIGZvciBvYmplY3RzIGFuZCBhcnJheXMgY29tcGFyaXNvbi5cbiAgICBhU3RhY2sgPSBhU3RhY2sgfHwgW107XG4gICAgYlN0YWNrID0gYlN0YWNrIHx8IFtdO1xuICAgIHZhciBsZW5ndGggPSBhU3RhY2subGVuZ3RoO1xuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgLy8gTGluZWFyIHNlYXJjaC4gUGVyZm9ybWFuY2UgaXMgaW52ZXJzZWx5IHByb3BvcnRpb25hbCB0byB0aGUgbnVtYmVyIG9mXG4gICAgICAvLyB1bmlxdWUgbmVzdGVkIHN0cnVjdHVyZXMuXG4gICAgICBpZiAoYVN0YWNrW2xlbmd0aF0gPT09IGEpIHJldHVybiBiU3RhY2tbbGVuZ3RoXSA9PT0gYjtcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGZpcnN0IG9iamVjdCB0byB0aGUgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG4gICAgYVN0YWNrLnB1c2goYSk7XG4gICAgYlN0YWNrLnB1c2goYik7XG5cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgYW5kIGFycmF5cy5cbiAgICBpZiAoYXJlQXJyYXlzKSB7XG4gICAgICAvLyBDb21wYXJlIGFycmF5IGxlbmd0aHMgdG8gZGV0ZXJtaW5lIGlmIGEgZGVlcCBjb21wYXJpc29uIGlzIG5lY2Vzc2FyeS5cbiAgICAgIGxlbmd0aCA9IGEubGVuZ3RoO1xuICAgICAgaWYgKGxlbmd0aCAhPT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIC8vIERlZXAgY29tcGFyZSB0aGUgY29udGVudHMsIGlnbm9yaW5nIG5vbi1udW1lcmljIHByb3BlcnRpZXMuXG4gICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgICAgaWYgKCFlcShhW2xlbmd0aF0sIGJbbGVuZ3RoXSwgYVN0YWNrLCBiU3RhY2spKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERlZXAgY29tcGFyZSBvYmplY3RzLlxuICAgICAgdmFyIGtleXMgPSBfLmtleXMoYSksIGtleTtcbiAgICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgICAgLy8gRW5zdXJlIHRoYXQgYm90aCBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUgbnVtYmVyIG9mIHByb3BlcnRpZXMgYmVmb3JlIGNvbXBhcmluZyBkZWVwIGVxdWFsaXR5LlxuICAgICAgaWYgKF8ua2V5cyhiKS5sZW5ndGggIT09IGxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAgIC8vIERlZXAgY29tcGFyZSBlYWNoIG1lbWJlclxuICAgICAgICBrZXkgPSBrZXlzW2xlbmd0aF07XG4gICAgICAgIGlmICghKF8uaGFzKGIsIGtleSkgJiYgZXEoYVtrZXldLCBiW2tleV0sIGFTdGFjaywgYlN0YWNrKSkpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBvYmplY3QgZnJvbSB0aGUgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG4gICAgYVN0YWNrLnBvcCgpO1xuICAgIGJTdGFjay5wb3AoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvLyBQZXJmb3JtIGEgZGVlcCBjb21wYXJpc29uIHRvIGNoZWNrIGlmIHR3byBvYmplY3RzIGFyZSBlcXVhbC5cbiAgXy5pc0VxdWFsID0gZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBlcShhLCBiKTtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIGFycmF5LCBzdHJpbmcsIG9yIG9iamVjdCBlbXB0eT9cbiAgLy8gQW4gXCJlbXB0eVwiIG9iamVjdCBoYXMgbm8gZW51bWVyYWJsZSBvd24tcHJvcGVydGllcy5cbiAgXy5pc0VtcHR5ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoaXNBcnJheUxpa2Uob2JqKSAmJiAoXy5pc0FycmF5KG9iaikgfHwgXy5pc1N0cmluZyhvYmopIHx8IF8uaXNBcmd1bWVudHMob2JqKSkpIHJldHVybiBvYmoubGVuZ3RoID09PSAwO1xuICAgIHJldHVybiBfLmtleXMob2JqKS5sZW5ndGggPT09IDA7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBhIERPTSBlbGVtZW50P1xuICBfLmlzRWxlbWVudCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiAhIShvYmogJiYgb2JqLm5vZGVUeXBlID09PSAxKTtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGFuIGFycmF5P1xuICAvLyBEZWxlZ2F0ZXMgdG8gRUNNQTUncyBuYXRpdmUgQXJyYXkuaXNBcnJheVxuICBfLmlzQXJyYXkgPSBuYXRpdmVJc0FycmF5IHx8IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YXJpYWJsZSBhbiBvYmplY3Q/XG4gIF8uaXNPYmplY3QgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgdHlwZSA9IHR5cGVvZiBvYmo7XG4gICAgcmV0dXJuIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgdHlwZSA9PT0gJ29iamVjdCcgJiYgISFvYmo7XG4gIH07XG5cbiAgLy8gQWRkIHNvbWUgaXNUeXBlIG1ldGhvZHM6IGlzQXJndW1lbnRzLCBpc0Z1bmN0aW9uLCBpc1N0cmluZywgaXNOdW1iZXIsIGlzRGF0ZSwgaXNSZWdFeHAsIGlzRXJyb3IuXG4gIF8uZWFjaChbJ0FyZ3VtZW50cycsICdGdW5jdGlvbicsICdTdHJpbmcnLCAnTnVtYmVyJywgJ0RhdGUnLCAnUmVnRXhwJywgJ0Vycm9yJ10sIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBfWydpcycgKyBuYW1lXSA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgJyArIG5hbWUgKyAnXSc7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gRGVmaW5lIGEgZmFsbGJhY2sgdmVyc2lvbiBvZiB0aGUgbWV0aG9kIGluIGJyb3dzZXJzIChhaGVtLCBJRSA8IDkpLCB3aGVyZVxuICAvLyB0aGVyZSBpc24ndCBhbnkgaW5zcGVjdGFibGUgXCJBcmd1bWVudHNcIiB0eXBlLlxuICBpZiAoIV8uaXNBcmd1bWVudHMoYXJndW1lbnRzKSkge1xuICAgIF8uaXNBcmd1bWVudHMgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBfLmhhcyhvYmosICdjYWxsZWUnKTtcbiAgICB9O1xuICB9XG5cbiAgLy8gT3B0aW1pemUgYGlzRnVuY3Rpb25gIGlmIGFwcHJvcHJpYXRlLiBXb3JrIGFyb3VuZCBzb21lIHR5cGVvZiBidWdzIGluIG9sZCB2OCxcbiAgLy8gSUUgMTEgKCMxNjIxKSwgYW5kIGluIFNhZmFyaSA4ICgjMTkyOSkuXG4gIGlmICh0eXBlb2YgLy4vICE9ICdmdW5jdGlvbicgJiYgdHlwZW9mIEludDhBcnJheSAhPSAnb2JqZWN0Jykge1xuICAgIF8uaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT0gJ2Z1bmN0aW9uJyB8fCBmYWxzZTtcbiAgICB9O1xuICB9XG5cbiAgLy8gSXMgYSBnaXZlbiBvYmplY3QgYSBmaW5pdGUgbnVtYmVyP1xuICBfLmlzRmluaXRlID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIGlzRmluaXRlKG9iaikgJiYgIWlzTmFOKHBhcnNlRmxvYXQob2JqKSk7XG4gIH07XG5cbiAgLy8gSXMgdGhlIGdpdmVuIHZhbHVlIGBOYU5gPyAoTmFOIGlzIHRoZSBvbmx5IG51bWJlciB3aGljaCBkb2VzIG5vdCBlcXVhbCBpdHNlbGYpLlxuICBfLmlzTmFOID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIF8uaXNOdW1iZXIob2JqKSAmJiBvYmogIT09ICtvYmo7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBhIGJvb2xlYW4/XG4gIF8uaXNCb29sZWFuID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdHJ1ZSB8fCBvYmogPT09IGZhbHNlIHx8IHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQm9vbGVhbl0nO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgZXF1YWwgdG8gbnVsbD9cbiAgXy5pc051bGwgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBudWxsO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFyaWFibGUgdW5kZWZpbmVkP1xuICBfLmlzVW5kZWZpbmVkID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdm9pZCAwO1xuICB9O1xuXG4gIC8vIFNob3J0Y3V0IGZ1bmN0aW9uIGZvciBjaGVja2luZyBpZiBhbiBvYmplY3QgaGFzIGEgZ2l2ZW4gcHJvcGVydHkgZGlyZWN0bHlcbiAgLy8gb24gaXRzZWxmIChpbiBvdGhlciB3b3Jkcywgbm90IG9uIGEgcHJvdG90eXBlKS5cbiAgXy5oYXMgPSBmdW5jdGlvbihvYmosIGtleSkge1xuICAgIHJldHVybiBvYmogIT0gbnVsbCAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbiAgfTtcblxuICAvLyBVdGlsaXR5IEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFJ1biBVbmRlcnNjb3JlLmpzIGluICpub0NvbmZsaWN0KiBtb2RlLCByZXR1cm5pbmcgdGhlIGBfYCB2YXJpYWJsZSB0byBpdHNcbiAgLy8gcHJldmlvdXMgb3duZXIuIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIFVuZGVyc2NvcmUgb2JqZWN0LlxuICBfLm5vQ29uZmxpY3QgPSBmdW5jdGlvbigpIHtcbiAgICByb290Ll8gPSBwcmV2aW91c1VuZGVyc2NvcmU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLy8gS2VlcCB0aGUgaWRlbnRpdHkgZnVuY3Rpb24gYXJvdW5kIGZvciBkZWZhdWx0IGl0ZXJhdGVlcy5cbiAgXy5pZGVudGl0eSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIC8vIFByZWRpY2F0ZS1nZW5lcmF0aW5nIGZ1bmN0aW9ucy4gT2Z0ZW4gdXNlZnVsIG91dHNpZGUgb2YgVW5kZXJzY29yZS5cbiAgXy5jb25zdGFudCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gIH07XG5cbiAgXy5ub29wID0gZnVuY3Rpb24oKXt9O1xuXG4gIF8ucHJvcGVydHkgPSBwcm9wZXJ0eTtcblxuICAvLyBHZW5lcmF0ZXMgYSBmdW5jdGlvbiBmb3IgYSBnaXZlbiBvYmplY3QgdGhhdCByZXR1cm5zIGEgZ2l2ZW4gcHJvcGVydHkuXG4gIF8ucHJvcGVydHlPZiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT0gbnVsbCA/IGZ1bmN0aW9uKCl7fSA6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIHByZWRpY2F0ZSBmb3IgY2hlY2tpbmcgd2hldGhlciBhbiBvYmplY3QgaGFzIGEgZ2l2ZW4gc2V0IG9mXG4gIC8vIGBrZXk6dmFsdWVgIHBhaXJzLlxuICBfLm1hdGNoZXIgPSBfLm1hdGNoZXMgPSBmdW5jdGlvbihhdHRycykge1xuICAgIGF0dHJzID0gXy5leHRlbmRPd24oe30sIGF0dHJzKTtcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gXy5pc01hdGNoKG9iaiwgYXR0cnMpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUnVuIGEgZnVuY3Rpb24gKipuKiogdGltZXMuXG4gIF8udGltZXMgPSBmdW5jdGlvbihuLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIHZhciBhY2N1bSA9IEFycmF5KE1hdGgubWF4KDAsIG4pKTtcbiAgICBpdGVyYXRlZSA9IG9wdGltaXplQ2IoaXRlcmF0ZWUsIGNvbnRleHQsIDEpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSBhY2N1bVtpXSA9IGl0ZXJhdGVlKGkpO1xuICAgIHJldHVybiBhY2N1bTtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiBhbmQgbWF4IChpbmNsdXNpdmUpLlxuICBfLnJhbmRvbSA9IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XG4gICAgaWYgKG1heCA9PSBudWxsKSB7XG4gICAgICBtYXggPSBtaW47XG4gICAgICBtaW4gPSAwO1xuICAgIH1cbiAgICByZXR1cm4gbWluICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKTtcbiAgfTtcblxuICAvLyBBIChwb3NzaWJseSBmYXN0ZXIpIHdheSB0byBnZXQgdGhlIGN1cnJlbnQgdGltZXN0YW1wIGFzIGFuIGludGVnZXIuXG4gIF8ubm93ID0gRGF0ZS5ub3cgfHwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9O1xuXG4gICAvLyBMaXN0IG9mIEhUTUwgZW50aXRpZXMgZm9yIGVzY2FwaW5nLlxuICB2YXIgZXNjYXBlTWFwID0ge1xuICAgICcmJzogJyZhbXA7JyxcbiAgICAnPCc6ICcmbHQ7JyxcbiAgICAnPic6ICcmZ3Q7JyxcbiAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICBcIidcIjogJyYjeDI3OycsXG4gICAgJ2AnOiAnJiN4NjA7J1xuICB9O1xuICB2YXIgdW5lc2NhcGVNYXAgPSBfLmludmVydChlc2NhcGVNYXApO1xuXG4gIC8vIEZ1bmN0aW9ucyBmb3IgZXNjYXBpbmcgYW5kIHVuZXNjYXBpbmcgc3RyaW5ncyB0by9mcm9tIEhUTUwgaW50ZXJwb2xhdGlvbi5cbiAgdmFyIGNyZWF0ZUVzY2FwZXIgPSBmdW5jdGlvbihtYXApIHtcbiAgICB2YXIgZXNjYXBlciA9IGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICByZXR1cm4gbWFwW21hdGNoXTtcbiAgICB9O1xuICAgIC8vIFJlZ2V4ZXMgZm9yIGlkZW50aWZ5aW5nIGEga2V5IHRoYXQgbmVlZHMgdG8gYmUgZXNjYXBlZFxuICAgIHZhciBzb3VyY2UgPSAnKD86JyArIF8ua2V5cyhtYXApLmpvaW4oJ3wnKSArICcpJztcbiAgICB2YXIgdGVzdFJlZ2V4cCA9IFJlZ0V4cChzb3VyY2UpO1xuICAgIHZhciByZXBsYWNlUmVnZXhwID0gUmVnRXhwKHNvdXJjZSwgJ2cnKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICBzdHJpbmcgPSBzdHJpbmcgPT0gbnVsbCA/ICcnIDogJycgKyBzdHJpbmc7XG4gICAgICByZXR1cm4gdGVzdFJlZ2V4cC50ZXN0KHN0cmluZykgPyBzdHJpbmcucmVwbGFjZShyZXBsYWNlUmVnZXhwLCBlc2NhcGVyKSA6IHN0cmluZztcbiAgICB9O1xuICB9O1xuICBfLmVzY2FwZSA9IGNyZWF0ZUVzY2FwZXIoZXNjYXBlTWFwKTtcbiAgXy51bmVzY2FwZSA9IGNyZWF0ZUVzY2FwZXIodW5lc2NhcGVNYXApO1xuXG4gIC8vIElmIHRoZSB2YWx1ZSBvZiB0aGUgbmFtZWQgYHByb3BlcnR5YCBpcyBhIGZ1bmN0aW9uIHRoZW4gaW52b2tlIGl0IHdpdGggdGhlXG4gIC8vIGBvYmplY3RgIGFzIGNvbnRleHQ7IG90aGVyd2lzZSwgcmV0dXJuIGl0LlxuICBfLnJlc3VsdCA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHksIGZhbGxiYWNrKSB7XG4gICAgdmFyIHZhbHVlID0gb2JqZWN0ID09IG51bGwgPyB2b2lkIDAgOiBvYmplY3RbcHJvcGVydHldO1xuICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgICB2YWx1ZSA9IGZhbGxiYWNrO1xuICAgIH1cbiAgICByZXR1cm4gXy5pc0Z1bmN0aW9uKHZhbHVlKSA/IHZhbHVlLmNhbGwob2JqZWN0KSA6IHZhbHVlO1xuICB9O1xuXG4gIC8vIEdlbmVyYXRlIGEgdW5pcXVlIGludGVnZXIgaWQgKHVuaXF1ZSB3aXRoaW4gdGhlIGVudGlyZSBjbGllbnQgc2Vzc2lvbikuXG4gIC8vIFVzZWZ1bCBmb3IgdGVtcG9yYXJ5IERPTSBpZHMuXG4gIHZhciBpZENvdW50ZXIgPSAwO1xuICBfLnVuaXF1ZUlkID0gZnVuY3Rpb24ocHJlZml4KSB7XG4gICAgdmFyIGlkID0gKytpZENvdW50ZXIgKyAnJztcbiAgICByZXR1cm4gcHJlZml4ID8gcHJlZml4ICsgaWQgOiBpZDtcbiAgfTtcblxuICAvLyBCeSBkZWZhdWx0LCBVbmRlcnNjb3JlIHVzZXMgRVJCLXN0eWxlIHRlbXBsYXRlIGRlbGltaXRlcnMsIGNoYW5nZSB0aGVcbiAgLy8gZm9sbG93aW5nIHRlbXBsYXRlIHNldHRpbmdzIHRvIHVzZSBhbHRlcm5hdGl2ZSBkZWxpbWl0ZXJzLlxuICBfLnRlbXBsYXRlU2V0dGluZ3MgPSB7XG4gICAgZXZhbHVhdGUgICAgOiAvPCUoW1xcc1xcU10rPyklPi9nLFxuICAgIGludGVycG9sYXRlIDogLzwlPShbXFxzXFxTXSs/KSU+L2csXG4gICAgZXNjYXBlICAgICAgOiAvPCUtKFtcXHNcXFNdKz8pJT4vZ1xuICB9O1xuXG4gIC8vIFdoZW4gY3VzdG9taXppbmcgYHRlbXBsYXRlU2V0dGluZ3NgLCBpZiB5b3UgZG9uJ3Qgd2FudCB0byBkZWZpbmUgYW5cbiAgLy8gaW50ZXJwb2xhdGlvbiwgZXZhbHVhdGlvbiBvciBlc2NhcGluZyByZWdleCwgd2UgbmVlZCBvbmUgdGhhdCBpc1xuICAvLyBndWFyYW50ZWVkIG5vdCB0byBtYXRjaC5cbiAgdmFyIG5vTWF0Y2ggPSAvKC4pXi87XG5cbiAgLy8gQ2VydGFpbiBjaGFyYWN0ZXJzIG5lZWQgdG8gYmUgZXNjYXBlZCBzbyB0aGF0IHRoZXkgY2FuIGJlIHB1dCBpbnRvIGFcbiAgLy8gc3RyaW5nIGxpdGVyYWwuXG4gIHZhciBlc2NhcGVzID0ge1xuICAgIFwiJ1wiOiAgICAgIFwiJ1wiLFxuICAgICdcXFxcJzogICAgICdcXFxcJyxcbiAgICAnXFxyJzogICAgICdyJyxcbiAgICAnXFxuJzogICAgICduJyxcbiAgICAnXFx1MjAyOCc6ICd1MjAyOCcsXG4gICAgJ1xcdTIwMjknOiAndTIwMjknXG4gIH07XG5cbiAgdmFyIGVzY2FwZXIgPSAvXFxcXHwnfFxccnxcXG58XFx1MjAyOHxcXHUyMDI5L2c7XG5cbiAgdmFyIGVzY2FwZUNoYXIgPSBmdW5jdGlvbihtYXRjaCkge1xuICAgIHJldHVybiAnXFxcXCcgKyBlc2NhcGVzW21hdGNoXTtcbiAgfTtcblxuICAvLyBKYXZhU2NyaXB0IG1pY3JvLXRlbXBsYXRpbmcsIHNpbWlsYXIgdG8gSm9obiBSZXNpZydzIGltcGxlbWVudGF0aW9uLlxuICAvLyBVbmRlcnNjb3JlIHRlbXBsYXRpbmcgaGFuZGxlcyBhcmJpdHJhcnkgZGVsaW1pdGVycywgcHJlc2VydmVzIHdoaXRlc3BhY2UsXG4gIC8vIGFuZCBjb3JyZWN0bHkgZXNjYXBlcyBxdW90ZXMgd2l0aGluIGludGVycG9sYXRlZCBjb2RlLlxuICAvLyBOQjogYG9sZFNldHRpbmdzYCBvbmx5IGV4aXN0cyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gIF8udGVtcGxhdGUgPSBmdW5jdGlvbih0ZXh0LCBzZXR0aW5ncywgb2xkU2V0dGluZ3MpIHtcbiAgICBpZiAoIXNldHRpbmdzICYmIG9sZFNldHRpbmdzKSBzZXR0aW5ncyA9IG9sZFNldHRpbmdzO1xuICAgIHNldHRpbmdzID0gXy5kZWZhdWx0cyh7fSwgc2V0dGluZ3MsIF8udGVtcGxhdGVTZXR0aW5ncyk7XG5cbiAgICAvLyBDb21iaW5lIGRlbGltaXRlcnMgaW50byBvbmUgcmVndWxhciBleHByZXNzaW9uIHZpYSBhbHRlcm5hdGlvbi5cbiAgICB2YXIgbWF0Y2hlciA9IFJlZ0V4cChbXG4gICAgICAoc2V0dGluZ3MuZXNjYXBlIHx8IG5vTWF0Y2gpLnNvdXJjZSxcbiAgICAgIChzZXR0aW5ncy5pbnRlcnBvbGF0ZSB8fCBub01hdGNoKS5zb3VyY2UsXG4gICAgICAoc2V0dGluZ3MuZXZhbHVhdGUgfHwgbm9NYXRjaCkuc291cmNlXG4gICAgXS5qb2luKCd8JykgKyAnfCQnLCAnZycpO1xuXG4gICAgLy8gQ29tcGlsZSB0aGUgdGVtcGxhdGUgc291cmNlLCBlc2NhcGluZyBzdHJpbmcgbGl0ZXJhbHMgYXBwcm9wcmlhdGVseS5cbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBzb3VyY2UgPSBcIl9fcCs9J1wiO1xuICAgIHRleHQucmVwbGFjZShtYXRjaGVyLCBmdW5jdGlvbihtYXRjaCwgZXNjYXBlLCBpbnRlcnBvbGF0ZSwgZXZhbHVhdGUsIG9mZnNldCkge1xuICAgICAgc291cmNlICs9IHRleHQuc2xpY2UoaW5kZXgsIG9mZnNldCkucmVwbGFjZShlc2NhcGVyLCBlc2NhcGVDaGFyKTtcbiAgICAgIGluZGV4ID0gb2Zmc2V0ICsgbWF0Y2gubGVuZ3RoO1xuXG4gICAgICBpZiAoZXNjYXBlKSB7XG4gICAgICAgIHNvdXJjZSArPSBcIicrXFxuKChfX3Q9KFwiICsgZXNjYXBlICsgXCIpKT09bnVsbD8nJzpfLmVzY2FwZShfX3QpKStcXG4nXCI7XG4gICAgICB9IGVsc2UgaWYgKGludGVycG9sYXRlKSB7XG4gICAgICAgIHNvdXJjZSArPSBcIicrXFxuKChfX3Q9KFwiICsgaW50ZXJwb2xhdGUgKyBcIikpPT1udWxsPycnOl9fdCkrXFxuJ1wiO1xuICAgICAgfSBlbHNlIGlmIChldmFsdWF0ZSkge1xuICAgICAgICBzb3VyY2UgKz0gXCInO1xcblwiICsgZXZhbHVhdGUgKyBcIlxcbl9fcCs9J1wiO1xuICAgICAgfVxuXG4gICAgICAvLyBBZG9iZSBWTXMgbmVlZCB0aGUgbWF0Y2ggcmV0dXJuZWQgdG8gcHJvZHVjZSB0aGUgY29ycmVjdCBvZmZlc3QuXG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSk7XG4gICAgc291cmNlICs9IFwiJztcXG5cIjtcblxuICAgIC8vIElmIGEgdmFyaWFibGUgaXMgbm90IHNwZWNpZmllZCwgcGxhY2UgZGF0YSB2YWx1ZXMgaW4gbG9jYWwgc2NvcGUuXG4gICAgaWYgKCFzZXR0aW5ncy52YXJpYWJsZSkgc291cmNlID0gJ3dpdGgob2JqfHx7fSl7XFxuJyArIHNvdXJjZSArICd9XFxuJztcblxuICAgIHNvdXJjZSA9IFwidmFyIF9fdCxfX3A9JycsX19qPUFycmF5LnByb3RvdHlwZS5qb2luLFwiICtcbiAgICAgIFwicHJpbnQ9ZnVuY3Rpb24oKXtfX3ArPV9fai5jYWxsKGFyZ3VtZW50cywnJyk7fTtcXG5cIiArXG4gICAgICBzb3VyY2UgKyAncmV0dXJuIF9fcDtcXG4nO1xuXG4gICAgdHJ5IHtcbiAgICAgIHZhciByZW5kZXIgPSBuZXcgRnVuY3Rpb24oc2V0dGluZ3MudmFyaWFibGUgfHwgJ29iaicsICdfJywgc291cmNlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuXG4gICAgdmFyIHRlbXBsYXRlID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgcmV0dXJuIHJlbmRlci5jYWxsKHRoaXMsIGRhdGEsIF8pO1xuICAgIH07XG5cbiAgICAvLyBQcm92aWRlIHRoZSBjb21waWxlZCBzb3VyY2UgYXMgYSBjb252ZW5pZW5jZSBmb3IgcHJlY29tcGlsYXRpb24uXG4gICAgdmFyIGFyZ3VtZW50ID0gc2V0dGluZ3MudmFyaWFibGUgfHwgJ29iaic7XG4gICAgdGVtcGxhdGUuc291cmNlID0gJ2Z1bmN0aW9uKCcgKyBhcmd1bWVudCArICcpe1xcbicgKyBzb3VyY2UgKyAnfSc7XG5cbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH07XG5cbiAgLy8gQWRkIGEgXCJjaGFpblwiIGZ1bmN0aW9uLiBTdGFydCBjaGFpbmluZyBhIHdyYXBwZWQgVW5kZXJzY29yZSBvYmplY3QuXG4gIF8uY2hhaW4gPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfKG9iaik7XG4gICAgaW5zdGFuY2UuX2NoYWluID0gdHJ1ZTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH07XG5cbiAgLy8gT09QXG4gIC8vIC0tLS0tLS0tLS0tLS0tLVxuICAvLyBJZiBVbmRlcnNjb3JlIGlzIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLCBpdCByZXR1cm5zIGEgd3JhcHBlZCBvYmplY3QgdGhhdFxuICAvLyBjYW4gYmUgdXNlZCBPTy1zdHlsZS4gVGhpcyB3cmFwcGVyIGhvbGRzIGFsdGVyZWQgdmVyc2lvbnMgb2YgYWxsIHRoZVxuICAvLyB1bmRlcnNjb3JlIGZ1bmN0aW9ucy4gV3JhcHBlZCBvYmplY3RzIG1heSBiZSBjaGFpbmVkLlxuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byBjb250aW51ZSBjaGFpbmluZyBpbnRlcm1lZGlhdGUgcmVzdWx0cy5cbiAgdmFyIHJlc3VsdCA9IGZ1bmN0aW9uKGluc3RhbmNlLCBvYmopIHtcbiAgICByZXR1cm4gaW5zdGFuY2UuX2NoYWluID8gXyhvYmopLmNoYWluKCkgOiBvYmo7XG4gIH07XG5cbiAgLy8gQWRkIHlvdXIgb3duIGN1c3RvbSBmdW5jdGlvbnMgdG8gdGhlIFVuZGVyc2NvcmUgb2JqZWN0LlxuICBfLm1peGluID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgXy5lYWNoKF8uZnVuY3Rpb25zKG9iaiksIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHZhciBmdW5jID0gX1tuYW1lXSA9IG9ialtuYW1lXTtcbiAgICAgIF8ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhcmdzID0gW3RoaXMuX3dyYXBwZWRdO1xuICAgICAgICBwdXNoLmFwcGx5KGFyZ3MsIGFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiByZXN1bHQodGhpcywgZnVuYy5hcHBseShfLCBhcmdzKSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIEFkZCBhbGwgb2YgdGhlIFVuZGVyc2NvcmUgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyIG9iamVjdC5cbiAgXy5taXhpbihfKTtcblxuICAvLyBBZGQgYWxsIG11dGF0b3IgQXJyYXkgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyLlxuICBfLmVhY2goWydwb3AnLCAncHVzaCcsICdyZXZlcnNlJywgJ3NoaWZ0JywgJ3NvcnQnLCAnc3BsaWNlJywgJ3Vuc2hpZnQnXSwgZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBtZXRob2QgPSBBcnJheVByb3RvW25hbWVdO1xuICAgIF8ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgb2JqID0gdGhpcy5fd3JhcHBlZDtcbiAgICAgIG1ldGhvZC5hcHBseShvYmosIGFyZ3VtZW50cyk7XG4gICAgICBpZiAoKG5hbWUgPT09ICdzaGlmdCcgfHwgbmFtZSA9PT0gJ3NwbGljZScpICYmIG9iai5sZW5ndGggPT09IDApIGRlbGV0ZSBvYmpbMF07XG4gICAgICByZXR1cm4gcmVzdWx0KHRoaXMsIG9iaik7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gQWRkIGFsbCBhY2Nlc3NvciBBcnJheSBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIuXG4gIF8uZWFjaChbJ2NvbmNhdCcsICdqb2luJywgJ3NsaWNlJ10sIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgbWV0aG9kID0gQXJyYXlQcm90b1tuYW1lXTtcbiAgICBfLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHJlc3VsdCh0aGlzLCBtZXRob2QuYXBwbHkodGhpcy5fd3JhcHBlZCwgYXJndW1lbnRzKSk7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gRXh0cmFjdHMgdGhlIHJlc3VsdCBmcm9tIGEgd3JhcHBlZCBhbmQgY2hhaW5lZCBvYmplY3QuXG4gIF8ucHJvdG90eXBlLnZhbHVlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dyYXBwZWQ7XG4gIH07XG5cbiAgLy8gUHJvdmlkZSB1bndyYXBwaW5nIHByb3h5IGZvciBzb21lIG1ldGhvZHMgdXNlZCBpbiBlbmdpbmUgb3BlcmF0aW9uc1xuICAvLyBzdWNoIGFzIGFyaXRobWV0aWMgYW5kIEpTT04gc3RyaW5naWZpY2F0aW9uLlxuICBfLnByb3RvdHlwZS52YWx1ZU9mID0gXy5wcm90b3R5cGUudG9KU09OID0gXy5wcm90b3R5cGUudmFsdWU7XG5cbiAgXy5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gJycgKyB0aGlzLl93cmFwcGVkO1xuICB9O1xuXG4gIC8vIEFNRCByZWdpc3RyYXRpb24gaGFwcGVucyBhdCB0aGUgZW5kIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQU1EIGxvYWRlcnNcbiAgLy8gdGhhdCBtYXkgbm90IGVuZm9yY2UgbmV4dC10dXJuIHNlbWFudGljcyBvbiBtb2R1bGVzLiBFdmVuIHRob3VnaCBnZW5lcmFsXG4gIC8vIHByYWN0aWNlIGZvciBBTUQgcmVnaXN0cmF0aW9uIGlzIHRvIGJlIGFub255bW91cywgdW5kZXJzY29yZSByZWdpc3RlcnNcbiAgLy8gYXMgYSBuYW1lZCBtb2R1bGUgYmVjYXVzZSwgbGlrZSBqUXVlcnksIGl0IGlzIGEgYmFzZSBsaWJyYXJ5IHRoYXQgaXNcbiAgLy8gcG9wdWxhciBlbm91Z2ggdG8gYmUgYnVuZGxlZCBpbiBhIHRoaXJkIHBhcnR5IGxpYiwgYnV0IG5vdCBiZSBwYXJ0IG9mXG4gIC8vIGFuIEFNRCBsb2FkIHJlcXVlc3QuIFRob3NlIGNhc2VzIGNvdWxkIGdlbmVyYXRlIGFuIGVycm9yIHdoZW4gYW5cbiAgLy8gYW5vbnltb3VzIGRlZmluZSgpIGlzIGNhbGxlZCBvdXRzaWRlIG9mIGEgbG9hZGVyIHJlcXVlc3QuXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoJ3VuZGVyc2NvcmUnLCBbXSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gXztcbiAgICB9KTtcbiAgfVxufS5jYWxsKHRoaXMpKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudFF1ZXVlO1xuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB2YXIgaSA9IC0xO1xuICAgICAgICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAgICAgICAgICBjdXJyZW50UXVldWVbaV0oKTtcbiAgICAgICAgfVxuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG59XG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHF1ZXVlLnB1c2goZnVuKTtcbiAgICBpZiAoIWRyYWluaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJleHBvcnRzLmRlZXBHZXQgPSBmdW5jdGlvbihvYmosIHBhdGgsIGZhbGxiYWNrVmFsdWUpIHtcbiAgaWYgKHVuZGVmaW5lZCA9PT0gb2JqIHx8IG51bGwgPT09IG9iaikge1xuICAgIHJldHVybiBmYWxsYmFja1ZhbHVlO1xuICB9XG5cbiAgdmFyIGZpZWxkcyA9IHBhdGguc3BsaXQoJy4nKSxcbiAgICByZXN1bHQgPSBvYmo7XG5cbiAgZm9yICh2YXIgaT0wOyBpPGZpZWxkcy5sZW5ndGg7ICsraSkge1xuICAgIGlmICgnb2JqZWN0JyAhPT0gIHR5cGVvZiByZXN1bHQpIHtcbiAgICAgIHJldHVybiBmYWxsYmFja1ZhbHVlO1xuICAgIH1cblxuICAgIHJlc3VsdCA9IHJlc3VsdFtmaWVsZHNbaV1dO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdCB8fCBmYWxsYmFja1ZhbHVlO1xufTtcblxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcIlRYXCI6e1wiYWJpbGVuZVwiOntcIm5hbWVcIjpcIkFiaWxlbmVcIixcImxhdFwiOjMyLjQ0ODczNjQsXCJsbmdcIjotOTkuNzMzMTQzOTAwMDAwMDJ9LFwiYWxsZW5cIjp7XCJuYW1lXCI6XCJBbGxlblwiLFwibGF0XCI6MzMuMTAzMTc0NCxcImxuZ1wiOi05Ni42NzA1NTAzMDAwMDAwMn0sXCJhbWFyaWxsb1wiOntcIm5hbWVcIjpcIkFtYXJpbGxvXCIsXCJsYXRcIjozNS4yMjE5OTcxLFwibG5nXCI6LTEwMS44MzEyOTY5fSxcImFybGluZ3RvblwiOntcIm5hbWVcIjpcIkFybGluZ3RvblwiLFwibGF0XCI6MzIuNzM1Njg3LFwibG5nXCI6LTk3LjEwODA2NTU5OTk5OTk5fSxcImF0YXNjb2NpdGFcIjp7XCJuYW1lXCI6XCJBdGFzY29jaXRhXCIsXCJsYXRcIjoyOS45OTg4MzA1OTk5OTk5OSxcImxuZ1wiOi05NS4xNzY1OTc4fSxcImF1c3RpblwiOntcIm5hbWVcIjpcIkF1c3RpblwiLFwibGF0XCI6MzAuMjY3MTUzLFwibG5nXCI6LTk3Ljc0MzA2MDh9LFwiYmF5dG93blwiOntcIm5hbWVcIjpcIkJheXRvd25cIixcImxhdFwiOjI5LjczNTUwNDcsXCJsbmdcIjotOTQuOTc3NDI3NDAwMDAwMDF9LFwiYmVhdW1vbnRcIjp7XCJuYW1lXCI6XCJCZWF1bW9udFwiLFwibGF0XCI6MzAuMDgwMTc0LFwibG5nXCI6LTk0LjEyNjU1NjJ9LFwiYmVkZm9yZFwiOntcIm5hbWVcIjpcIkJlZGZvcmRcIixcImxhdFwiOjMyLjg0NDAxNyxcImxuZ1wiOi05Ny4xNDMwNjcxfSxcImJyb3duc3ZpbGxlXCI6e1wibmFtZVwiOlwiQnJvd25zdmlsbGVcIixcImxhdFwiOjI1LjkwMTc0NzIsXCJsbmdcIjotOTcuNDk3NDgzOH0sXCJicnlhblwiOntcIm5hbWVcIjpcIkJyeWFuXCIsXCJsYXRcIjozMC42NzQzNjQzLFwibG5nXCI6LTk2LjM2OTk2MzJ9LFwiY2Fycm9sbHRvblwiOntcIm5hbWVcIjpcIkNhcnJvbGx0b25cIixcImxhdFwiOjMyLjk3NTY0MTUsXCJsbmdcIjotOTYuODg5OTYzNn0sXCJjZWRhciBoaWxsXCI6e1wibmFtZVwiOlwiQ2VkYXIgSGlsbFwiLFwibGF0XCI6MzIuNTg4NDY4OSxcImxuZ1wiOi05Ni45NTYxMTUyfSxcImNlZGFyIHBhcmtcIjp7XCJuYW1lXCI6XCJDZWRhciBQYXJrXCIsXCJsYXRcIjozMC41MDUxOTgsXCJsbmdcIjotOTcuODIwMjg4OH0sXCJjb2xsZWdlIHN0YXRpb25cIjp7XCJuYW1lXCI6XCJDb2xsZWdlIFN0YXRpb25cIixcImxhdFwiOjMwLjYyNzk3NyxcImxuZ1wiOi05Ni4zMzQ0MDY4fSxcImNvbnJvZVwiOntcIm5hbWVcIjpcIkNvbnJvZVwiLFwibGF0XCI6MzAuMzExODc2OSxcImxuZ1wiOi05NS40NTYwNTExOTk5OTk5OX0sXCJjb3JwdXMgY2hyaXN0aVwiOntcIm5hbWVcIjpcIkNvcnB1cyBDaHJpc3RpXCIsXCJsYXRcIjoyNy44MDA1ODI4LFwibG5nXCI6LTk3LjM5NjM4MDk5OTk5OTk5fSxcImRhbGxhc1wiOntcIm5hbWVcIjpcIkRhbGxhc1wiLFwibGF0XCI6MzIuODAyOTU1LFwibG5nXCI6LTk2Ljc2OTkyM30sXCJkZW50b25cIjp7XCJuYW1lXCI6XCJEZW50b25cIixcImxhdFwiOjMzLjIxNDg0MTIsXCJsbmdcIjotOTcuMTMzMDY4Mjk5OTk5OTl9LFwiZGVzb3RvXCI6e1wibmFtZVwiOlwiRGVTb3RvXCIsXCJsYXRcIjozMi41ODk4NTc3LFwibG5nXCI6LTk2Ljg1Njk0NTA5OTk5OTk5fSxcImVkaW5idXJnXCI6e1wibmFtZVwiOlwiRWRpbmJ1cmdcIixcImxhdFwiOjI2LjMwMTczNzQsXCJsbmdcIjotOTguMTYzMzQzMn0sXCJlbCBwYXNvXCI6e1wibmFtZVwiOlwiRWwgUGFzb1wiLFwibGF0XCI6MzEuNzU4NzE5OCxcImxuZ1wiOi0xMDYuNDg2OTMxNH0sXCJldWxlc3NcIjp7XCJuYW1lXCI6XCJFdWxlc3NcIixcImxhdFwiOjMyLjgzNzA3MjcsXCJsbmdcIjotOTcuMDgxOTU0MDk5OTk5OTl9LFwiZmxvd2VyIG1vdW5kXCI6e1wibmFtZVwiOlwiRmxvd2VyIE1vdW5kXCIsXCJsYXRcIjozMy4wMTQ1NjczLFwibG5nXCI6LTk3LjA5Njk1NTJ9LFwiZm9ydCB3b3J0aFwiOntcIm5hbWVcIjpcIkZvcnQgV29ydGhcIixcImxhdFwiOjMyLjcyNTQwOSxcImxuZ1wiOi05Ny4zMjA4NDk2fSxcImZyaXNjb1wiOntcIm5hbWVcIjpcIkZyaXNjb1wiLFwibGF0XCI6MzMuMTUwNjc0NCxcImxuZ1wiOi05Ni44MjM2MTE1OTk5OTk5OX0sXCJnYWx2ZXN0b25cIjp7XCJuYW1lXCI6XCJHYWx2ZXN0b25cIixcImxhdFwiOjI5LjMwMTM0NzksXCJsbmdcIjotOTQuNzk3Njk1OH0sXCJnYXJsYW5kXCI6e1wibmFtZVwiOlwiR2FybGFuZFwiLFwibGF0XCI6MzIuOTEyNjI0LFwibG5nXCI6LTk2LjYzODg4MzI5OTk5OTk5fSxcImdlb3JnZXRvd25cIjp7XCJuYW1lXCI6XCJHZW9yZ2V0b3duXCIsXCJsYXRcIjozMC42MzI2OTQyLFwibG5nXCI6LTk3LjY3NzIzMTF9LFwiZ3JhbmQgcHJhaXJpZVwiOntcIm5hbWVcIjpcIkdyYW5kIFByYWlyaWVcIixcImxhdFwiOjMyLjc0NTk2NDUsXCJsbmdcIjotOTYuOTk3Nzg0NTk5OTk5OTl9LFwiZ3JhcGV2aW5lXCI6e1wibmFtZVwiOlwiR3JhcGV2aW5lXCIsXCJsYXRcIjozMi45MzQyOTE5LFwibG5nXCI6LTk3LjA3ODA2NTR9LFwiaGFsdG9tIGNpdHlcIjp7XCJuYW1lXCI6XCJIYWx0b20gQ2l0eVwiLFwibGF0XCI6MzIuNzk5NTczOCxcImxuZ1wiOi05Ny4yNjkxODE2OTk5OTk5OX0sXCJoYXJsaW5nZW5cIjp7XCJuYW1lXCI6XCJIYXJsaW5nZW5cIixcImxhdFwiOjI2LjE5MDYzMDYsXCJsbmdcIjotOTcuNjk2MTAyNTk5OTk5OTl9LFwiaG91c3RvblwiOntcIm5hbWVcIjpcIkhvdXN0b25cIixcImxhdFwiOjI5Ljc2MDE5MjcsXCJsbmdcIjotOTUuMzY5Mzg5NTk5OTk5OTl9LFwiaXJ2aW5nXCI6e1wibmFtZVwiOlwiSXJ2aW5nXCIsXCJsYXRcIjozMi44MTQwMTc3LFwibG5nXCI6LTk2Ljk0ODg5NDV9LFwia2VsbGVyXCI6e1wibmFtZVwiOlwiS2VsbGVyXCIsXCJsYXRcIjozMi45MzQ1NzAxLFwibG5nXCI6LTk3LjI1MTY4Mn0sXCJraWxsZWVuXCI6e1wibmFtZVwiOlwiS2lsbGVlblwiLFwibGF0XCI6MzEuMTE3MTE5NCxcImxuZ1wiOi05Ny43Mjc3OTU4OTk5OTk5OX0sXCJsYXJlZG9cIjp7XCJuYW1lXCI6XCJMYXJlZG9cIixcImxhdFwiOjI3LjUwNjQwNyxcImxuZ1wiOi05OS41MDc1NDIxfSxcImxlYWd1ZSBjaXR5XCI6e1wibmFtZVwiOlwiTGVhZ3VlIENpdHlcIixcImxhdFwiOjI5LjUwNzQ1MzgsXCJsbmdcIjotOTUuMDk0OTMwM30sXCJsZXdpc3ZpbGxlXCI6e1wibmFtZVwiOlwiTGV3aXN2aWxsZVwiLFwibGF0XCI6MzMuMDQ2MjMzLFwibG5nXCI6LTk2Ljk5NDE3NH0sXCJsb25ndmlld1wiOntcIm5hbWVcIjpcIkxvbmd2aWV3XCIsXCJsYXRcIjozMi41MDA3MDM3LFwibG5nXCI6LTk0Ljc0MDQ4OTA5OTk5OTk5fSxcImx1YmJvY2tcIjp7XCJuYW1lXCI6XCJMdWJib2NrXCIsXCJsYXRcIjozMy41Nzc4NjMxLFwibG5nXCI6LTEwMS44NTUxNjY1fSxcIm1jYWxsZW5cIjp7XCJuYW1lXCI6XCJNY0FsbGVuXCIsXCJsYXRcIjoyNi4yMDM0MDcxLFwibG5nXCI6LTk4LjIzMDAxMjM5OTk5OTk5fSxcIm1ja2lubmV5XCI6e1wibmFtZVwiOlwiTWNLaW5uZXlcIixcImxhdFwiOjMzLjE5NzI0NjUsXCJsbmdcIjotOTYuNjM5NzgyMn0sXCJtYW5zZmllbGRcIjp7XCJuYW1lXCI6XCJNYW5zZmllbGRcIixcImxhdFwiOjMyLjU2MzE5MjQsXCJsbmdcIjotOTcuMTQxNjc2OH0sXCJtZXNxdWl0ZVwiOntcIm5hbWVcIjpcIk1lc3F1aXRlXCIsXCJsYXRcIjozMi43NjY3OTU1MDAwMDAwMSxcImxuZ1wiOi05Ni41OTkxNTkzfSxcIm1pZGxhbmRcIjp7XCJuYW1lXCI6XCJNaWRsYW5kXCIsXCJsYXRcIjozMS45OTczNDU2LFwibG5nXCI6LTEwMi4wNzc5MTQ2fSxcIm1pc3Npb25cIjp7XCJuYW1lXCI6XCJNaXNzaW9uXCIsXCJsYXRcIjoyNi4yMTU5MDY2LFwibG5nXCI6LTk4LjMyNTI5MzE5OTk5OTk5fSxcIm1pc3NvdXJpIGNpdHlcIjp7XCJuYW1lXCI6XCJNaXNzb3VyaSBDaXR5XCIsXCJsYXRcIjoyOS42MTg1NjY5LFwibG5nXCI6LTk1LjUzNzcyMTV9LFwibmV3IGJyYXVuZmVsc1wiOntcIm5hbWVcIjpcIk5ldyBCcmF1bmZlbHNcIixcImxhdFwiOjI5LjcwMzAwMjQsXCJsbmdcIjotOTguMTI0NDUzMX0sXCJub3J0aCByaWNobGFuZCBoaWxsc1wiOntcIm5hbWVcIjpcIk5vcnRoIFJpY2hsYW5kIEhpbGxzXCIsXCJsYXRcIjozMi44MzQyOTUyLFwibG5nXCI6LTk3LjIyODkwMjl9LFwib2Rlc3NhXCI6e1wibmFtZVwiOlwiT2Rlc3NhXCIsXCJsYXRcIjozMS44NDU2ODE2LFwibG5nXCI6LTEwMi4zNjc2NDMxfSxcInBhc2FkZW5hXCI6e1wibmFtZVwiOlwiUGFzYWRlbmFcIixcImxhdFwiOjI5LjY5MTA2MjUsXCJsbmdcIjotOTUuMjA5MTAwNn0sXCJwZWFybGFuZFwiOntcIm5hbWVcIjpcIlBlYXJsYW5kXCIsXCJsYXRcIjoyOS41NjM1NjY2LFwibG5nXCI6LTk1LjI4NjA0NzR9LFwicGZsdWdlcnZpbGxlXCI6e1wibmFtZVwiOlwiUGZsdWdlcnZpbGxlXCIsXCJsYXRcIjozMC40MzkzNjk2LFwibG5nXCI6LTk3LjYyMDAwNDI5OTk5OTk5fSxcInBoYXJyXCI6e1wibmFtZVwiOlwiUGhhcnJcIixcImxhdFwiOjI2LjE5NDc5NjIsXCJsbmdcIjotOTguMTgzNjIxNn0sXCJwbGFub1wiOntcIm5hbWVcIjpcIlBsYW5vXCIsXCJsYXRcIjozMy4wMTk4NDMxLFwibG5nXCI6LTk2LjY5ODg4NTZ9LFwicG9ydCBhcnRodXJcIjp7XCJuYW1lXCI6XCJQb3J0IEFydGh1clwiLFwibGF0XCI6MjkuODg0OTUwNCxcImxuZ1wiOi05My45Mzk5NDY5OTk5OTk5OX0sXCJyaWNoYXJkc29uXCI6e1wibmFtZVwiOlwiUmljaGFyZHNvblwiLFwibGF0XCI6MzIuOTQ4MTc4OSxcImxuZ1wiOi05Ni43Mjk3MjA1fSxcInJvY2t3YWxsXCI6e1wibmFtZVwiOlwiUm9ja3dhbGxcIixcImxhdFwiOjMyLjkzMTIzMzYwMDAwMDAxLFwibG5nXCI6LTk2LjQ1OTcwODl9LFwicm91bmQgcm9ja1wiOntcIm5hbWVcIjpcIlJvdW5kIFJvY2tcIixcImxhdFwiOjMwLjUwODI1NTEsXCJsbmdcIjotOTcuNjc4ODk2fSxcInJvd2xldHRcIjp7XCJuYW1lXCI6XCJSb3dsZXR0XCIsXCJsYXRcIjozMi45MDI5MDE3LFwibG5nXCI6LTk2LjU2Mzg4fSxcInNhbiBhbmdlbG9cIjp7XCJuYW1lXCI6XCJTYW4gQW5nZWxvXCIsXCJsYXRcIjozMS40NjM3NzIzLFwibG5nXCI6LTEwMC40MzcwMzc1fSxcInNhbiBhbnRvbmlvXCI6e1wibmFtZVwiOlwiU2FuIEFudG9uaW9cIixcImxhdFwiOjI5LjQyNDEyMTksXCJsbmdcIjotOTguNDkzNjI4MTk5OTk5OTl9LFwic2FuIG1hcmNvc1wiOntcIm5hbWVcIjpcIlNhbiBNYXJjb3NcIixcImxhdFwiOjI5Ljg4MzI3NDksXCJsbmdcIjotOTcuOTQxMzk0MX0sXCJzcHJpbmdcIjp7XCJuYW1lXCI6XCJTcHJpbmdcIixcImxhdFwiOjMwLjA3OTk0MDUsXCJsbmdcIjotOTUuNDE3MTYwMDk5OTk5OTl9LFwic3VnYXIgbGFuZFwiOntcIm5hbWVcIjpcIlN1Z2FyIExhbmRcIixcImxhdFwiOjI5LjYxOTY3ODcsXCJsbmdcIjotOTUuNjM0OTQ2M30sXCJ0ZW1wbGVcIjp7XCJuYW1lXCI6XCJUZW1wbGVcIixcImxhdFwiOjMxLjA5ODIzNDQsXCJsbmdcIjotOTcuMzQyNzgyfSxcInRleGFzIGNpdHlcIjp7XCJuYW1lXCI6XCJUZXhhcyBDaXR5XCIsXCJsYXRcIjoyOS4zODM4NDUsXCJsbmdcIjotOTQuOTAyNzAwMn0sXCJ0aGUgd29vZGxhbmRzXCI6e1wibmFtZVwiOlwiVGhlIFdvb2RsYW5kc1wiLFwibGF0XCI6MzAuMTY1ODIwNyxcImxuZ1wiOi05NS40NjEyNjI0OTk5OTk5OX0sXCJ0eWxlclwiOntcIm5hbWVcIjpcIlR5bGVyXCIsXCJsYXRcIjozMi4zNTEyNjAxLFwibG5nXCI6LTk1LjMwMTA2MjM5OTk5OTk5fSxcInZpY3RvcmlhXCI6e1wibmFtZVwiOlwiVmljdG9yaWFcIixcImxhdFwiOjI4LjgwNTI2NzQsXCJsbmdcIjotOTcuMDAzNTk4Mn0sXCJ3YWNvXCI6e1wibmFtZVwiOlwiV2Fjb1wiLFwibGF0XCI6MzEuNTQ5MzMzLFwibG5nXCI6LTk3LjE0NjY2OTV9LFwid2ljaGl0YSBmYWxsc1wiOntcIm5hbWVcIjpcIldpY2hpdGEgRmFsbHNcIixcImxhdFwiOjMzLjkxMzcwODUsXCJsbmdcIjotOTguNDkzMzg3M30sXCJ3eWxpZVwiOntcIm5hbWVcIjpcIld5bGllXCIsXCJsYXRcIjozMy4wMTUxMjAxLFwibG5nXCI6LTk2LjUzODg3ODl9fSxcIk9IXCI6e1wiYWtyb25cIjp7XCJuYW1lXCI6XCJBa3JvblwiLFwibGF0XCI6NDEuMDgxNDQ0NyxcImxuZ1wiOi04MS41MTkwMDUyOTk5OTk5OX0sXCJiZWF2ZXJjcmVla1wiOntcIm5hbWVcIjpcIkJlYXZlcmNyZWVrXCIsXCJsYXRcIjozOS43MDkyMjYyLFwibG5nXCI6LTg0LjA2MzI2ODQ5OTk5OTk5fSxcImNhbnRvblwiOntcIm5hbWVcIjpcIkNhbnRvblwiLFwibGF0XCI6NDAuNzk4OTQ3Mjk5OTk5OTksXCJsbmdcIjotODEuMzc4NDQ3fSxcImNlbnRlcnZpbGxlXCI6e1wibmFtZVwiOlwiQ2VudGVydmlsbGVcIixcImxhdFwiOjM5LjYyODM5MjgsXCJsbmdcIjotODQuMTU5MzgxNzk5OTk5OTl9LFwiY2luY2lubmF0aVwiOntcIm5hbWVcIjpcIkNpbmNpbm5hdGlcIixcImxhdFwiOjM5LjEwMzExODIsXCJsbmdcIjotODQuNTEyMDE5Nn0sXCJjbGV2ZWxhbmRcIjp7XCJuYW1lXCI6XCJDbGV2ZWxhbmRcIixcImxhdFwiOjQxLjQ5OTQ5NTQsXCJsbmdcIjotODEuNjk1NDA4OH0sXCJjbGV2ZWxhbmQgaGVpZ2h0c1wiOntcIm5hbWVcIjpcIkNsZXZlbGFuZCBIZWlnaHRzXCIsXCJsYXRcIjo0MS41MjAwNTE4LFwibG5nXCI6LTgxLjU1NjIzNX0sXCJjb2x1bWJ1c1wiOntcIm5hbWVcIjpcIkNvbHVtYnVzXCIsXCJsYXRcIjozOS45NjExNzU1LFwibG5nXCI6LTgyLjk5ODc5NDE5OTk5OTk5fSxcImN1eWFob2dhIGZhbGxzXCI6e1wibmFtZVwiOlwiQ3V5YWhvZ2EgRmFsbHNcIixcImxhdFwiOjQxLjEzMzk0NDksXCJsbmdcIjotODEuNDg0NTU4NDk5OTk5OTl9LFwiZGF5dG9uXCI6e1wibmFtZVwiOlwiRGF5dG9uXCIsXCJsYXRcIjozOS43NTg5NDc4LFwibG5nXCI6LTg0LjE5MTYwNjl9LFwiZHVibGluXCI6e1wibmFtZVwiOlwiRHVibGluXCIsXCJsYXRcIjo0MC4wOTkyMjk0LFwibG5nXCI6LTgzLjExNDA3NzF9LFwiZWx5cmlhXCI6e1wibmFtZVwiOlwiRWx5cmlhXCIsXCJsYXRcIjo0MS4zNjgzNzk4LFwibG5nXCI6LTgyLjEwNzY0ODU5OTk5OTk5fSxcImV1Y2xpZFwiOntcIm5hbWVcIjpcIkV1Y2xpZFwiLFwibGF0XCI6NDEuNTkzMTA0OSxcImxuZ1wiOi04MS41MjY3ODczfSxcImZhaXJmaWVsZFwiOntcIm5hbWVcIjpcIkZhaXJmaWVsZFwiLFwibGF0XCI6MzkuMzQ1NDY3MyxcImxuZ1wiOi04NC41NjAzMTg3fSxcImhhbWlsdG9uXCI6e1wibmFtZVwiOlwiSGFtaWx0b25cIixcImxhdFwiOjM5LjM5OTUwMDgsXCJsbmdcIjotODQuNTYxMzM1NX0sXCJrZXR0ZXJpbmdcIjp7XCJuYW1lXCI6XCJLZXR0ZXJpbmdcIixcImxhdFwiOjM5LjY4OTUwMzU5OTk5OTk5LFwibG5nXCI6LTg0LjE2ODgyNzR9LFwibGFrZXdvb2RcIjp7XCJuYW1lXCI6XCJMYWtld29vZFwiLFwibGF0XCI6NDEuNDgxOTkzMixcImxuZ1wiOi04MS43OTgxOTA4fSxcImxvcmFpblwiOntcIm5hbWVcIjpcIkxvcmFpblwiLFwibGF0XCI6NDEuNDUyODE5LFwibG5nXCI6LTgyLjE4MjM3NDZ9LFwibWFuc2ZpZWxkXCI6e1wibmFtZVwiOlwiTWFuc2ZpZWxkXCIsXCJsYXRcIjo0MC43NTgzOSxcImxuZ1wiOi04Mi41MTU0NDcxfSxcIm1lbnRvclwiOntcIm5hbWVcIjpcIk1lbnRvclwiLFwibGF0XCI6NDEuNjY2MTU3MyxcImxuZ1wiOi04MS4zMzk1NTJ9LFwibWlkZGxldG93blwiOntcIm5hbWVcIjpcIk1pZGRsZXRvd25cIixcImxhdFwiOjM5LjUxNTA1NzYsXCJsbmdcIjotODQuMzk4Mjc2Mjk5OTk5OTl9LFwibmV3YXJrXCI6e1wibmFtZVwiOlwiTmV3YXJrXCIsXCJsYXRcIjo0MC4wNTgxMjA1LFwibG5nXCI6LTgyLjQwMTI2NDJ9LFwicGFybWFcIjp7XCJuYW1lXCI6XCJQYXJtYVwiLFwibGF0XCI6NDEuNDA0Nzc0MixcImxuZ1wiOi04MS43MjI5MDg2fSxcInNwcmluZ2ZpZWxkXCI6e1wibmFtZVwiOlwiU3ByaW5nZmllbGRcIixcImxhdFwiOjM5LjkyNDIyNjYsXCJsbmdcIjotODMuODA4ODE3MX0sXCJzdHJvbmdzdmlsbGVcIjp7XCJuYW1lXCI6XCJTdHJvbmdzdmlsbGVcIixcImxhdFwiOjQxLjMxNDQ5NjYsXCJsbmdcIjotODEuODM1Njl9LFwidG9sZWRvXCI6e1wibmFtZVwiOlwiVG9sZWRvXCIsXCJsYXRcIjo0MS42NjM5MzgzLFwibG5nXCI6LTgzLjU1NTIxMjAwMDAwMDAxfSxcInlvdW5nc3Rvd25cIjp7XCJuYW1lXCI6XCJZb3VuZ3N0b3duXCIsXCJsYXRcIjo0MS4wOTk3ODAzLFwibG5nXCI6LTgwLjY0OTUxOTR9fSxcIkZMXCI6e1wiYWxhZmF5YVwiOntcIm5hbWVcIjpcIkFsYWZheWFcIixcImxhdFwiOjI4LjU2NDEsXCJsbmdcIjotODEuMjExNH0sXCJhbHRhbW9udGUgc3ByaW5nc1wiOntcIm5hbWVcIjpcIkFsdGFtb250ZSBTcHJpbmdzXCIsXCJsYXRcIjoyOC42NjExMDg5LFwibG5nXCI6LTgxLjM2NTYyNDJ9LFwiYXBvcGthXCI6e1wibmFtZVwiOlwiQXBvcGthXCIsXCJsYXRcIjoyOC42ODY3NSxcImxuZ1wiOi04MS41MTMyNzU5OTk5OTk5OX0sXCJib2NhIHJhdG9uXCI6e1wibmFtZVwiOlwiQm9jYSBSYXRvblwiLFwibGF0XCI6MjYuMzU4Njg4NSxcImxuZ1wiOi04MC4wODMwOTg0fSxcImJvbml0YSBzcHJpbmdzXCI6e1wibmFtZVwiOlwiQm9uaXRhIFNwcmluZ3NcIixcImxhdFwiOjI2LjMzOTgwNixcImxuZ1wiOi04MS43Nzg2OTcyfSxcImJveW50b24gYmVhY2hcIjp7XCJuYW1lXCI6XCJCb3ludG9uIEJlYWNoXCIsXCJsYXRcIjoyNi41MjUzNDkxLFwibG5nXCI6LTgwLjA2NjQzMDl9LFwiYnJhZGVudG9uXCI6e1wibmFtZVwiOlwiQnJhZGVudG9uXCIsXCJsYXRcIjoyNy40OTg5Mjc4LFwibG5nXCI6LTgyLjU3NDgxOTR9LFwiYnJhbmRvblwiOntcIm5hbWVcIjpcIkJyYW5kb25cIixcImxhdFwiOjI3LjkzNzgwMSxcImxuZ1wiOi04Mi4yODU5MjQ3fSxcImNhcGUgY29yYWxcIjp7XCJuYW1lXCI6XCJDYXBlIENvcmFsXCIsXCJsYXRcIjoyNi41NjI4NTM3LFwibG5nXCI6LTgxLjk0OTUzMzF9LFwiY2xlYXJ3YXRlclwiOntcIm5hbWVcIjpcIkNsZWFyd2F0ZXJcIixcImxhdFwiOjI3Ljk2NTg1MzMsXCJsbmdcIjotODIuODAwMTAyNn0sXCJjb2NvbnV0IGNyZWVrXCI6e1wibmFtZVwiOlwiQ29jb251dCBDcmVla1wiLFwibGF0XCI6MjYuMjUxNzQ4MixcImxuZ1wiOi04MC4xNzg5MzUwOTk5OTk5OX0sXCJjb3JhbCBnYWJsZXNcIjp7XCJuYW1lXCI6XCJDb3JhbCBHYWJsZXNcIixcImxhdFwiOjI1LjcyMTQ5LFwibG5nXCI6LTgwLjI2ODM4Mzh9LFwiY29yYWwgc3ByaW5nc1wiOntcIm5hbWVcIjpcIkNvcmFsIFNwcmluZ3NcIixcImxhdFwiOjI2LjI3MTE5MixcImxuZ1wiOi04MC4yNzA2MDQ0fSxcImNvdW50cnkgY2x1YlwiOntcIm5hbWVcIjpcIkNvdW50cnkgQ2x1YlwiLFwibGF0XCI6MjUuOTQ4MTQ4NyxcImxuZ1wiOi04MC4zMTY5OTUzfSxcImN1dGxlciBiYXlcIjp7XCJuYW1lXCI6XCJDdXRsZXIgQmF5XCIsXCJsYXRcIjoyNS41NzgzLFwibG5nXCI6LTgwLjMzNzd9LFwiZGF2aWVcIjp7XCJuYW1lXCI6XCJEYXZpZVwiLFwibGF0XCI6MjYuMDYyODY2NCxcImxuZ1wiOi04MC4yMzMxMDM4fSxcImRheXRvbmEgYmVhY2hcIjp7XCJuYW1lXCI6XCJEYXl0b25hIEJlYWNoXCIsXCJsYXRcIjoyOS4yMTA4MTQ3LFwibG5nXCI6LTgxLjAyMjgzMzF9LFwiZGVlcmZpZWxkIGJlYWNoXCI6e1wibmFtZVwiOlwiRGVlcmZpZWxkIEJlYWNoXCIsXCJsYXRcIjoyNi4zMTg0MTIzLFwibG5nXCI6LTgwLjA5OTc2NTY5OTk5OTk5fSxcImRlbHJheSBiZWFjaFwiOntcIm5hbWVcIjpcIkRlbHJheSBCZWFjaFwiLFwibGF0XCI6MjYuNDYxNDYyNSxcImxuZ1wiOi04MC4wNzI4MjAxfSxcImRlbHRvbmFcIjp7XCJuYW1lXCI6XCJEZWx0b25hXCIsXCJsYXRcIjoyOC45MDA1NDQ2LFwibG5nXCI6LTgxLjI2MzY3Mzc5OTk5OTk5fSxcImRvcmFsXCI6e1wibmFtZVwiOlwiRG9yYWxcIixcImxhdFwiOjI1LjgxOTU0MjQsXCJsbmdcIjotODAuMzU1MzMwMn0sXCJmb3J0IGxhdWRlcmRhbGVcIjp7XCJuYW1lXCI6XCJGb3J0IExhdWRlcmRhbGVcIixcImxhdFwiOjI2LjEyMjMwODQsXCJsbmdcIjotODAuMTQzMzc4NTk5OTk5OTl9LFwiZm9ydCBteWVyc1wiOntcIm5hbWVcIjpcIkZvcnQgTXllcnNcIixcImxhdFwiOjI2LjY0MDYyOCxcImxuZ1wiOi04MS44NzIzMDg0fSxcImZvcnQgcGllcmNlXCI6e1wibmFtZVwiOlwiRm9ydCBQaWVyY2VcIixcImxhdFwiOjI3LjQ0NjcwNTYsXCJsbmdcIjotODAuMzI1NjA1Nn0sXCJmb3VudGFpbmJsZWF1XCI6e1wibmFtZVwiOlwiRm91bnRhaW5ibGVhdVwiLFwibGF0XCI6MjUuNzcyODc3NCxcImxuZ1wiOi04MC4zNDc4MzAxfSxcImdhaW5lc3ZpbGxlXCI6e1wibmFtZVwiOlwiR2FpbmVzdmlsbGVcIixcImxhdFwiOjI5LjY1MTYzNDQsXCJsbmdcIjotODIuMzI0ODI2MTk5OTk5OTl9LFwiaGlhbGVhaFwiOntcIm5hbWVcIjpcIkhpYWxlYWhcIixcImxhdFwiOjI1Ljg1NzU5NjMsXCJsbmdcIjotODAuMjc4MTA1N30sXCJob2xseXdvb2RcIjp7XCJuYW1lXCI6XCJIb2xseXdvb2RcIixcImxhdFwiOjI2LjAxMTIwMTQsXCJsbmdcIjotODAuMTQ5NDkwMX0sXCJob21lc3RlYWRcIjp7XCJuYW1lXCI6XCJIb21lc3RlYWRcIixcImxhdFwiOjI1LjQ2ODcyMjQsXCJsbmdcIjotODAuNDc3NTU2OX0sXCJqYWNrc29udmlsbGVcIjp7XCJuYW1lXCI6XCJKYWNrc29udmlsbGVcIixcImxhdFwiOjMwLjMzMjE4MzgsXCJsbmdcIjotODEuNjU1NjUwOTk5OTk5OTl9LFwianVwaXRlclwiOntcIm5hbWVcIjpcIkp1cGl0ZXJcIixcImxhdFwiOjI2LjkzNDIyNDYsXCJsbmdcIjotODAuMDk0MjA4N30sXCJrZW5kYWxlIGxha2VzXCI6e1wibmFtZVwiOlwiS2VuZGFsZSBMYWtlc1wiLFwibGF0XCI6MjUuNzA4MTU3NyxcImxuZ1wiOi04MC40MDY5OTg2fSxcImtlbmRhbGxcIjp7XCJuYW1lXCI6XCJLZW5kYWxsXCIsXCJsYXRcIjoyNS42NjYwMzM2LFwibG5nXCI6LTgwLjM1NzgyN30sXCJraXNzaW1tZWVcIjp7XCJuYW1lXCI6XCJLaXNzaW1tZWVcIixcImxhdFwiOjI4LjI5MTk1NTcsXCJsbmdcIjotODEuNDA3NTcwOTk5OTk5OTl9LFwibGFrZWxhbmRcIjp7XCJuYW1lXCI6XCJMYWtlbGFuZFwiLFwibGF0XCI6MjguMDM5NDY1NCxcImxuZ1wiOi04MS45NDk4MDQyfSxcImxhcmdvXCI6e1wibmFtZVwiOlwiTGFyZ29cIixcImxhdFwiOjI3LjkwOTQ2NjUsXCJsbmdcIjotODIuNzg3MzI0NH0sXCJsYXVkZXJoaWxsXCI6e1wibmFtZVwiOlwiTGF1ZGVyaGlsbFwiLFwibGF0XCI6MjYuMTQwMzYzNSxcImxuZ1wiOi04MC4yMTMzODA4fSxcImxlaGlnaCBhY3Jlc1wiOntcIm5hbWVcIjpcIkxlaGlnaCBBY3Jlc1wiLFwibGF0XCI6MjYuNjI1MzQ5NyxcImxuZ1wiOi04MS42MjQ4MDI2fSxcIm1hcmdhdGVcIjp7XCJuYW1lXCI6XCJNYXJnYXRlXCIsXCJsYXRcIjoyNi4yNDQ1MjYzLFwibG5nXCI6LTgwLjIwNjQzNn0sXCJtZWxib3VybmVcIjp7XCJuYW1lXCI6XCJNZWxib3VybmVcIixcImxhdFwiOjI4LjA4MzYyNjksXCJsbmdcIjotODAuNjA4MTA4ODk5OTk5OTl9LFwibWlhbWlcIjp7XCJuYW1lXCI6XCJNaWFtaVwiLFwibGF0XCI6MjUuNzg4OTY4OSxcImxuZ1wiOi04MC4yMjY0MzkzfSxcIm1pYW1pIGdhcmRlbnNcIjp7XCJuYW1lXCI6XCJNaWFtaSBHYXJkZW5zXCIsXCJsYXRcIjoyNS45NDIwMzc3LFwibG5nXCI6LTgwLjI0NTYwNDV9LFwibWlyYW1hclwiOntcIm5hbWVcIjpcIk1pcmFtYXJcIixcImxhdFwiOjI1Ljk3NTY3MDQsXCJsbmdcIjotODAuMjg2NzUwMDk5OTk5OTl9LFwibm9ydGggbGF1ZGVyZGFsZVwiOntcIm5hbWVcIjpcIk5vcnRoIExhdWRlcmRhbGVcIixcImxhdFwiOjI2LjIxNzMwNSxcImxuZ1wiOi04MC4yMjU4ODExfSxcIm5vcnRoIG1pYW1pXCI6e1wibmFtZVwiOlwiTm9ydGggTWlhbWlcIixcImxhdFwiOjI1Ljg5MDA5NDksXCJsbmdcIjotODAuMTg2NzEzOH0sXCJub3J0aCBtaWFtaSBiZWFjaFwiOntcIm5hbWVcIjpcIk5vcnRoIE1pYW1pIEJlYWNoXCIsXCJsYXRcIjoyNS45MzMxNDg4LFwibG5nXCI6LTgwLjE2MjU0NjN9LFwibm9ydGggcG9ydFwiOntcIm5hbWVcIjpcIk5vcnRoIFBvcnRcIixcImxhdFwiOjI3LjA0NDIyNCxcImxuZ1wiOi04Mi4yMzU5MjU0fSxcIm9ha2xhbmQgcGFya1wiOntcIm5hbWVcIjpcIk9ha2xhbmQgUGFya1wiLFwibGF0XCI6MjYuMTcyMzA2NSxcImxuZ1wiOi04MC4xMzE5ODkzfSxcIm9jYWxhXCI6e1wibmFtZVwiOlwiT2NhbGFcIixcImxhdFwiOjI5LjE4NzE5ODYsXCJsbmdcIjotODIuMTQwMDkyMjk5OTk5OTl9LFwib3JsYW5kb1wiOntcIm5hbWVcIjpcIk9ybGFuZG9cIixcImxhdFwiOjI4LjUzODMzNTUsXCJsbmdcIjotODEuMzc5MjM2NX0sXCJwYWxtIGJheVwiOntcIm5hbWVcIjpcIlBhbG0gQmF5XCIsXCJsYXRcIjoyOC4wMzQ0NjIxLFwibG5nXCI6LTgwLjU4ODY2NDZ9LFwicGFsbSBiZWFjaCBnYXJkZW5zXCI6e1wibmFtZVwiOlwiUGFsbSBCZWFjaCBHYXJkZW5zXCIsXCJsYXRcIjoyNi44MjMzOTQ2LFwibG5nXCI6LTgwLjEzODY1NDY5OTk5OTk5fSxcInBhbG0gY29hc3RcIjp7XCJuYW1lXCI6XCJQYWxtIENvYXN0XCIsXCJsYXRcIjoyOS41ODQ5NzM2LFwibG5nXCI6LTgxLjIwNzg0MTF9LFwicGFsbSBoYXJib3JcIjp7XCJuYW1lXCI6XCJQYWxtIEhhcmJvclwiLFwibGF0XCI6MjguMDc4MDcxOCxcImxuZ1wiOi04Mi43NjM3MTI3fSxcInBlbWJyb2tlIHBpbmVzXCI6e1wibmFtZVwiOlwiUGVtYnJva2UgUGluZXNcIixcImxhdFwiOjI2LjAxMjIzNzgsXCJsbmdcIjotODAuMzE1MjIzM30sXCJwZW5zYWNvbGFcIjp7XCJuYW1lXCI6XCJQZW5zYWNvbGFcIixcImxhdFwiOjMwLjQyMTMwODk5OTk5OTk5LFwibG5nXCI6LTg3LjIxNjkxNDl9LFwicGluZSBoaWxsc1wiOntcIm5hbWVcIjpcIlBpbmUgSGlsbHNcIixcImxhdFwiOjI4LjU1Nzc3OTQsXCJsbmdcIjotODEuNDUzNDA0Nn0sXCJwaW5lbGxhcyBwYXJrXCI6e1wibmFtZVwiOlwiUGluZWxsYXMgUGFya1wiLFwibGF0XCI6MjcuODQyODAyNSxcImxuZ1wiOi04Mi42OTk1NDQzfSxcInBsYW50YXRpb25cIjp7XCJuYW1lXCI6XCJQbGFudGF0aW9uXCIsXCJsYXRcIjoyNi4xMjc1ODYyLFwibG5nXCI6LTgwLjIzMzEwMzU5OTk5OTk5fSxcInBvaW5jaWFuYVwiOntcIm5hbWVcIjpcIlBvaW5jaWFuYVwiLFwibGF0XCI6MjguMTQwMjkzOSxcImxuZ1wiOi04MS40NTg0MDU4fSxcInBvbXBhbm8gYmVhY2hcIjp7XCJuYW1lXCI6XCJQb21wYW5vIEJlYWNoXCIsXCJsYXRcIjoyNi4yMzc4NTk3LFwibG5nXCI6LTgwLjEyNDc2Njd9LFwicG9ydCBjaGFybG90dGVcIjp7XCJuYW1lXCI6XCJQb3J0IENoYXJsb3R0ZVwiLFwibGF0XCI6MjYuOTc2MTcwNyxcImxuZ1wiOi04Mi4wOTA2NDQ3OTk5OTk5OX0sXCJwb3J0IG9yYW5nZVwiOntcIm5hbWVcIjpcIlBvcnQgT3JhbmdlXCIsXCJsYXRcIjoyOS4xMzgzMTY1LFwibG5nXCI6LTgwLjk5NTYxMDV9LFwicG9ydCBzdCBsdWNpZVwiOntcIm5hbWVcIjpcIlBvcnQgU3QgTHVjaWVcIixcImxhdFwiOjI3LjI3NTgzMzMsXCJsbmdcIjotODAuMzU0OTk5OTk5OTk5OTl9LFwicml2ZXJ2aWV3XCI6e1wibmFtZVwiOlwiUml2ZXJ2aWV3XCIsXCJsYXRcIjoyNy44NjYxMzY0LFwibG5nXCI6LTgyLjMyNjQ4MDg5OTk5OTk5fSxcInN0IHBldGVyc2J1cmdcIjp7XCJuYW1lXCI6XCJTdCBQZXRlcnNidXJnXCIsXCJsYXRcIjoyNy43NzMwNTU2LFwibG5nXCI6LTgyLjY0fSxcInNhbmZvcmRcIjp7XCJuYW1lXCI6XCJTYW5mb3JkXCIsXCJsYXRcIjoyOC43NTg4MjE4LFwibG5nXCI6LTgxLjI5NDE3OTM5OTk5OTk5fSxcInNhcmFzb3RhXCI6e1wibmFtZVwiOlwiU2FyYXNvdGFcIixcImxhdFwiOjI3LjMzNjQzNDcsXCJsbmdcIjotODIuNTMwNjUyNjk5OTk5OTl9LFwic3ByaW5nIGhpbGxcIjp7XCJuYW1lXCI6XCJTcHJpbmcgSGlsbFwiLFwibGF0XCI6MjguNDgzMTY4MixcImxuZ1wiOi04Mi41MzY5ODcyfSxcInN1bnJpc2VcIjp7XCJuYW1lXCI6XCJTdW5yaXNlXCIsXCJsYXRcIjoyNi4xNTcxNzQzLFwibG5nXCI6LTgwLjI4NjIyNTYwMDAwMDAxfSxcInRhbGxhaGFzc2VlXCI6e1wibmFtZVwiOlwiVGFsbGFoYXNzZWVcIixcImxhdFwiOjMwLjQzODI1NTksXCJsbmdcIjotODQuMjgwNzMyODk5OTk5OTl9LFwidGFtYXJhY1wiOntcIm5hbWVcIjpcIlRhbWFyYWNcIixcImxhdFwiOjI2LjIxMjg2MDksXCJsbmdcIjotODAuMjQ5NzcwN30sXCJ0YW1pYW1pXCI6e1wibmFtZVwiOlwiVGFtaWFtaVwiLFwibGF0XCI6MjUuNzU4NzExNCxcImxuZ1wiOi04MC4zOTgzODd9LFwidGFtcGFcIjp7XCJuYW1lXCI6XCJUYW1wYVwiLFwibGF0XCI6MjcuOTUwNTc1LFwibG5nXCI6LTgyLjQ1NzE3NzZ9LFwidGhlIGhhbW1vY2tzXCI6e1wibmFtZVwiOlwiVGhlIEhhbW1vY2tzXCIsXCJsYXRcIjoyNS42NzE0OTI1LFwibG5nXCI6LTgwLjQ0NDQ5OTd9LFwidGhlIHZpbGxhZ2VzXCI6e1wibmFtZVwiOlwiVGhlIFZpbGxhZ2VzXCIsXCJsYXRcIjoyOC45Mzc3Nzc4LFwibG5nXCI6LTgxLjk3MTExMTF9LFwidGl0dXN2aWxsZVwiOntcIm5hbWVcIjpcIlRpdHVzdmlsbGVcIixcImxhdFwiOjI4LjYxMjIxODcsXCJsbmdcIjotODAuODA3NTUzN30sXCJ0b3duICduJyBjb3VudHJ5XCI6e1wibmFtZVwiOlwiVG93biAnbicgQ291bnRyeVwiLFwibGF0XCI6MjguMDEwNTc0NSxcImxuZ1wiOi04Mi41NzczMTkzMDAwMDAwMX0sXCJ2YWxyaWNvXCI6e1wibmFtZVwiOlwiVmFscmljb1wiLFwibGF0XCI6MjcuOTQwODMzMyxcImxuZ1wiOi04Mi4yNDI0OTk5OTk5OTk5OX0sXCJ3ZWxsaW5ndG9uXCI6e1wibmFtZVwiOlwiV2VsbGluZ3RvblwiLFwibGF0XCI6MjYuNjU1MjMwOSxcImxuZ1wiOi04MC4yNTQyNTEyOTk5OTk5OX0sXCJ3ZXNsZXkgY2hhcGVsXCI6e1wibmFtZVwiOlwiV2VzbGV5IENoYXBlbFwiLFwibGF0XCI6MjguMTc4NjExMSxcImxuZ1wiOi04Mi4zNTA1NTU1OTk5OTk5OX0sXCJ3ZXN0b25cIjp7XCJuYW1lXCI6XCJXZXN0b25cIixcImxhdFwiOjI2LjEwMDM2NTQsXCJsbmdcIjotODAuMzk5Nzc0OH0sXCJ3ZXN0IHBhbG0gYmVhY2hcIjp7XCJuYW1lXCI6XCJXZXN0IFBhbG0gQmVhY2hcIixcImxhdFwiOjI2LjcxNTM0MjQsXCJsbmdcIjotODAuMDUzMzc0Nn19LFwiQ0FcIjp7XCJhbGFtZWRhXCI6e1wibmFtZVwiOlwiQWxhbWVkYVwiLFwibGF0XCI6MzcuNzY1MjA2NSxcImxuZ1wiOi0xMjIuMjQxNjM1NX0sXCJhbGhhbWJyYVwiOntcIm5hbWVcIjpcIkFsaGFtYnJhXCIsXCJsYXRcIjozNC4wOTUyODcsXCJsbmdcIjotMTE4LjEyNzAxNDZ9LFwiYWxpc28gdmllam9cIjp7XCJuYW1lXCI6XCJBbGlzbyBWaWVqb1wiLFwibGF0XCI6MzMuNTc1MDk1OTk5OTk5OTksXCJsbmdcIjotMTE3LjcyNTQzMX0sXCJhbHRhZGVuYVwiOntcIm5hbWVcIjpcIkFsdGFkZW5hXCIsXCJsYXRcIjozNC4xODk3Mjc0LFwibG5nXCI6LTExOC4xMzExODE5fSxcImFuYWhlaW1cIjp7XCJuYW1lXCI6XCJBbmFoZWltXCIsXCJsYXRcIjozMy44MzUyOTMyLFwibG5nXCI6LTExNy45MTQ1MDM2fSxcImFudGVsb3BlIG5vcnRoIHJkXCI6e1wibmFtZVwiOlwiQW50ZWxvcGUgTm9ydGggUmRcIixcImxhdFwiOjM4LjcxNzI0OTEsXCJsbmdcIjotMTIxLjMyNzQ4MzJ9LFwiYW50aW9jaFwiOntcIm5hbWVcIjpcIkFudGlvY2hcIixcImxhdFwiOjM4LjAwNDkyMTQsXCJsbmdcIjotMTIxLjgwNTc4OX0sXCJhcHBsZSB2YWxsZXlcIjp7XCJuYW1lXCI6XCJBcHBsZSBWYWxsZXlcIixcImxhdFwiOjM0LjUwMDgzMTEsXCJsbmdcIjotMTE3LjE4NTg3NTl9LFwiYXJjYWRpYVwiOntcIm5hbWVcIjpcIkFyY2FkaWFcIixcImxhdFwiOjM0LjEzOTcyOTIsXCJsbmdcIjotMTE4LjAzNTM0NDl9LFwiYXJkZW4tYXJjYWRlXCI6e1wibmFtZVwiOlwiQXJkZW4tQXJjYWRlXCIsXCJsYXRcIjozOC42MDA4MDcxLFwibG5nXCI6LTEyMS4zNzcwMzM2fSxcImF6dXNhXCI6e1wibmFtZVwiOlwiQXp1c2FcIixcImxhdFwiOjM0LjEzMzYxODYsXCJsbmdcIjotMTE3LjkwNzU2Mjd9LFwiYmFrZXJzZmllbGRcIjp7XCJuYW1lXCI6XCJCYWtlcnNmaWVsZFwiLFwibGF0XCI6MzUuMzczMjkyMSxcImxuZ1wiOi0xMTkuMDE4NzEyNX0sXCJiYWxkd2luIHBhcmtcIjp7XCJuYW1lXCI6XCJCYWxkd2luIFBhcmtcIixcImxhdFwiOjM0LjA4NTI4NjgsXCJsbmdcIjotMTE3Ljk2MDg5Nzh9LFwiYmVhdW1vbnRcIjp7XCJuYW1lXCI6XCJCZWF1bW9udFwiLFwibGF0XCI6MzMuOTI5NDYwNixcImxuZ1wiOi0xMTYuOTc3MjQ4fSxcImJlbGxmbG93ZXJcIjp7XCJuYW1lXCI6XCJCZWxsZmxvd2VyXCIsXCJsYXRcIjozMy44ODE2ODE4LFwibG5nXCI6LTExOC4xMTcwMTE3fSxcImJlbGwgZ2FyZGVuc1wiOntcIm5hbWVcIjpcIkJlbGwgR2FyZGVuc1wiLFwibGF0XCI6MzMuOTY1MjkxOCxcImxuZ1wiOi0xMTguMTUxNDU4OH0sXCJiZXJrZWxleVwiOntcIm5hbWVcIjpcIkJlcmtlbGV5XCIsXCJsYXRcIjozNy44NzE1OTI2LFwibG5nXCI6LTEyMi4yNzI3NDd9LFwiYnJlbnR3b29kXCI6e1wibmFtZVwiOlwiQnJlbnR3b29kXCIsXCJsYXRcIjozNy45MzE4NjgsXCJsbmdcIjotMTIxLjY5NTc4NjN9LFwiYnVlbmEgcGFya1wiOntcIm5hbWVcIjpcIkJ1ZW5hIFBhcmtcIixcImxhdFwiOjMzLjg2NzUxNDMsXCJsbmdcIjotMTE3Ljk5ODExODF9LFwiYnVyYmFua1wiOntcIm5hbWVcIjpcIkJ1cmJhbmtcIixcImxhdFwiOjM3LjMyMDU1NTYsXCJsbmdcIjotMTIxLjkzMTY2Njd9LFwiY2FsZXhpY29cIjp7XCJuYW1lXCI6XCJDYWxleGljb1wiLFwibGF0XCI6MzIuNjc4OTQ3NixcImxuZ1wiOi0xMTUuNDk4ODgzNH0sXCJjYW1hcmlsbG9cIjp7XCJuYW1lXCI6XCJDYW1hcmlsbG9cIixcImxhdFwiOjM0LjIxNjM5MzcsXCJsbmdcIjotMTE5LjAzNzYwMjN9LFwiY2FybHNiYWRcIjp7XCJuYW1lXCI6XCJDYXJsc2JhZFwiLFwibGF0XCI6MzMuMTU4MDkzMyxcImxuZ1wiOi0xMTcuMzUwNTkzOX0sXCJjYXJtaWNoYWVsXCI6e1wibmFtZVwiOlwiQ2FybWljaGFlbFwiLFwibGF0XCI6MzguNjE3MTI3LFwibG5nXCI6LTEyMS4zMjgyODQzfSxcImNhcnNvblwiOntcIm5hbWVcIjpcIkNhcnNvblwiLFwibGF0XCI6MzMuODMxNDA1OCxcImxuZ1wiOi0xMTguMjgyMDE2NX0sXCJjYXN0cm8gdmFsbGV5XCI6e1wibmFtZVwiOlwiQ2FzdHJvIFZhbGxleVwiLFwibGF0XCI6MzcuNjk0MDk3MyxcImxuZ1wiOi0xMjIuMDg2MzUyMn0sXCJjYXRoZWRyYWwgY2l0eVwiOntcIm5hbWVcIjpcIkNhdGhlZHJhbCBDaXR5XCIsXCJsYXRcIjozMy43Nzk3NDI2LFwibG5nXCI6LTExNi40NjUyOTExfSxcImNlcmVzXCI6e1wibmFtZVwiOlwiQ2VyZXNcIixcImxhdFwiOjM3LjU5NDkzMTYsXCJsbmdcIjotMTIwLjk1NzcwOTh9LFwiY2Vycml0b3NcIjp7XCJuYW1lXCI6XCJDZXJyaXRvc1wiLFwibGF0XCI6MzMuODU4MzQ4MyxcImxuZ1wiOi0xMTguMDY0Nzg3MX0sXCJjaGljb1wiOntcIm5hbWVcIjpcIkNoaWNvXCIsXCJsYXRcIjozOS43Mjg0OTQ0LFwibG5nXCI6LTEyMS44Mzc0Nzc3fSxcImNoaW5vXCI6e1wibmFtZVwiOlwiQ2hpbm9cIixcImxhdFwiOjM0LjAxMjIzNDYsXCJsbmdcIjotMTE3LjY4ODk0NH0sXCJjaGlubyBoaWxsc1wiOntcIm5hbWVcIjpcIkNoaW5vIEhpbGxzXCIsXCJsYXRcIjozMy45ODk4MTg4LFwibG5nXCI6LTExNy43MzI1ODQ4fSxcImNodWxhIHZpc3RhXCI6e1wibmFtZVwiOlwiQ2h1bGEgVmlzdGFcIixcImxhdFwiOjMyLjY0MDA1NDEsXCJsbmdcIjotMTE3LjA4NDE5NTV9LFwiY2l0cnVzIGhlaWdodHNcIjp7XCJuYW1lXCI6XCJDaXRydXMgSGVpZ2h0c1wiLFwibGF0XCI6MzguNzA3MTI0NyxcImxuZ1wiOi0xMjEuMjgxMDYxMX0sXCJjbG92aXNcIjp7XCJuYW1lXCI6XCJDbG92aXNcIixcImxhdFwiOjM2LjgyNTIyNzcsXCJsbmdcIjotMTE5LjcwMjkxOTR9LFwiY29hY2hlbGxhXCI6e1wibmFtZVwiOlwiQ29hY2hlbGxhXCIsXCJsYXRcIjozMy42ODAzMDAzLFwibG5nXCI6LTExNi4xNzM4OTR9LFwiY29sdG9uXCI6e1wibmFtZVwiOlwiQ29sdG9uXCIsXCJsYXRcIjozNC4wNzM5MDE2LFwibG5nXCI6LTExNy4zMTM2NTQ3fSxcImNvbXB0b25cIjp7XCJuYW1lXCI6XCJDb21wdG9uXCIsXCJsYXRcIjozMy44OTU4NDkyLFwibG5nXCI6LTExOC4yMjAwNzEyfSxcImNvbmNvcmRcIjp7XCJuYW1lXCI6XCJDb25jb3JkXCIsXCJsYXRcIjozNy45Nzc5Nzc2LFwibG5nXCI6LTEyMi4wMzEwNzMzfSxcImNvcm9uYVwiOntcIm5hbWVcIjpcIkNvcm9uYVwiLFwibGF0XCI6MzMuODc1MjkzNSxcImxuZ1wiOi0xMTcuNTY2NDM4NH0sXCJjb3N0YSBtZXNhXCI6e1wibmFtZVwiOlwiQ29zdGEgTWVzYVwiLFwibGF0XCI6MzMuNjQxMTMxNixcImxuZ1wiOi0xMTcuOTE4NjY4OX0sXCJjb3ZpbmFcIjp7XCJuYW1lXCI6XCJDb3ZpbmFcIixcImxhdFwiOjM0LjA5MDAwOTEsXCJsbmdcIjotMTE3Ljg5MDMzOTd9LFwiY3VwZXJ0aW5vXCI6e1wibmFtZVwiOlwiQ3VwZXJ0aW5vXCIsXCJsYXRcIjozNy4zMjI5OTc4LFwibG5nXCI6LTEyMi4wMzIxODIzfSxcImN5cHJlc3NcIjp7XCJuYW1lXCI6XCJDeXByZXNzXCIsXCJsYXRcIjozMy44MTY5NTk5LFwibG5nXCI6LTExOC4wMzcyODUyfSxcImRhbHkgY2l0eVwiOntcIm5hbWVcIjpcIkRhbHkgQ2l0eVwiLFwibGF0XCI6MzcuNjg3OTI0MSxcImxuZ1wiOi0xMjIuNDcwMjA3OX0sXCJkYW52aWxsZVwiOntcIm5hbWVcIjpcIkRhbnZpbGxlXCIsXCJsYXRcIjozNy44MjE1OTI5LFwibG5nXCI6LTEyMS45OTk5NjA2fSxcImRhdmlzXCI6e1wibmFtZVwiOlwiRGF2aXNcIixcImxhdFwiOjM4LjU0NDkwNjUsXCJsbmdcIjotMTIxLjc0MDUxNjd9LFwiZGVsYW5vXCI6e1wibmFtZVwiOlwiRGVsYW5vXCIsXCJsYXRcIjozNS43Njg4NDI1LFwibG5nXCI6LTExOS4yNDcwNTM2fSxcImRpYW1vbmQgYmFyXCI6e1wibmFtZVwiOlwiRGlhbW9uZCBCYXJcIixcImxhdFwiOjM0LjAyODYyMjYsXCJsbmdcIjotMTE3LjgxMDMzNjd9LFwiZG93bmV5XCI6e1wibmFtZVwiOlwiRG93bmV5XCIsXCJsYXRcIjozMy45NDAwMTQzMDAwMDAwMSxcImxuZ1wiOi0xMTguMTMyNTY4OH0sXCJkdWJsaW5cIjp7XCJuYW1lXCI6XCJEdWJsaW5cIixcImxhdFwiOjM3LjcwMjE1MjEsXCJsbmdcIjotMTIxLjkzNTc5MTh9LFwiZWFzdCBsb3MgYW5nZWxlc1wiOntcIm5hbWVcIjpcIkVhc3QgTG9zIEFuZ2VsZXNcIixcImxhdFwiOjM0LjAyMzkwMTUsXCJsbmdcIjotMTE4LjE3MjAxNTd9LFwibG9zIGFuZ2VsZXNcIjp7XCJuYW1lXCI6XCJMb3MgQW5nZWxlc1wiLFwibGF0XCI6MzQuMDUyMjM0MixcImxuZ1wiOi0xMTguMjQzNjg0OX0sXCJlbCBjYWpvblwiOntcIm5hbWVcIjpcIkVsIENham9uXCIsXCJsYXRcIjozMi43OTQ3NzMxLFwibG5nXCI6LTExNi45NjI1MjY5fSxcImVsIGNlbnRyb1wiOntcIm5hbWVcIjpcIkVsIENlbnRyb1wiLFwibGF0XCI6MzIuNzkyLFwibG5nXCI6LTExNS41NjMwNTE0fSxcImVsIGRvcmFkbyBoaWxsc1wiOntcIm5hbWVcIjpcIkVsIERvcmFkbyBIaWxsc1wiLFwibGF0XCI6MzguNjg1NzM2NyxcImxuZ1wiOi0xMjEuMDgyMTY3fSxcImVsayBncm92ZVwiOntcIm5hbWVcIjpcIkVsayBHcm92ZVwiLFwibGF0XCI6MzguNDA4Nzk5MyxcImxuZ1wiOi0xMjEuMzcxNjE3OH0sXCJlbCBtb250ZVwiOntcIm5hbWVcIjpcIkVsIE1vbnRlXCIsXCJsYXRcIjozNC4wNjg2MjA2LFwibG5nXCI6LTExOC4wMjc1NjY3fSxcImVuY2luaXRhc1wiOntcIm5hbWVcIjpcIkVuY2luaXRhc1wiLFwibGF0XCI6MzMuMDM2OTg2NyxcImxuZ1wiOi0xMTcuMjkxOTgxOH0sXCJlc2NvbmRpZG9cIjp7XCJuYW1lXCI6XCJFc2NvbmRpZG9cIixcImxhdFwiOjMzLjExOTIwNjgsXCJsbmdcIjotMTE3LjA4NjQyMX0sXCJmYWlyZmllbGRcIjp7XCJuYW1lXCI6XCJGYWlyZmllbGRcIixcImxhdFwiOjM4LjI0OTM1ODA5OTk5OTk5LFwibG5nXCI6LTEyMi4wMzk5NjYzfSxcImZsb3JlbmNlLWdyYWhhbVwiOntcIm5hbWVcIjpcIkZsb3JlbmNlLUdyYWhhbVwiLFwibGF0XCI6MzMuOTY5NDQ0NCxcImxuZ1wiOi0xMTguMjQzODg4OX0sXCJmbG9yaW5cIjp7XCJuYW1lXCI6XCJGbG9yaW5cIixcImxhdFwiOjM4LjQ5NjAxODcsXCJsbmdcIjotMTIxLjQwODg0MTZ9LFwiZm9sc29tXCI6e1wibmFtZVwiOlwiRm9sc29tXCIsXCJsYXRcIjozOC42Nzc5NTkxLFwibG5nXCI6LTEyMS4xNzYwNTgzfSxcImZvbnRhbmFcIjp7XCJuYW1lXCI6XCJGb250YW5hXCIsXCJsYXRcIjozNC4wOTIyMzM1LFwibG5nXCI6LTExNy40MzUwNDh9LFwiZm91bnRhaW4gdmFsbGV5XCI6e1wibmFtZVwiOlwiRm91bnRhaW4gVmFsbGV5XCIsXCJsYXRcIjozMy43MDkxODQ3LFwibG5nXCI6LTExNy45NTM2Njk3fSxcImZyZW1vbnRcIjp7XCJuYW1lXCI6XCJGcmVtb250XCIsXCJsYXRcIjozNy41NDgyNjk3LFwibG5nXCI6LTEyMS45ODg1NzE5fSxcImZyZXNub1wiOntcIm5hbWVcIjpcIkZyZXNub1wiLFwibGF0XCI6MzYuNzQ3NzI3MixcImxuZ1wiOi0xMTkuNzcyMzY2MX0sXCJmdWxsZXJ0b25cIjp7XCJuYW1lXCI6XCJGdWxsZXJ0b25cIixcImxhdFwiOjMzLjg3MDI5MjMsXCJsbmdcIjotMTE3LjkyNTMzOH0sXCJnYXJkZW5hXCI6e1wibmFtZVwiOlwiR2FyZGVuYVwiLFwibGF0XCI6MzMuODg4MzQ4NyxcImxuZ1wiOi0xMTguMzA4OTYyNH0sXCJnYXJkZW4gZ3JvdmVcIjp7XCJuYW1lXCI6XCJHYXJkZW4gR3JvdmVcIixcImxhdFwiOjMzLjc3MzkwNTMsXCJsbmdcIjotMTE3Ljk0MTQ0Nzd9LFwiZ2xlbmRhbGVcIjp7XCJuYW1lXCI6XCJHbGVuZGFsZVwiLFwibGF0XCI6MzQuMTQyNTA3OCxcImxuZ1wiOi0xMTguMjU1MDc1fSxcImdsZW5kb3JhXCI6e1wibmFtZVwiOlwiR2xlbmRvcmFcIixcImxhdFwiOjM0LjEzNjExODcsXCJsbmdcIjotMTE3Ljg2NTMzOX0sXCJoYWNpZW5kYSBoZWlnaHRzXCI6e1wibmFtZVwiOlwiSGFjaWVuZGEgSGVpZ2h0c1wiLFwibGF0XCI6MzMuOTkzMDY3NyxcImxuZ1wiOi0xMTcuOTY4Njc1NX0sXCJoYXd0aG9ybmVcIjp7XCJuYW1lXCI6XCJIYXd0aG9ybmVcIixcImxhdFwiOjMzLjkxNjQwMzIsXCJsbmdcIjotMTE4LjM1MjU3NDh9LFwiaGF5d2FyZFwiOntcIm5hbWVcIjpcIkhheXdhcmRcIixcImxhdFwiOjM3LjY2ODgyMDUsXCJsbmdcIjotMTIyLjA4MDc5NjR9LFwiaGVtZXRcIjp7XCJuYW1lXCI6XCJIZW1ldFwiLFwibGF0XCI6MzMuNzQ3NTIwMyxcImxuZ1wiOi0xMTYuOTcxOTY4NH0sXCJoZXNwZXJpYVwiOntcIm5hbWVcIjpcIkhlc3BlcmlhXCIsXCJsYXRcIjozNC40MjYzODg2LFwibG5nXCI6LTExNy4zMDA4Nzg0fSxcImhpZ2hsYW5kXCI6e1wibmFtZVwiOlwiSGlnaGxhbmRcIixcImxhdFwiOjM0LjEyODM0NDIsXCJsbmdcIjotMTE3LjIwODY1MTN9LFwiaHVudGluZ3RvbiBiZWFjaFwiOntcIm5hbWVcIjpcIkh1bnRpbmd0b24gQmVhY2hcIixcImxhdFwiOjMzLjY2MDI5NyxcImxuZ1wiOi0xMTcuOTk5MjI2NX0sXCJodW50aW5ndG9uIHBhcmtcIjp7XCJuYW1lXCI6XCJIdW50aW5ndG9uIFBhcmtcIixcImxhdFwiOjMzLjk4MTY4MTIsXCJsbmdcIjotMTE4LjIyNTA3MjV9LFwiaW5kaW9cIjp7XCJuYW1lXCI6XCJJbmRpb1wiLFwibGF0XCI6MzMuNzIwNTc3MSxcImxuZ1wiOi0xMTYuMjE1NTYxOX0sXCJpbmdsZXdvb2RcIjp7XCJuYW1lXCI6XCJJbmdsZXdvb2RcIixcImxhdFwiOjMzLjk2MTY4MDEsXCJsbmdcIjotMTE4LjM1MzEzMTF9LFwiaXJ2aW5lXCI6e1wibmFtZVwiOlwiSXJ2aW5lXCIsXCJsYXRcIjozMy42ODM5NDczLFwibG5nXCI6LTExNy43OTQ2OTQyfSxcImxhZ3VuYSBuaWd1ZWxcIjp7XCJuYW1lXCI6XCJMYWd1bmEgTmlndWVsXCIsXCJsYXRcIjozMy41MjI1MjYxLFwibG5nXCI6LTExNy43MDc1NTI2fSxcImxhIGhhYnJhXCI6e1wibmFtZVwiOlwiTGEgSGFicmFcIixcImxhdFwiOjMzLjkzMTk1NzgsXCJsbmdcIjotMTE3Ljk0NjE3MzR9LFwibGFrZSBlbHNpbm9yZVwiOntcIm5hbWVcIjpcIkxha2UgRWxzaW5vcmVcIixcImxhdFwiOjMzLjY2ODA3NzIsXCJsbmdcIjotMTE3LjMyNzI2MTV9LFwibGFrZSBmb3Jlc3RcIjp7XCJuYW1lXCI6XCJMYWtlIEZvcmVzdFwiLFwibGF0XCI6MzMuNjQ2OTY2MSxcImxuZ1wiOi0xMTcuNjg5MjE4fSxcImxha2V3b29kXCI6e1wibmFtZVwiOlwiTGFrZXdvb2RcIixcImxhdFwiOjMzLjg1MzYyNjksXCJsbmdcIjotMTE4LjEzMzk1NjN9LFwibGEgbWVzYVwiOntcIm5hbWVcIjpcIkxhIE1lc2FcIixcImxhdFwiOjMyLjc2NzgyODcsXCJsbmdcIjotMTE3LjAyMzA4Mzl9LFwibGEgbWlyYWRhXCI6e1wibmFtZVwiOlwiTGEgTWlyYWRhXCIsXCJsYXRcIjozMy45MTcyMzU3LFwibG5nXCI6LTExOC4wMTIwMDg2fSxcImxhbmNhc3RlclwiOntcIm5hbWVcIjpcIkxhbmNhc3RlclwiLFwibGF0XCI6MzQuNjg2Nzg0NixcImxuZ1wiOi0xMTguMTU0MTYzMn0sXCJsYSBxdWludGFcIjp7XCJuYW1lXCI6XCJMYSBRdWludGFcIixcImxhdFwiOjMzLjY2MzM1NzMsXCJsbmdcIjotMTE2LjMxMDAwOTV9LFwibGluY29sblwiOntcIm5hbWVcIjpcIkxpbmNvbG5cIixcImxhdFwiOjM4Ljg5MTU2NSxcImxuZ1wiOi0xMjEuMjkzMDA3OX0sXCJsaXZlcm1vcmVcIjp7XCJuYW1lXCI6XCJMaXZlcm1vcmVcIixcImxhdFwiOjM3LjY4MTg3NDUsXCJsbmdcIjotMTIxLjc2ODAwODh9LFwibG9kaVwiOntcIm5hbWVcIjpcIkxvZGlcIixcImxhdFwiOjM4LjEzMDE5NjgsXCJsbmdcIjotMTIxLjI3MjQ0NzN9LFwibG9tcG9jXCI6e1wibmFtZVwiOlwiTG9tcG9jXCIsXCJsYXRcIjozNC42MzkxNTAxLFwibG5nXCI6LTEyMC40NTc5NDA5fSxcImxvbmcgYmVhY2hcIjp7XCJuYW1lXCI6XCJMb25nIEJlYWNoXCIsXCJsYXRcIjozMy44MDQxNjY3LFwibG5nXCI6LTExOC4xNTgwNTU2fSxcImx5bndvb2RcIjp7XCJuYW1lXCI6XCJMeW53b29kXCIsXCJsYXRcIjozMy45MzAyOTMsXCJsbmdcIjotMTE4LjIxMTQ2MDN9LFwibWFkZXJhXCI6e1wibmFtZVwiOlwiTWFkZXJhXCIsXCJsYXRcIjozNi45NjEzMzU2LFwibG5nXCI6LTEyMC4wNjA3MTc2fSxcIm1hbnRlY2FcIjp7XCJuYW1lXCI6XCJNYW50ZWNhXCIsXCJsYXRcIjozNy43OTc0MjczLFwibG5nXCI6LTEyMS4yMTYwNTI2fSxcIm1lbmlmZWVcIjp7XCJuYW1lXCI6XCJNZW5pZmVlXCIsXCJsYXRcIjozMy42OTIzNzIsXCJsbmdcIjotMTE3LjE4ODQ1ODV9LFwibWVyY2VkXCI6e1wibmFtZVwiOlwiTWVyY2VkXCIsXCJsYXRcIjozNy4zMDIxNjMyLFwibG5nXCI6LTEyMC40ODI5Njc3fSxcIm1pbHBpdGFzXCI6e1wibmFtZVwiOlwiTWlscGl0YXNcIixcImxhdFwiOjM3LjQyODI3MjQsXCJsbmdcIjotMTIxLjkwNjYyMzh9LFwibWlzc2lvbiB2aWVqb1wiOntcIm5hbWVcIjpcIk1pc3Npb24gVmllam9cIixcImxhdFwiOjMzLjYwMDAyMzIsXCJsbmdcIjotMTE3LjY3MTk5NTN9LFwibW9kZXN0b1wiOntcIm5hbWVcIjpcIk1vZGVzdG9cIixcImxhdFwiOjM3LjYzOTA5NzE5OTk5OTk5LFwibG5nXCI6LTEyMC45OTY4NzgyfSxcIm1vbnRlYmVsbG9cIjp7XCJuYW1lXCI6XCJNb250ZWJlbGxvXCIsXCJsYXRcIjozNC4wMTY1MDUzLFwibG5nXCI6LTExOC4xMTM3NTM1fSxcIm1vbnRlcmV5IHBhcmtcIjp7XCJuYW1lXCI6XCJNb250ZXJleSBQYXJrXCIsXCJsYXRcIjozNC4wNjI1MTA2LFwibG5nXCI6LTExOC4xMjI4NDc2fSxcIm1vcmVubyB2YWxsZXlcIjp7XCJuYW1lXCI6XCJNb3Jlbm8gVmFsbGV5XCIsXCJsYXRcIjozMy45NDI0NjU4LFwibG5nXCI6LTExNy4yMjk2NzE3fSxcIm1vdW50YWluIHZpZXdcIjp7XCJuYW1lXCI6XCJNb3VudGFpbiBWaWV3XCIsXCJsYXRcIjozNy4zODYwNTE3LFwibG5nXCI6LTEyMi4wODM4NTExfSxcIm11cnJpZXRhXCI6e1wibmFtZVwiOlwiTXVycmlldGFcIixcImxhdFwiOjMzLjU1MzkxNDMsXCJsbmdcIjotMTE3LjIxMzkyMzJ9LFwibmFwYVwiOntcIm5hbWVcIjpcIk5hcGFcIixcImxhdFwiOjM4LjUwMjQ2ODksXCJsbmdcIjotMTIyLjI2NTM4ODd9LFwibmF0aW9uYWwgY2l0eVwiOntcIm5hbWVcIjpcIk5hdGlvbmFsIENpdHlcIixcImxhdFwiOjMyLjY3ODEwODUsXCJsbmdcIjotMTE3LjA5OTE5Njd9LFwibmV3YXJrXCI6e1wibmFtZVwiOlwiTmV3YXJrXCIsXCJsYXRcIjozNy41Mjk2NTkzLFwibG5nXCI6LTEyMi4wNDAyMzk5fSxcIm5ld3BvcnQgYmVhY2hcIjp7XCJuYW1lXCI6XCJOZXdwb3J0IEJlYWNoXCIsXCJsYXRcIjozMy42MTg5MTAxLFwibG5nXCI6LTExNy45Mjg5NDY5fSxcIm5vcnRoIGhpZ2hsYW5kc1wiOntcIm5hbWVcIjpcIk5vcnRoIEhpZ2hsYW5kc1wiLFwibGF0XCI6MzguNjg1NzM2MixcImxuZ1wiOi0xMjEuMzcyMTc0NX0sXCJub3J3YWxrXCI6e1wibmFtZVwiOlwiTm9yd2Fsa1wiLFwibGF0XCI6MzMuOTAyMjM2NyxcImxuZ1wiOi0xMTguMDgxNzMzfSxcIm5vdmF0b1wiOntcIm5hbWVcIjpcIk5vdmF0b1wiLFwibGF0XCI6MzguMTA3NDE5OCxcImxuZ1wiOi0xMjIuNTY5NzAzMn0sXCJvYWtsYW5kXCI6e1wibmFtZVwiOlwiT2FrbGFuZFwiLFwibGF0XCI6MzcuODA0MzYzNyxcImxuZ1wiOi0xMjIuMjcxMTEzN30sXCJvY2VhbnNpZGVcIjp7XCJuYW1lXCI6XCJPY2VhbnNpZGVcIixcImxhdFwiOjMzLjE5NTg2OTYsXCJsbmdcIjotMTE3LjM3OTQ4MzR9LFwib250YXJpb1wiOntcIm5hbWVcIjpcIk9udGFyaW9cIixcImxhdFwiOjM0LjA2MzM0NDMsXCJsbmdcIjotMTE3LjY1MDg4NzZ9LFwib3JhbmdlXCI6e1wibmFtZVwiOlwiT3JhbmdlXCIsXCJsYXRcIjozMy43ODc3OTQ0LFwibG5nXCI6LTExNy44NTMxMTE5fSxcIm94bmFyZFwiOntcIm5hbWVcIjpcIk94bmFyZFwiLFwibGF0XCI6MzQuMTk3NTA0OCxcImxuZ1wiOi0xMTkuMTc3MDUxNn0sXCJwYWxtZGFsZVwiOntcIm5hbWVcIjpcIlBhbG1kYWxlXCIsXCJsYXRcIjozNC41Nzk0MzQzLFwibG5nXCI6LTExOC4xMTY0NjEzfSxcInBhbG0gZGVzZXJ0XCI6e1wibmFtZVwiOlwiUGFsbSBEZXNlcnRcIixcImxhdFwiOjMzLjcyMjI0NDUsXCJsbmdcIjotMTE2LjM3NDQ1NTZ9LFwicGFsbSBzcHJpbmdzXCI6e1wibmFtZVwiOlwiUGFsbSBTcHJpbmdzXCIsXCJsYXRcIjozMy44MzAyOTYxLFwibG5nXCI6LTExNi41NDUyOTIxfSxcInBhbG8gYWx0b1wiOntcIm5hbWVcIjpcIlBhbG8gQWx0b1wiLFwibGF0XCI6MzcuNDQxODgzNCxcImxuZ1wiOi0xMjIuMTQzMDE5NX0sXCJwYXJhbW91bnRcIjp7XCJuYW1lXCI6XCJQYXJhbW91bnRcIixcImxhdFwiOjMzLjg4OTQ1OTgsXCJsbmdcIjotMTE4LjE1OTc5MTF9LFwicGFzYWRlbmFcIjp7XCJuYW1lXCI6XCJQYXNhZGVuYVwiLFwibGF0XCI6MzQuMTQ3Nzg0OSxcImxuZ1wiOi0xMTguMTQ0NTE1NX0sXCJwZXJyaXNcIjp7XCJuYW1lXCI6XCJQZXJyaXNcIixcImxhdFwiOjMzLjc4MjUxOTQsXCJsbmdcIjotMTE3LjIyODY0Nzh9LFwicGV0YWx1bWFcIjp7XCJuYW1lXCI6XCJQZXRhbHVtYVwiLFwibGF0XCI6MzguMjMyNDE3LFwibG5nXCI6LTEyMi42MzY2NTI0fSxcInBpY28gcml2ZXJhXCI6e1wibmFtZVwiOlwiUGljbyBSaXZlcmFcIixcImxhdFwiOjMzLjk4MzA2ODgsXCJsbmdcIjotMTE4LjA5NjczNX0sXCJwaXR0c2J1cmdcIjp7XCJuYW1lXCI6XCJQaXR0c2J1cmdcIixcImxhdFwiOjM4LjAyNzk3NjIsXCJsbmdcIjotMTIxLjg4NDY4MDZ9LFwicGxhY2VudGlhXCI6e1wibmFtZVwiOlwiUGxhY2VudGlhXCIsXCJsYXRcIjozMy44NzIyMzcxLFwibG5nXCI6LTExNy44NzAzMzYzfSxcInBsZWFzYW50b25cIjp7XCJuYW1lXCI6XCJQbGVhc2FudG9uXCIsXCJsYXRcIjozNy42NjI0MzEyLFwibG5nXCI6LTEyMS44NzQ2Nzg5fSxcInBvbW9uYVwiOntcIm5hbWVcIjpcIlBvbW9uYVwiLFwibGF0XCI6MzQuMDU1MjI2NyxcImxuZ1wiOi0xMTcuNzUyMzA0OH0sXCJwb3dheVwiOntcIm5hbWVcIjpcIlBvd2F5XCIsXCJsYXRcIjozMi45NjI4MjMyLFwibG5nXCI6LTExNy4wMzU4NjQ2fSxcInJhbmNobyBjb3Jkb3ZhXCI6e1wibmFtZVwiOlwiUmFuY2hvIENvcmRvdmFcIixcImxhdFwiOjM4LjU4OTA3MjMsXCJsbmdcIjotMTIxLjMwMjcyOH0sXCJyYW5jaG8gY3VjYW1vbmdhXCI6e1wibmFtZVwiOlwiUmFuY2hvIEN1Y2Ftb25nYVwiLFwibGF0XCI6MzQuMTA2Mzk4ODk5OTk5OTksXCJsbmdcIjotMTE3LjU5MzEwODR9LFwicmFuY2hvIHBhbG9zIHZlcmRlc1wiOntcIm5hbWVcIjpcIlJhbmNobyBQYWxvcyBWZXJkZXNcIixcImxhdFwiOjMzLjc0NDQ2MTMsXCJsbmdcIjotMTE4LjM4NzAxNzN9LFwicmFuY2hvIHNhbnRhIG1hcmdhcml0YVwiOntcIm5hbWVcIjpcIlJhbmNobyBTYW50YSBNYXJnYXJpdGFcIixcImxhdFwiOjMzLjY0MDg1NSxcImxuZ1wiOi0xMTcuNjAzMTA0fSxcInJlZGRpbmdcIjp7XCJuYW1lXCI6XCJSZWRkaW5nXCIsXCJsYXRcIjo0MC41ODY1Mzk2LFwibG5nXCI6LTEyMi4zOTE2NzU0fSxcInJlZGxhbmRzXCI6e1wibmFtZVwiOlwiUmVkbGFuZHNcIixcImxhdFwiOjM0LjA1NTU2OTMsXCJsbmdcIjotMTE3LjE4MjUzODF9LFwicmVkb25kbyBiZWFjaFwiOntcIm5hbWVcIjpcIlJlZG9uZG8gQmVhY2hcIixcImxhdFwiOjMzLjg0OTE4MTYsXCJsbmdcIjotMTE4LjM4ODQwNzh9LFwicmVkd29vZCBjaXR5XCI6e1wibmFtZVwiOlwiUmVkd29vZCBDaXR5XCIsXCJsYXRcIjozNy40ODUyMTUyMDAwMDAwMSxcImxuZ1wiOi0xMjIuMjM2MzU0OH0sXCJyaWFsdG9cIjp7XCJuYW1lXCI6XCJSaWFsdG9cIixcImxhdFwiOjM0LjEwNjQwMDEsXCJsbmdcIjotMTE3LjM3MDMyMzV9LFwicmljaG1vbmRcIjp7XCJuYW1lXCI6XCJSaWNobW9uZFwiLFwibGF0XCI6MzcuOTM1NzU3NixcImxuZ1wiOi0xMjIuMzQ3NzQ4Nn0sXCJyaXZlcnNpZGVcIjp7XCJuYW1lXCI6XCJSaXZlcnNpZGVcIixcImxhdFwiOjMzLjk1MzM0ODcsXCJsbmdcIjotMTE3LjM5NjE1NjR9LFwicm9ja2xpblwiOntcIm5hbWVcIjpcIlJvY2tsaW5cIixcImxhdFwiOjM4Ljc5MDczMzksXCJsbmdcIjotMTIxLjIzNTc4Mjh9LFwicm9obmVydCBwYXJrXCI6e1wibmFtZVwiOlwiUm9obmVydCBQYXJrXCIsXCJsYXRcIjozOC4zMzk2MzY3LFwibG5nXCI6LTEyMi43MDEwOTg0fSxcInJvc2VtZWFkXCI6e1wibmFtZVwiOlwiUm9zZW1lYWRcIixcImxhdFwiOjM0LjA4MDU2NTEsXCJsbmdcIjotMTE4LjA3Mjg0Nn0sXCJyb3NldmlsbGVcIjp7XCJuYW1lXCI6XCJSb3NldmlsbGVcIixcImxhdFwiOjM4Ljc1MjEyMzUsXCJsbmdcIjotMTIxLjI4ODAwNTl9LFwicm93bGFuZCBoZWlnaHRzXCI6e1wibmFtZVwiOlwiUm93bGFuZCBIZWlnaHRzXCIsXCJsYXRcIjozMy45NzYxMjM4LFwibG5nXCI6LTExNy45MDUzMzk1fSxcInNhY3JhbWVudG9cIjp7XCJuYW1lXCI6XCJTYWNyYW1lbnRvXCIsXCJsYXRcIjozOC41ODE1NzE5LFwibG5nXCI6LTEyMS40OTQzOTk2fSxcInNhbGluYXNcIjp7XCJuYW1lXCI6XCJTYWxpbmFzXCIsXCJsYXRcIjozNi42Nzc3MzcyLFwibG5nXCI6LTEyMS42NTU1MDEzfSxcInNhbiBiZXJuYXJkaW5vXCI6e1wibmFtZVwiOlwiU2FuIEJlcm5hcmRpbm9cIixcImxhdFwiOjM0LjEwODM0NDksXCJsbmdcIjotMTE3LjI4OTc2NTJ9LFwic2FuIGJydW5vXCI6e1wibmFtZVwiOlwiU2FuIEJydW5vXCIsXCJsYXRcIjozNy42MzA0OTA0LFwibG5nXCI6LTEyMi40MTEwODM1fSxcInZlbnR1cmFcIjp7XCJuYW1lXCI6XCJWZW50dXJhXCIsXCJsYXRcIjozNC4yNzQ2NDA1LFwibG5nXCI6LTExOS4yMjkwMDUzfSxcInNhbiBjbGVtZW50ZVwiOntcIm5hbWVcIjpcIlNhbiBDbGVtZW50ZVwiLFwibGF0XCI6MzMuNDI2OTcyOCxcImxuZ1wiOi0xMTcuNjExOTkyNX0sXCJzYW4gZGllZ29cIjp7XCJuYW1lXCI6XCJTYW4gRGllZ29cIixcImxhdFwiOjMyLjcxNTMyOTIsXCJsbmdcIjotMTE3LjE1NzI1NTF9LFwic2FuIGZyYW5jaXNjb1wiOntcIm5hbWVcIjpcIlNhbiBGcmFuY2lzY29cIixcImxhdFwiOjM3Ljc3NDkyOTUsXCJsbmdcIjotMTIyLjQxOTQxNTV9LFwic2FuIGphY2ludG9cIjp7XCJuYW1lXCI6XCJTYW4gSmFjaW50b1wiLFwibGF0XCI6MzMuNzgzOTA4NCxcImxuZ1wiOi0xMTYuOTU4NjM1fSxcInNhbiBqb3NlXCI6e1wibmFtZVwiOlwiU2FuIEpvc2VcIixcImxhdFwiOjM3LjMzOTM4NTcsXCJsbmdcIjotMTIxLjg5NDk1NTV9LFwic2FuIGxlYW5kcm9cIjp7XCJuYW1lXCI6XCJTYW4gTGVhbmRyb1wiLFwibGF0XCI6MzcuNzI0OTI5NixcImxuZ1wiOi0xMjIuMTU2MDc2OH0sXCJzYW4gbHVpcyBvYmlzcG9cIjp7XCJuYW1lXCI6XCJTYW4gTHVpcyBPYmlzcG9cIixcImxhdFwiOjM1LjI4Mjc1MjQsXCJsbmdcIjotMTIwLjY1OTYxNTZ9LFwic2FuIG1hcmNvc1wiOntcIm5hbWVcIjpcIlNhbiBNYXJjb3NcIixcImxhdFwiOjMzLjE0MzM3MjMsXCJsbmdcIjotMTE3LjE2NjE0NDl9LFwic2FuIG1hdGVvXCI6e1wibmFtZVwiOlwiU2FuIE1hdGVvXCIsXCJsYXRcIjozNy41NjI5OTE3LFwibG5nXCI6LTEyMi4zMjU1MjU0fSxcInNhbiByYWZhZWxcIjp7XCJuYW1lXCI6XCJTYW4gUmFmYWVsXCIsXCJsYXRcIjozNy45NzM1MzQ2LFwibG5nXCI6LTEyMi41MzEwODc0fSxcInNhbiByYW1vblwiOntcIm5hbWVcIjpcIlNhbiBSYW1vblwiLFwibGF0XCI6MzcuNzc5OTI3MyxcImxuZ1wiOi0xMjEuOTc4MDE1M30sXCJzYW50YSBhbmFcIjp7XCJuYW1lXCI6XCJTYW50YSBBbmFcIixcImxhdFwiOjMzLjc0NTU3MzEsXCJsbmdcIjotMTE3Ljg2NzgzMzh9LFwic2FudGEgYmFyYmFyYVwiOntcIm5hbWVcIjpcIlNhbnRhIEJhcmJhcmFcIixcImxhdFwiOjM0LjQyMDgzMDUsXCJsbmdcIjotMTE5LjY5ODE5MDF9LFwic2FudGEgY2xhcmFcIjp7XCJuYW1lXCI6XCJTYW50YSBDbGFyYVwiLFwibGF0XCI6MzcuMzU0MTA3OSxcImxuZ1wiOi0xMjEuOTU1MjM1Nn0sXCJzYW50YSBjbGFyaXRhXCI6e1wibmFtZVwiOlwiU2FudGEgQ2xhcml0YVwiLFwibGF0XCI6MzQuMzkxNjY0MSxcImxuZ1wiOi0xMTguNTQyNTg2fSxcInNhbnRhIGNydXpcIjp7XCJuYW1lXCI6XCJTYW50YSBDcnV6XCIsXCJsYXRcIjozNi45NzQxMTcxLFwibG5nXCI6LTEyMi4wMzA3OTYzfSxcInNhbnRhIG1hcmlhXCI6e1wibmFtZVwiOlwiU2FudGEgTWFyaWFcIixcImxhdFwiOjM0Ljk1MzAzMzcsXCJsbmdcIjotMTIwLjQzNTcxOTF9LFwic2FudGEgbW9uaWNhXCI6e1wibmFtZVwiOlwiU2FudGEgTW9uaWNhXCIsXCJsYXRcIjozNC4wMTk0NTQzLFwibG5nXCI6LTExOC40OTExOTEyfSxcInNhbnRhIHJvc2FcIjp7XCJuYW1lXCI6XCJTYW50YSBSb3NhXCIsXCJsYXRcIjozOC40NDA0Njc0LFwibG5nXCI6LTEyMi43MTQ0MzE0fSxcInNhbnRlZVwiOntcIm5hbWVcIjpcIlNhbnRlZVwiLFwibGF0XCI6MzIuODM4MzgyOCxcImxuZ1wiOi0xMTYuOTczOTE2N30sXCJzaW1pIHZhbGxleVwiOntcIm5hbWVcIjpcIlNpbWkgVmFsbGV5XCIsXCJsYXRcIjozNC4yNjk0NDc0LFwibG5nXCI6LTExOC43ODE0ODJ9LFwic291dGggZ2F0ZVwiOntcIm5hbWVcIjpcIlNvdXRoIEdhdGVcIixcImxhdFwiOjMzLjk1NDczNyxcImxuZ1wiOi0xMTguMjEyMDE2MX0sXCJzb3V0aCBzYW4gZnJhbmNpc2NvXCI6e1wibmFtZVwiOlwiU291dGggU2FuIEZyYW5jaXNjb1wiLFwibGF0XCI6MzcuNjU0NjU2LFwibG5nXCI6LTEyMi40MDc3NDk4fSxcInNvdXRoIHdoaXR0aWVyXCI6e1wibmFtZVwiOlwiU291dGggV2hpdHRpZXJcIixcImxhdFwiOjMzLjkzNDcyMjIsXCJsbmdcIjotMTE4LjAzMDgzMzN9LFwic3RvY2t0b25cIjp7XCJuYW1lXCI6XCJTdG9ja3RvblwiLFwibGF0XCI6MzcuOTU3NzAxNixcImxuZ1wiOi0xMjEuMjkwNzc5Nn0sXCJzdW5ueXZhbGVcIjp7XCJuYW1lXCI6XCJTdW5ueXZhbGVcIixcImxhdFwiOjM3LjM2ODgzLFwibG5nXCI6LTEyMi4wMzYzNDk2fSxcInRlbWVjdWxhXCI6e1wibmFtZVwiOlwiVGVtZWN1bGFcIixcImxhdFwiOjMzLjQ5MzYzOTEsXCJsbmdcIjotMTE3LjE0ODM2NDh9LFwidGhvdXNhbmQgb2Frc1wiOntcIm5hbWVcIjpcIlRob3VzYW5kIE9ha3NcIixcImxhdFwiOjM0LjE3MDU2MDksXCJsbmdcIjotMTE4LjgzNzU5Mzd9LFwidG9ycmFuY2VcIjp7XCJuYW1lXCI6XCJUb3JyYW5jZVwiLFwibGF0XCI6MzMuODM1ODQ5MixcImxuZ1wiOi0xMTguMzQwNjI4OH0sXCJ0cmFjeVwiOntcIm5hbWVcIjpcIlRyYWN5XCIsXCJsYXRcIjozNy43Mzk2NTEzLFwibG5nXCI6LTEyMS40MjUyMjI3fSxcInR1cmxvY2tcIjp7XCJuYW1lXCI6XCJUdXJsb2NrXCIsXCJsYXRcIjozNy40OTQ2NTY4LFwibG5nXCI6LTEyMC44NDY1OTQxfSxcInR1c3RpblwiOntcIm5hbWVcIjpcIlR1c3RpblwiLFwibGF0XCI6MzMuNzQ1ODUxMSxcImxuZ1wiOi0xMTcuODI2MTY2fSxcInVuaW9uIGNpdHlcIjp7XCJuYW1lXCI6XCJVbmlvbiBDaXR5XCIsXCJsYXRcIjozNy41OTE5MzA0LFwibG5nXCI6LTEyMi4wNDU2MTk5fSxcInVwbGFuZFwiOntcIm5hbWVcIjpcIlVwbGFuZFwiLFwibGF0XCI6MzQuMDk3NTEsXCJsbmdcIjotMTE3LjY0ODM4NzZ9LFwidmFjYXZpbGxlXCI6e1wibmFtZVwiOlwiVmFjYXZpbGxlXCIsXCJsYXRcIjozOC4zNTY1NzczLFwibG5nXCI6LTEyMS45ODc3NDQ0fSxcInZhbGxlam9cIjp7XCJuYW1lXCI6XCJWYWxsZWpvXCIsXCJsYXRcIjozOC4xMDQwODY0LFwibG5nXCI6LTEyMi4yNTY2MzY3fSxcInZpY3RvcnZpbGxlXCI6e1wibmFtZVwiOlwiVmljdG9ydmlsbGVcIixcImxhdFwiOjM0LjUzNjEwNjcsXCJsbmdcIjotMTE3LjI5MTE1NjV9LFwidmlzYWxpYVwiOntcIm5hbWVcIjpcIlZpc2FsaWFcIixcImxhdFwiOjM2LjMzMDIyODQsXCJsbmdcIjotMTE5LjI5MjA1ODV9LFwidmlzdGFcIjp7XCJuYW1lXCI6XCJWaXN0YVwiLFwibGF0XCI6MzMuMjAwMDM2OCxcImxuZ1wiOi0xMTcuMjQyNTM1NX0sXCJ3YWxudXQgY3JlZWtcIjp7XCJuYW1lXCI6XCJXYWxudXQgQ3JlZWtcIixcImxhdFwiOjM3LjkwNjMxMzEsXCJsbmdcIjotMTIyLjA2NDk2M30sXCJ3YXRzb252aWxsZVwiOntcIm5hbWVcIjpcIldhdHNvbnZpbGxlXCIsXCJsYXRcIjozNi45MTAyMzEsXCJsbmdcIjotMTIxLjc1Njg5NDZ9LFwid2VzdCBjb3ZpbmFcIjp7XCJuYW1lXCI6XCJXZXN0IENvdmluYVwiLFwibGF0XCI6MzQuMDY4NjIwOCxcImxuZ1wiOi0xMTcuOTM4OTUyNn0sXCJ3ZXN0bWluc3RlclwiOntcIm5hbWVcIjpcIldlc3RtaW5zdGVyXCIsXCJsYXRcIjozMy43NTEzNDE5LFwibG5nXCI6LTExNy45OTM5OTIxfSxcIndlc3Qgc2FjcmFtZW50b1wiOntcIm5hbWVcIjpcIldlc3QgU2FjcmFtZW50b1wiLFwibGF0XCI6MzguNTgwNDYwOSxcImxuZ1wiOi0xMjEuNTMwMjM0fSxcIndoaXR0aWVyXCI6e1wibmFtZVwiOlwiV2hpdHRpZXJcIixcImxhdFwiOjMzLjk3OTE3OTMsXCJsbmdcIjotMTE4LjAzMjg0NH0sXCJ3b29kbGFuZFwiOntcIm5hbWVcIjpcIldvb2RsYW5kXCIsXCJsYXRcIjozOC42Nzg1MTU3MDAwMDAwMSxcImxuZ1wiOi0xMjEuNzczMjk3MX0sXCJ5b3JiYSBsaW5kYVwiOntcIm5hbWVcIjpcIllvcmJhIExpbmRhXCIsXCJsYXRcIjozMy44ODg2MjU5LFwibG5nXCI6LTExNy44MTMxMTI1fSxcInl1YmEgY2l0eVwiOntcIm5hbWVcIjpcIll1YmEgQ2l0eVwiLFwibGF0XCI6MzkuMTQwNDQ3NyxcImxuZ1wiOi0xMjEuNjE2OTEwOH0sXCJ5dWNhaXBhXCI6e1wibmFtZVwiOlwiWXVjYWlwYVwiLFwibGF0XCI6MzQuMDMzNjI1LFwibG5nXCI6LTExNy4wNDMwODY1fX0sXCJOWVwiOntcImFsYmFueVwiOntcIm5hbWVcIjpcIkFsYmFueVwiLFwibGF0XCI6NDIuNjUyNTc5MyxcImxuZ1wiOi03My43NTYyMzE3fSxcImJpbmdoYW10b25cIjp7XCJuYW1lXCI6XCJCaW5naGFtdG9uXCIsXCJsYXRcIjo0Mi4wOTg2ODY2OTk5OTk5OSxcImxuZ1wiOi03NS45MTc5NzM4MDAwMDAwMX0sXCJicmVudHdvb2RcIjp7XCJuYW1lXCI6XCJCcmVudHdvb2RcIixcImxhdFwiOjQwLjc4MTIwOTMsXCJsbmdcIjotNzMuMjQ2MjI3M30sXCJidWZmYWxvXCI6e1wibmFtZVwiOlwiQnVmZmFsb1wiLFwibGF0XCI6NDIuODg2NDQ2Nzk5OTk5OTksXCJsbmdcIjotNzguODc4MzY4OX0sXCJjaGVla3Rvd2FnYVwiOntcIm5hbWVcIjpcIkNoZWVrdG93YWdhXCIsXCJsYXRcIjo0Mi45MDI2MTM2LFwibG5nXCI6LTc4Ljc0NDU3MTk5OTk5OTk5fSxcImZyZWVwb3J0XCI6e1wibmFtZVwiOlwiRnJlZXBvcnRcIixcImxhdFwiOjQwLjY1NzYwMjIsXCJsbmdcIjotNzMuNTgzMTgzNDk5OTk5OTl9LFwiaGVtcHN0ZWFkXCI6e1wibmFtZVwiOlwiSGVtcHN0ZWFkXCIsXCJsYXRcIjo0MC43MDYyMTI4LFwibG5nXCI6LTczLjYxODczOTd9LFwiaGlja3N2aWxsZVwiOntcIm5hbWVcIjpcIkhpY2tzdmlsbGVcIixcImxhdFwiOjQwLjc2ODQzMzEsXCJsbmdcIjotNzMuNTI1MTI1M30sXCJpcm9uZGVxdW9pdFwiOntcIm5hbWVcIjpcIklyb25kZXF1b2l0XCIsXCJsYXRcIjo0My4yMTMzOTU1LFwibG5nXCI6LTc3LjU3OTcyMjZ9LFwibGV2aXR0b3duXCI6e1wibmFtZVwiOlwiTGV2aXR0b3duXCIsXCJsYXRcIjo0MC43MjU5MzM2LFwibG5nXCI6LTczLjUxNDI5MjA5OTk5OTk5fSxcIm10IHZlcm5vblwiOntcIm5hbWVcIjpcIk10IFZlcm5vblwiLFwibGF0XCI6NDAuOTEyNTk5MixcImxuZ1wiOi03My44MzcwNzg2fSxcIm5ldyByb2NoZWxsZVwiOntcIm5hbWVcIjpcIk5ldyBSb2NoZWxsZVwiLFwibGF0XCI6NDAuOTExNDg4MixcImxuZ1wiOi03My43ODIzNTQ5fSxcIm5ldyB5b3JrXCI6e1wibmFtZVwiOlwiTmV3IFlvcmtcIixcImxhdFwiOjQwLjcxNDM1MjgsXCJsbmdcIjotNzQuMDA1OTczMDk5OTk5OTl9LFwibWFuaGF0dGFuXCI6e1wibmFtZVwiOlwiTWFuaGF0dGFuXCIsXCJsYXRcIjo0MC43ODM0MzQ1LFwibG5nXCI6LTczLjk2NjI0OTV9LFwibmlhZ2FyYSBmYWxsc1wiOntcIm5hbWVcIjpcIk5pYWdhcmEgRmFsbHNcIixcImxhdFwiOjQzLjA5NjIxNDMsXCJsbmdcIjotNzkuMDM3NzM4OH0sXCJyb2NoZXN0ZXJcIjp7XCJuYW1lXCI6XCJSb2NoZXN0ZXJcIixcImxhdFwiOjQzLjE2MTAzLFwibG5nXCI6LTc3LjYxMDkyMTl9LFwic2NoZW5lY3RhZHlcIjp7XCJuYW1lXCI6XCJTY2hlbmVjdGFkeVwiLFwibGF0XCI6NDIuODE0MjQzMixcImxuZ1wiOi03My45Mzk1Njg3fSxcInN5cmFjdXNlXCI6e1wibmFtZVwiOlwiU3lyYWN1c2VcIixcImxhdFwiOjQzLjExNDM5NyxcImxuZ1wiOi03Ni4yNzEwODMzfSxcInRyb3lcIjp7XCJuYW1lXCI6XCJUcm95XCIsXCJsYXRcIjo0Mi43Mjg0MTE3LFwibG5nXCI6LTczLjY5MTc4NTA5OTk5OTk5fSxcInV0aWNhXCI6e1wibmFtZVwiOlwiVXRpY2FcIixcImxhdFwiOjQzLjEwMDkwMyxcImxuZ1wiOi03NS4yMzI2NjR9LFwid2VzdCBiYWJ5bG9uXCI6e1wibmFtZVwiOlwiV2VzdCBCYWJ5bG9uXCIsXCJsYXRcIjo0MC43MTgxNTUsXCJsbmdcIjotNzMuMzU0Mjg3fSxcIndlc3Qgc2VuZWNhXCI6e1wibmFtZVwiOlwiV2VzdCBTZW5lY2FcIixcImxhdFwiOjQyLjg1MDA1ODUsXCJsbmdcIjotNzguNzk5NzU0NzAwMDAwMDF9LFwid2hpdGUgcGxhaW5zXCI6e1wibmFtZVwiOlwiV2hpdGUgUGxhaW5zXCIsXCJsYXRcIjo0MS4wMzM5ODYyMDAwMDAwMSxcImxuZ1wiOi03My43NjI5MDk3fSxcInlvbmtlcnNcIjp7XCJuYW1lXCI6XCJZb25rZXJzXCIsXCJsYXRcIjo0MC45MzEyMDk5LFwibG5nXCI6LTczLjg5ODc0Njg5OTk5OTk5fX0sXCJHQVwiOntcImFsYmFueVwiOntcIm5hbWVcIjpcIkFsYmFueVwiLFwibGF0XCI6MzEuNTc4NTA3NCxcImxuZ1wiOi04NC4xNTU3NDA5OTk5OTk5OX0sXCJhbHBoYXJldHRhXCI6e1wibmFtZVwiOlwiQWxwaGFyZXR0YVwiLFwibGF0XCI6MzQuMDc1Mzc2MixcImxuZ1wiOi04NC4yOTQwODk5fSxcImF0aGVuc1wiOntcIm5hbWVcIjpcIkF0aGVuc1wiLFwibGF0XCI6MzMuOTU1ODAyLFwibG5nXCI6LTgzLjM4MjM2NTZ9LFwiYXRsYW50YVwiOntcIm5hbWVcIjpcIkF0bGFudGFcIixcImxhdFwiOjMzLjc0ODk5NTQsXCJsbmdcIjotODQuMzg3OTgyNH0sXCJhdWd1c3RhXCI6e1wibmFtZVwiOlwiQXVndXN0YVwiLFwibGF0XCI6MzMuNDc0MjQ2LFwibG5nXCI6LTgyLjAwOTY3fSxcImNvbHVtYnVzXCI6e1wibmFtZVwiOlwiQ29sdW1idXNcIixcImxhdFwiOjMyLjQ2MDk3NjQsXCJsbmdcIjotODQuOTg3NzA5NH0sXCJkdW53b29keVwiOntcIm5hbWVcIjpcIkR1bndvb2R5XCIsXCJsYXRcIjozMy45NDYyMTI1LFwibG5nXCI6LTg0LjMzNDY0NzN9LFwiam9obnMgY3JlZWtcIjp7XCJuYW1lXCI6XCJKb2hucyBDcmVla1wiLFwibGF0XCI6MzQuMDI4OTI1OSxcImxuZ1wiOi04NC4xOTg1Nzl9LFwibWFjb25cIjp7XCJuYW1lXCI6XCJNYWNvblwiLFwibGF0XCI6MzIuODQwNjk0NixcImxuZ1wiOi04My42MzI0MDIyfSxcIm1hcmlldHRhXCI6e1wibmFtZVwiOlwiTWFyaWV0dGFcIixcImxhdFwiOjMzLjk1MjYwMjAwMDAwMDAxLFwibG5nXCI6LTg0LjU0OTkzMjd9LFwibm9ydGggYXRsYW50YVwiOntcIm5hbWVcIjpcIk5vcnRoIEF0bGFudGFcIixcImxhdFwiOjMzLjg2NTEwMzMsXCJsbmdcIjotODQuMzM2NTkxN30sXCJyb3N3ZWxsXCI6e1wibmFtZVwiOlwiUm9zd2VsbFwiLFwibGF0XCI6MzQuMDIzMTU1MzAwMDAwMDEsXCJsbmdcIjotODQuMzYxNTkyOH0sXCJzYW5keSBzcHJpbmdzXCI6e1wibmFtZVwiOlwiU2FuZHkgU3ByaW5nc1wiLFwibGF0XCI6MzMuOTI0MjY4OCxcImxuZ1wiOi04NC4zNzg1Mzc5fSxcInNhdmFubmFoXCI6e1wibmFtZVwiOlwiU2F2YW5uYWhcIixcImxhdFwiOjMyLjA4MzU0MDcsXCJsbmdcIjotODEuMDk5ODM0MTk5OTk5OTl9LFwic215cm5hXCI6e1wibmFtZVwiOlwiU215cm5hXCIsXCJsYXRcIjozMy44ODM5OTI2LFwibG5nXCI6LTg0LjUxNDM3NjA5OTk5OTk5fSxcInZhbGRvc3RhXCI6e1wibmFtZVwiOlwiVmFsZG9zdGFcIixcImxhdFwiOjMwLjgzMjcwMjIsXCJsbmdcIjotODMuMjc4NDg1MX0sXCJ3YXJuZXIgcm9iaW5zXCI6e1wibmFtZVwiOlwiV2FybmVyIFJvYmluc1wiLFwibGF0XCI6MzIuNjA4NjExMSxcImxuZ1wiOi04My42MzgwNTU2fX0sXCJPUlwiOntcImFsYmFueVwiOntcIm5hbWVcIjpcIkFsYmFueVwiLFwibGF0XCI6NDQuNjM2NTEwNyxcImxuZ1wiOi0xMjMuMTA1OTI4Mn0sXCJhbG9oYVwiOntcIm5hbWVcIjpcIkFsb2hhXCIsXCJsYXRcIjo0NS40OTQyODM4LFwibG5nXCI6LTEyMi44NjcwNDU0fSxcImJlYXZlcnRvblwiOntcIm5hbWVcIjpcIkJlYXZlcnRvblwiLFwibGF0XCI6NDUuNDg3MDYxOTk5OTk5OTksXCJsbmdcIjotMTIyLjgwMzcxMDJ9LFwiYmVuZFwiOntcIm5hbWVcIjpcIkJlbmRcIixcImxhdFwiOjQ0LjA1ODE3MjgsXCJsbmdcIjotMTIxLjMxNTMwOTZ9LFwiY29ydmFsbGlzXCI6e1wibmFtZVwiOlwiQ29ydmFsbGlzXCIsXCJsYXRcIjo0NC41NjQ1NjU5LFwibG5nXCI6LTEyMy4yNjIwNDM1fSxcImV1Z2VuZVwiOntcIm5hbWVcIjpcIkV1Z2VuZVwiLFwibGF0XCI6NDQuMDUyMDY5MSxcImxuZ1wiOi0xMjMuMDg2NzUzNn0sXCJncmVzaGFtXCI6e1wibmFtZVwiOlwiR3Jlc2hhbVwiLFwibGF0XCI6NDUuNTAwMTM1NyxcImxuZ1wiOi0xMjIuNDMwMjAxM30sXCJoaWxsc2Jvcm9cIjp7XCJuYW1lXCI6XCJIaWxsc2Jvcm9cIixcImxhdFwiOjQ1LjUyMjg5MzksXCJsbmdcIjotMTIyLjk4OTgyN30sXCJtZWRmb3JkXCI6e1wibmFtZVwiOlwiTWVkZm9yZFwiLFwibGF0XCI6NDIuMzI2NTE1MixcImxuZ1wiOi0xMjIuODc1NTk0OX0sXCJwb3J0bGFuZFwiOntcIm5hbWVcIjpcIlBvcnRsYW5kXCIsXCJsYXRcIjo0NS41MjM0NTE1LFwibG5nXCI6LTEyMi42NzYyMDcxfSxcInNhbGVtXCI6e1wibmFtZVwiOlwiU2FsZW1cIixcImxhdFwiOjQ0Ljk0Mjg5NzUsXCJsbmdcIjotMTIzLjAzNTA5NjN9LFwic3ByaW5nZmllbGRcIjp7XCJuYW1lXCI6XCJTcHJpbmdmaWVsZFwiLFwibGF0XCI6NDQuMDQ2MjM2MixcImxuZ1wiOi0xMjMuMDIyMDI4OX0sXCJ0aWdhcmRcIjp7XCJuYW1lXCI6XCJUaWdhcmRcIixcImxhdFwiOjQ1LjQzMTIyOTQsXCJsbmdcIjotMTIyLjc3MTQ4NjF9fSxcIk5NXCI6e1wiYWxidXF1ZXJxdWVcIjp7XCJuYW1lXCI6XCJBbGJ1cXVlcnF1ZVwiLFwibGF0XCI6MzUuMDg0NDkwOSxcImxuZ1wiOi0xMDYuNjUxMTM2N30sXCJmYXJtaW5ndG9uXCI6e1wibmFtZVwiOlwiRmFybWluZ3RvblwiLFwibGF0XCI6MzYuNzI4MDU4MzAwMDAwMDEsXCJsbmdcIjotMTA4LjIxODY4NTZ9LFwibGFzIGNydWNlc1wiOntcIm5hbWVcIjpcIkxhcyBDcnVjZXNcIixcImxhdFwiOjMyLjMxOTkzOTYsXCJsbmdcIjotMTA2Ljc2MzY1Mzh9LFwicmlvIHJhbmNob1wiOntcIm5hbWVcIjpcIlJpbyBSYW5jaG9cIixcImxhdFwiOjM1LjIzMjc1NDQsXCJsbmdcIjotMTA2LjY2MzA0Mzd9LFwicm9zd2VsbFwiOntcIm5hbWVcIjpcIlJvc3dlbGxcIixcImxhdFwiOjMzLjM5NDI2NTUsXCJsbmdcIjotMTA0LjUyMzAyNDJ9LFwic2FudGEgZmVcIjp7XCJuYW1lXCI6XCJTYW50YSBGZVwiLFwibGF0XCI6MzUuNjg2OTc1MixcImxuZ1wiOi0xMDUuOTM3Nzk5fSxcInNvdXRoIHZhbGxleVwiOntcIm5hbWVcIjpcIlNvdXRoIFZhbGxleVwiLFwibGF0XCI6MzUuMDEwMDQ4NyxcImxuZ1wiOi0xMDYuNjc4MDgwOX19LFwiVkFcIjp7XCJhbGV4YW5kcmlhXCI6e1wibmFtZVwiOlwiQWxleGFuZHJpYVwiLFwibGF0XCI6MzguODA0ODM1NSxcImxuZ1wiOi03Ny4wNDY5MjE0fSxcImFybGluZ3RvblwiOntcIm5hbWVcIjpcIkFybGluZ3RvblwiLFwibGF0XCI6MzguODc5OTY5NyxcImxuZ1wiOi03Ny4xMDY3Njk4fSxcImFzaGJ1cm5cIjp7XCJuYW1lXCI6XCJBc2hidXJuXCIsXCJsYXRcIjozOS4wNDE0MDc5LFwibG5nXCI6LTc3LjQ4MTAxNzk5OTk5OTk5fSxcImJsYWNrc2J1cmdcIjp7XCJuYW1lXCI6XCJCbGFja3NidXJnXCIsXCJsYXRcIjozNy4yMjk1NzMzLFwibG5nXCI6LTgwLjQxMzkzOTN9LFwiY2VudHJldmlsbGVcIjp7XCJuYW1lXCI6XCJDZW50cmV2aWxsZVwiLFwibGF0XCI6MzguODQwMzkwOSxcImxuZ1wiOi03Ny40Mjg4NzY4OTk5OTk5OX0sXCJjaGFybG90dGVzdmlsbGVcIjp7XCJuYW1lXCI6XCJDaGFybG90dGVzdmlsbGVcIixcImxhdFwiOjM4LjAyOTMwNTksXCJsbmdcIjotNzguNDc2Njc4MTAwMDAwMDJ9LFwiY2hlc2FwZWFrZVwiOntcIm5hbWVcIjpcIkNoZXNhcGVha2VcIixcImxhdFwiOjM2Ljc2ODIwODgsXCJsbmdcIjotNzYuMjg3NDkyN30sXCJkYWxlIGNpdHlcIjp7XCJuYW1lXCI6XCJEYWxlIENpdHlcIixcImxhdFwiOjM4LjYzNzA2MjIsXCJsbmdcIjotNzcuMzExMDk0NTk5OTk5OTl9LFwiZGFudmlsbGVcIjp7XCJuYW1lXCI6XCJEYW52aWxsZVwiLFwibGF0XCI6MzYuNTg1OTcxOCxcImxuZ1wiOi03OS4zOTUwMjI3OTk5OTk5OX0sXCJoYW1wdG9uXCI6e1wibmFtZVwiOlwiSGFtcHRvblwiLFwibGF0XCI6MzcuMDI5ODY4NyxcImxuZ1wiOi03Ni4zNDUyMjE3OTk5OTk5OX0sXCJoYXJyaXNvbmJ1cmdcIjp7XCJuYW1lXCI6XCJIYXJyaXNvbmJ1cmdcIixcImxhdFwiOjM4LjQ0OTU2ODgsXCJsbmdcIjotNzguODY4OTE1NX0sXCJsYWtlIHJpZGdlXCI6e1wibmFtZVwiOlwiTGFrZSBSaWRnZVwiLFwibGF0XCI6MzguNjg3ODk0MDAwMDAwMDEsXCJsbmdcIjotNzcuMjk3NzYxODAwMDAwMDJ9LFwibGVlc2J1cmdcIjp7XCJuYW1lXCI6XCJMZWVzYnVyZ1wiLFwibGF0XCI6MzkuMTE1NjYxNSxcImxuZ1wiOi03Ny41NjM2MDE0OTk5OTk5OX0sXCJsaW50b24gaGFsbFwiOntcIm5hbWVcIjpcIkxpbnRvbiBIYWxsXCIsXCJsYXRcIjozOC43NTk4MzgxLFwibG5nXCI6LTc3LjU3NDk5MDV9LFwibHluY2hidXJnXCI6e1wibmFtZVwiOlwiTHluY2hidXJnXCIsXCJsYXRcIjozNy40MTM3NTM2LFwibG5nXCI6LTc5LjE0MjI0NjM5OTk5OTk5fSxcIm1jbGVhblwiOntcIm5hbWVcIjpcIk1jTGVhblwiLFwibGF0XCI6MzguOTMzODY3NixcImxuZ1wiOi03Ny4xNzcyNjA0fSxcIm5ld3BvcnQgbmV3c1wiOntcIm5hbWVcIjpcIk5ld3BvcnQgTmV3c1wiLFwibGF0XCI6MzcuMDg3MDgyMSxcImxuZ1wiOi03Ni40NzMwMTIyfSxcIm5vcmZvbGtcIjp7XCJuYW1lXCI6XCJOb3Jmb2xrXCIsXCJsYXRcIjozNi44NTA3Njg5LFwibG5nXCI6LTc2LjI4NTg3MjU5OTk5OTk5fSxcInBvcnRzbW91dGhcIjp7XCJuYW1lXCI6XCJQb3J0c21vdXRoXCIsXCJsYXRcIjozNi44MzU0MjU4LFwibG5nXCI6LTc2LjI5ODI3NDJ9LFwicmVzdG9uXCI6e1wibmFtZVwiOlwiUmVzdG9uXCIsXCJsYXRcIjozOC45NTg2MzA3LFwibG5nXCI6LTc3LjM1NzAwMjc5OTk5OTk5fSxcInJpY2htb25kXCI6e1wibmFtZVwiOlwiUmljaG1vbmRcIixcImxhdFwiOjM3LjU0MDcyNDYsXCJsbmdcIjotNzcuNDM2MDQ4MX0sXCJyb2Fub2tlXCI6e1wibmFtZVwiOlwiUm9hbm9rZVwiLFwibGF0XCI6MzcuMjcwOTcwNCxcImxuZ1wiOi03OS45NDE0MjY2fSxcInN1ZmZvbGtcIjp7XCJuYW1lXCI6XCJTdWZmb2xrXCIsXCJsYXRcIjozNi43MjgyMDU0LFwibG5nXCI6LTc2LjU4MzU2MjF9LFwidHVja2Fob2VcIjp7XCJuYW1lXCI6XCJUdWNrYWhvZVwiLFwibGF0XCI6MzcuNTkwMTQ2MyxcImxuZ1wiOi03Ny41NTYzNzYxfSxcInZpcmdpbmlhIGJlYWNoXCI6e1wibmFtZVwiOlwiVmlyZ2luaWEgQmVhY2hcIixcImxhdFwiOjM2Ljg1MjkyNjMsXCJsbmdcIjotNzUuOTc3OTg0OTk5OTk5OTl9fSxcIkxBXCI6e1wiYWxleGFuZHJpYVwiOntcIm5hbWVcIjpcIkFsZXhhbmRyaWFcIixcImxhdFwiOjMxLjMxMTI5MzYsXCJsbmdcIjotOTIuNDQ1MTM3MX0sXCJiYXRvbiByb3VnZVwiOntcIm5hbWVcIjpcIkJhdG9uIFJvdWdlXCIsXCJsYXRcIjozMC40NTgyODI5LFwibG5nXCI6LTkxLjE0MDMxOTZ9LFwiYm9zc2llciBjaXR5XCI6e1wibmFtZVwiOlwiQm9zc2llciBDaXR5XCIsXCJsYXRcIjozMi41MTU5ODUyLFwibG5nXCI6LTkzLjczMjEyMjh9LFwia2VubmVyXCI6e1wibmFtZVwiOlwiS2VubmVyXCIsXCJsYXRcIjoyOS45OTQwOTI0LFwibG5nXCI6LTkwLjI0MTc0MzR9LFwibGFmYXlldHRlXCI6e1wibmFtZVwiOlwiTGFmYXlldHRlXCIsXCJsYXRcIjozMC4yMjQwODk3LFwibG5nXCI6LTkyLjAxOTg0Mjd9LFwibGFrZSBjaGFybGVzXCI6e1wibmFtZVwiOlwiTGFrZSBDaGFybGVzXCIsXCJsYXRcIjozMC4yMjY1OTQ5LFwibG5nXCI6LTkzLjIxNzM3NTh9LFwibWV0YWlyaWVcIjp7XCJuYW1lXCI6XCJNZXRhaXJpZVwiLFwibGF0XCI6MjkuOTg0MDkyMixcImxuZ1wiOi05MC4xNTI4NTE5fSxcIm1vbnJvZVwiOntcIm5hbWVcIjpcIk1vbnJvZVwiLFwibGF0XCI6MzIuNTA5MzEwOSxcImxuZ1wiOi05Mi4xMTkzMDEyfSxcIm5ldyBvcmxlYW5zXCI6e1wibmFtZVwiOlwiTmV3IE9ybGVhbnNcIixcImxhdFwiOjI5Ljk1MTA2NTc5OTk5OTk5LFwibG5nXCI6LTkwLjA3MTUzMjN9LFwic2hyZXZlcG9ydFwiOntcIm5hbWVcIjpcIlNocmV2ZXBvcnRcIixcImxhdFwiOjMyLjUyNTE1MTYsXCJsbmdcIjotOTMuNzUwMTc4OX19LFwiUEFcIjp7XCJhbGxlbnRvd25cIjp7XCJuYW1lXCI6XCJBbGxlbnRvd25cIixcImxhdFwiOjQwLjYwODQzMDUsXCJsbmdcIjotNzUuNDkwMTgzM30sXCJhbHRvb25hXCI6e1wibmFtZVwiOlwiQWx0b29uYVwiLFwibGF0XCI6NDAuNTE4NjgwOSxcImxuZ1wiOi03OC4zOTQ3MzU5fSxcImJldGhsZWhlbVwiOntcIm5hbWVcIjpcIkJldGhsZWhlbVwiLFwibGF0XCI6NDAuNjI1OTMxNixcImxuZ1wiOi03NS4zNzA0NTc4OTk5OTk5OX0sXCJlcmllXCI6e1wibmFtZVwiOlwiRXJpZVwiLFwibGF0XCI6NDIuMTI5MjI0MDk5OTk5OTksXCJsbmdcIjotODAuMDg1MDU5fSxcImhhcnJpc2J1cmdcIjp7XCJuYW1lXCI6XCJIYXJyaXNidXJnXCIsXCJsYXRcIjo0MC4yNzM3MDAyLFwibG5nXCI6LTc2Ljg4NDQxNzl9LFwibGFuY2FzdGVyXCI6e1wibmFtZVwiOlwiTGFuY2FzdGVyXCIsXCJsYXRcIjo0MC4wMzc4NzU1LFwibG5nXCI6LTc2LjMwNTUxNDR9LFwibGV2aXR0b3duXCI6e1wibmFtZVwiOlwiTGV2aXR0b3duXCIsXCJsYXRcIjo0MC4xNTUxMDk2LFwibG5nXCI6LTc0LjgyODc3NDd9LFwicGhpbGFkZWxwaGlhXCI6e1wibmFtZVwiOlwiUGhpbGFkZWxwaGlhXCIsXCJsYXRcIjozOS45NTIzMzUsXCJsbmdcIjotNzUuMTYzNzg5MDAwMDAwMDF9LFwiY2FsaWZvcm5pYS1raXJrYnJpZGVcIjp7XCJuYW1lXCI6XCJDYWxpZm9ybmlhLUtpcmticmlkZVwiLFwibGF0XCI6NDAuNDYwMDQzNSxcImxuZ1wiOi04MC4wMjEzNTM4fSxcInBpdHRzYnVyZ2hcIjp7XCJuYW1lXCI6XCJQaXR0c2J1cmdoXCIsXCJsYXRcIjo0MC40NDA2MjQ3OTk5OTk5OSxcImxuZ1wiOi03OS45OTU4ODY0fSxcInJlYWRpbmdcIjp7XCJuYW1lXCI6XCJSZWFkaW5nXCIsXCJsYXRcIjo0MC4zMzU2NDgzLFwibG5nXCI6LTc1LjkyNjg3NDd9LFwic2NyYW50b25cIjp7XCJuYW1lXCI6XCJTY3JhbnRvblwiLFwibGF0XCI6NDEuNDA4OTY5LFwibG5nXCI6LTc1LjY2MjQxMjE5OTk5OTk5fSxcInN0YXRlIGNvbGxlZ2VcIjp7XCJuYW1lXCI6XCJTdGF0ZSBDb2xsZWdlXCIsXCJsYXRcIjo0MC43OTMzOTQ5LFwibG5nXCI6LTc3Ljg2MDAwMTJ9LFwid2lsa2VzLWJhcnJlXCI6e1wibmFtZVwiOlwiV2lsa2VzLUJhcnJlXCIsXCJsYXRcIjo0MS4yNDU5MTQ5LFwibG5nXCI6LTc1Ljg4MTMwNzQ5OTk5OTk5fSxcInlvcmtcIjp7XCJuYW1lXCI6XCJZb3JrXCIsXCJsYXRcIjozOS45NjI1OTg0LFwibG5nXCI6LTc2LjcyNzc0NX19LFwiSUFcIjp7XCJhbWVzXCI6e1wibmFtZVwiOlwiQW1lc1wiLFwibGF0XCI6NDIuMDIzMzUsXCJsbmdcIjotOTMuNjI1NjIxOTk5OTk5OTl9LFwiYW5rZW55XCI6e1wibmFtZVwiOlwiQW5rZW55XCIsXCJsYXRcIjo0MS43MjY2NjY3LFwibG5nXCI6LTkzLjYwNDE2Njd9LFwiY2VkYXIgcmFwaWRzXCI6e1wibmFtZVwiOlwiQ2VkYXIgUmFwaWRzXCIsXCJsYXRcIjo0MS45Nzc4Nzk1LFwibG5nXCI6LTkxLjY2NTYyMzJ9LFwiY291bmNpbCBibHVmZnNcIjp7XCJuYW1lXCI6XCJDb3VuY2lsIEJsdWZmc1wiLFwibGF0XCI6NDEuMjYxOTQ0NCxcImxuZ1wiOi05NS44NjA4MzMzfSxcImRhdmVucG9ydFwiOntcIm5hbWVcIjpcIkRhdmVucG9ydFwiLFwibGF0XCI6NDEuNTIzNjQzNyxcImxuZ1wiOi05MC41Nzc2MzY3fSxcImRlcyBtb2luZXNcIjp7XCJuYW1lXCI6XCJEZXMgTW9pbmVzXCIsXCJsYXRcIjo0MS42MDA1NDQ4LFwibG5nXCI6LTkzLjYwOTEwNjR9LFwiZHVidXF1ZVwiOntcIm5hbWVcIjpcIkR1YnVxdWVcIixcImxhdFwiOjQyLjUwMDU1ODMsXCJsbmdcIjotOTAuNjY0NTcxNzk5OTk5OTl9LFwiaW93YSBjaXR5XCI6e1wibmFtZVwiOlwiSW93YSBDaXR5XCIsXCJsYXRcIjo0MS42NjExMjc3LFwibG5nXCI6LTkxLjUzMDE2ODN9LFwic2lvdXggY2l0eVwiOntcIm5hbWVcIjpcIlNpb3V4IENpdHlcIixcImxhdFwiOjQyLjQ5OTk5NDIsXCJsbmdcIjotOTYuNDAwMzA2ODk5OTk5OTl9LFwidXJiYW5kYWxlXCI6e1wibmFtZVwiOlwiVXJiYW5kYWxlXCIsXCJsYXRcIjo0MS42MjY2NTU1LFwibG5nXCI6LTkzLjcxMjE2NTU5OTk5OTk5fSxcIndhdGVybG9vXCI6e1wibmFtZVwiOlwiV2F0ZXJsb29cIixcImxhdFwiOjQyLjQ5Mjc2NDEsXCJsbmdcIjotOTIuMzQyOTYzMDk5OTk5OTl9LFwid2VzdCBkZXMgbW9pbmVzXCI6e1wibmFtZVwiOlwiV2VzdCBEZXMgTW9pbmVzXCIsXCJsYXRcIjo0MS41NzcyMTE1LFwibG5nXCI6LTkzLjcxMTMzMn19LFwiQUtcIjp7XCJhbmNob3JhZ2VcIjp7XCJuYW1lXCI6XCJBbmNob3JhZ2VcIixcImxhdFwiOjYxLjIxODA1NTYsXCJsbmdcIjotMTQ5LjkwMDI3Nzh9fSxcIklOXCI6e1wiYW5kZXJzb25cIjp7XCJuYW1lXCI6XCJBbmRlcnNvblwiLFwibGF0XCI6NDAuMTA1MzE5NixcImxuZ1wiOi04NS42ODAyNTQxfSxcImJsb29taW5ndG9uXCI6e1wibmFtZVwiOlwiQmxvb21pbmd0b25cIixcImxhdFwiOjM5LjE2NTMyNSxcImxuZ1wiOi04Ni41MjYzODU2OTk5OTk5OX0sXCJjYXJtZWxcIjp7XCJuYW1lXCI6XCJDYXJtZWxcIixcImxhdFwiOjM5Ljk3ODM3MSxcImxuZ1wiOi04Ni4xMTgwNDM1fSxcImNvbHVtYnVzXCI6e1wibmFtZVwiOlwiQ29sdW1idXNcIixcImxhdFwiOjM5LjIwMTQ0MDQsXCJsbmdcIjotODUuOTIxMzc5Nn0sXCJlbGtoYXJ0XCI6e1wibmFtZVwiOlwiRWxraGFydFwiLFwibGF0XCI6NDEuNjgxOTkzNSxcImxuZ1wiOi04NS45NzY2NjcxfSxcImV2YW5zdmlsbGVcIjp7XCJuYW1lXCI6XCJFdmFuc3ZpbGxlXCIsXCJsYXRcIjozNy45NzE1NTkyLFwibG5nXCI6LTg3LjU3MTA4OTh9LFwiZmlzaGVyc1wiOntcIm5hbWVcIjpcIkZpc2hlcnNcIixcImxhdFwiOjM5Ljk1NTU5MjgsXCJsbmdcIjotODYuMDEzODcyOX0sXCJmb3J0IHdheW5lXCI6e1wibmFtZVwiOlwiRm9ydCBXYXluZVwiLFwibGF0XCI6NDEuMDc5MjczLFwibG5nXCI6LTg1LjEzOTM1MTN9LFwiZ2FyeVwiOntcIm5hbWVcIjpcIkdhcnlcIixcImxhdFwiOjQxLjU5MzM2OTYsXCJsbmdcIjotODcuMzQ2NDI3MX0sXCJncmVlbndvb2RcIjp7XCJuYW1lXCI6XCJHcmVlbndvb2RcIixcImxhdFwiOjM5LjYxMzY1NzgsXCJsbmdcIjotODYuMTA2NjUyNTk5OTk5OTl9LFwiaGFtbW9uZFwiOntcIm5hbWVcIjpcIkhhbW1vbmRcIixcImxhdFwiOjQxLjU4MzM2ODgsXCJsbmdcIjotODcuNTAwMDQxMn0sXCJpbmRpYW5hcG9saXNcIjp7XCJuYW1lXCI6XCJJbmRpYW5hcG9saXNcIixcImxhdFwiOjM5Ljc2ODUxNTUsXCJsbmdcIjotODYuMTU4MDczNn0sXCJqZWZmZXJzb252aWxsZVwiOntcIm5hbWVcIjpcIkplZmZlcnNvbnZpbGxlXCIsXCJsYXRcIjozOC4yNzc1NzAyLFwibG5nXCI6LTg1LjczNzE4NDd9LFwia29rb21vXCI6e1wibmFtZVwiOlwiS29rb21vXCIsXCJsYXRcIjo0MC40ODY0MjcsXCJsbmdcIjotODYuMTMzNjAzMjk5OTk5OTl9LFwibGFmYXlldHRlXCI6e1wibmFtZVwiOlwiTGFmYXlldHRlXCIsXCJsYXRcIjo0MC40MTY3MDIyLFwibG5nXCI6LTg2Ljg3NTI4Njg5OTk5OTk5fSxcImxhd3JlbmNlXCI6e1wibmFtZVwiOlwiTGF3cmVuY2VcIixcImxhdFwiOjM5LjgzODY1MTYsXCJsbmdcIjotODYuMDI1MjYxMn0sXCJtaXNoYXdha2FcIjp7XCJuYW1lXCI6XCJNaXNoYXdha2FcIixcImxhdFwiOjQxLjY2MTk5MjcsXCJsbmdcIjotODYuMTU4NjE1NTk5OTk5OTl9LFwibXVuY2llXCI6e1wibmFtZVwiOlwiTXVuY2llXCIsXCJsYXRcIjo0MC4xOTMzNzY3LFwibG5nXCI6LTg1LjM4NjM1OTl9LFwibm9ibGVzdmlsbGVcIjp7XCJuYW1lXCI6XCJOb2JsZXN2aWxsZVwiLFwibGF0XCI6NDAuMDQ1NTkxNyxcImxuZ1wiOi04Ni4wMDg1OTU1fSxcInNvdXRoIGJlbmRcIjp7XCJuYW1lXCI6XCJTb3V0aCBCZW5kXCIsXCJsYXRcIjo0MS42ODMzODEzLFwibG5nXCI6LTg2LjI1MDAwNjU5OTk5OTk5fSxcInRlcnJlIGhhdXRlXCI6e1wibmFtZVwiOlwiVGVycmUgSGF1dGVcIixcImxhdFwiOjM5LjQ2NjcwMzQsXCJsbmdcIjotODcuNDEzOTA5MTk5OTk5OTl9fSxcIk1JXCI6e1wiYW5uIGFyYm9yXCI6e1wibmFtZVwiOlwiQW5uIEFyYm9yXCIsXCJsYXRcIjo0Mi4zMDc2NDkzLFwibG5nXCI6LTgzLjg0NzMwMTV9LFwiYmF0dGxlIGNyZWVrXCI6e1wibmFtZVwiOlwiQmF0dGxlIENyZWVrXCIsXCJsYXRcIjo0Mi4zMjExNTIyLFwibG5nXCI6LTg1LjE3OTcxNDE5OTk5OTk5fSxcImRlYXJib3JuXCI6e1wibmFtZVwiOlwiRGVhcmJvcm5cIixcImxhdFwiOjQyLjMyMjI1OTksXCJsbmdcIjotODMuMTc2MzE0NDk5OTk5OTl9LFwiZGVhcmJvcm4gaGVpZ2h0c1wiOntcIm5hbWVcIjpcIkRlYXJib3JuIEhlaWdodHNcIixcImxhdFwiOjQyLjMzNjk4MTYsXCJsbmdcIjotODMuMjczMjYyNjk5OTk5OTl9LFwiZGV0cm9pdFwiOntcIm5hbWVcIjpcIkRldHJvaXRcIixcImxhdFwiOjQyLjMzMTQyNyxcImxuZ1wiOi04My4wNDU3NTM4fSxcImVhc3QgbGFuc2luZ1wiOntcIm5hbWVcIjpcIkVhc3QgTGFuc2luZ1wiLFwibGF0XCI6NDIuNzM2OTc5MixcImxuZ1wiOi04NC40ODM4NjU0MDAwMDAwMX0sXCJmYXJtaW5ndG9uIGhpbGxzXCI6e1wibmFtZVwiOlwiRmFybWluZ3RvbiBIaWxsc1wiLFwibGF0XCI6NDIuNDgyODIyMSxcImxuZ1wiOi04My40MTgzODIyOTk5OTk5OX0sXCJmbGludFwiOntcIm5hbWVcIjpcIkZsaW50XCIsXCJsYXRcIjo0My4wNzc3Mjg5LFwibG5nXCI6LTgzLjY3NzM5Mjc5OTk5OTk5fSxcImdyYW5kIHJhcGlkc1wiOntcIm5hbWVcIjpcIkdyYW5kIFJhcGlkc1wiLFwibGF0XCI6NDIuOTYzMzU5OSxcImxuZ1wiOi04NS42NjgwODYzfSxcImdyYW5kIHJhcGlkcyBjaGFydGVyIHRvd25zaGlwXCI6e1wibmFtZVwiOlwiR3JhbmQgUmFwaWRzIENoYXJ0ZXIgVG93bnNoaXBcIixcImxhdFwiOjQzLjAwMjAwMjMsXCJsbmdcIjotODUuNTcxNTAxNTAwMDAwMDF9LFwia2FsYW1hem9vXCI6e1wibmFtZVwiOlwiS2FsYW1hem9vXCIsXCJsYXRcIjo0Mi4yOTE3MDY5LFwibG5nXCI6LTg1LjU4NzIyODZ9LFwia2VudHdvb2RcIjp7XCJuYW1lXCI6XCJLZW50d29vZFwiLFwibGF0XCI6NDIuODY5NDczMSxcImxuZ1wiOi04NS42NDQ3NDkxOTk5OTk5OX0sXCJsYW5zaW5nXCI6e1wibmFtZVwiOlwiTGFuc2luZ1wiLFwibGF0XCI6NDIuNzMyNTM1LFwibG5nXCI6LTg0LjU1NTUzNDd9LFwibGFuc2luZyBjaGFydGVyIHRvd25zaGlwXCI6e1wibmFtZVwiOlwiTGFuc2luZyBDaGFydGVyIFRvd25zaGlwXCIsXCJsYXRcIjo0Mi43NTYzNTk0LFwibG5nXCI6LTg0LjUyODMyNjd9LFwibGl2b25pYVwiOntcIm5hbWVcIjpcIkxpdm9uaWFcIixcImxhdFwiOjQyLjM2ODM3LFwibG5nXCI6LTgzLjM1MjcwOTY5OTk5OTk5fSxcIm1pZGxhbmRcIjp7XCJuYW1lXCI6XCJNaWRsYW5kXCIsXCJsYXRcIjo0My41NzUwOTc3OTk5OTk5OSxcImxuZ1wiOi04NC4zNTQyMDQ5fSxcIm5vdmlcIjp7XCJuYW1lXCI6XCJOb3ZpXCIsXCJsYXRcIjo0Mi40ODA1OSxcImxuZ1wiOi04My40NzU0OTEzfSxcInBvbnRpYWNcIjp7XCJuYW1lXCI6XCJQb250aWFjXCIsXCJsYXRcIjo0Mi42Mzg5MjE2LFwibG5nXCI6LTgzLjI5MTA0Njc5OTk5OTk5fSxcInBvcnRhZ2VcIjp7XCJuYW1lXCI6XCJQb3J0YWdlXCIsXCJsYXRcIjo0Mi4yMDExNTM4LFwibG5nXCI6LTg1LjU4MDAwMjJ9LFwicG9ydGFnZSB0b3duc2hpcFwiOntcIm5hbWVcIjpcIlBvcnRhZ2UgVG93bnNoaXBcIixcImxhdFwiOjQ2LjkzMzg2MDgsXCJsbmdcIjotODguNjYxNjYxMDk5OTk5OTl9LFwicm9jaGVzdGVyIGhpbGxzXCI6e1wibmFtZVwiOlwiUm9jaGVzdGVyIEhpbGxzXCIsXCJsYXRcIjo0Mi42NTgzNjYwOTk5OTk5OSxcImxuZ1wiOi04My4xNDk5MzIyfSxcInJvc2V2aWxsZVwiOntcIm5hbWVcIjpcIlJvc2V2aWxsZVwiLFwibGF0XCI6NDIuNDk3MjU4MyxcImxuZ1wiOi04Mi45MzcxNDA5fSxcInJveWFsIG9ha1wiOntcIm5hbWVcIjpcIlJveWFsIE9ha1wiLFwibGF0XCI6NDIuNDg5NDgwMSxcImxuZ1wiOi04My4xNDQ2NDg1fSxcInNhZ2luYXdcIjp7XCJuYW1lXCI6XCJTYWdpbmF3XCIsXCJsYXRcIjo0My40MTk0Njk5LFwibG5nXCI6LTgzLjk1MDgwNjh9LFwic3QgY2xhaXIgc2hvcmVzXCI6e1wibmFtZVwiOlwiU3QgQ2xhaXIgU2hvcmVzXCIsXCJsYXRcIjo0Mi40OTMxLFwibG5nXCI6LTgyLjg5MTEzMzl9LFwic291dGhmaWVsZFwiOntcIm5hbWVcIjpcIlNvdXRoZmllbGRcIixcImxhdFwiOjQyLjQ3MzM2ODgsXCJsbmdcIjotODMuMjIxODczMX0sXCJzdGVybGluZyBoZWlnaHRzXCI6e1wibmFtZVwiOlwiU3RlcmxpbmcgSGVpZ2h0c1wiLFwibGF0XCI6NDIuNTgwMzEyMixcImxuZ1wiOi04My4wMzAyMDMzfSxcInRheWxvclwiOntcIm5hbWVcIjpcIlRheWxvclwiLFwibGF0XCI6NDIuMjQwODcyLFwibG5nXCI6LTgzLjI2OTY1MDl9LFwidHJveVwiOntcIm5hbWVcIjpcIlRyb3lcIixcImxhdFwiOjQyLjYwNTU4OTMsXCJsbmdcIjotODMuMTQ5OTMwNH0sXCJ3YXJyZW5cIjp7XCJuYW1lXCI6XCJXYXJyZW5cIixcImxhdFwiOjQyLjQ5Mjk5OTk5OTk5OTk5LFwibG5nXCI6LTgzLjAyODE5Njk5OTk5OTk5fSxcIndlc3RsYW5kXCI6e1wibmFtZVwiOlwiV2VzdGxhbmRcIixcImxhdFwiOjQyLjMyNDIwMzk5OTk5OTk5LFwibG5nXCI6LTgzLjQwMDIxMX0sXCJ3eW9taW5nXCI6e1wibmFtZVwiOlwiV3lvbWluZ1wiLFwibGF0XCI6NDIuOTEzMzYwMixcImxuZ1wiOi04NS43MDUzMDg1fX0sXCJBWlwiOntcImFwYWNoZSBqdW5jdGlvblwiOntcIm5hbWVcIjpcIkFwYWNoZSBKdW5jdGlvblwiLFwibGF0XCI6MzMuNDE1MDQ4NSxcImxuZ1wiOi0xMTEuNTQ5NTc3N30sXCJhdm9uZGFsZVwiOntcIm5hbWVcIjpcIkF2b25kYWxlXCIsXCJsYXRcIjozMy40MzU1OTc3LFwibG5nXCI6LTExMi4zNDk2MDIxfSxcImJ1Y2tleWVcIjp7XCJuYW1lXCI6XCJCdWNrZXllXCIsXCJsYXRcIjozMy4zNzAzMTk3LFwibG5nXCI6LTExMi41ODM3NzY2fSxcImJ1bGxoZWFkIGNpdHlcIjp7XCJuYW1lXCI6XCJCdWxsaGVhZCBDaXR5XCIsXCJsYXRcIjozNS4xNDc3Nzc0LFwibG5nXCI6LTExNC41NjgyOTgzfSxcImNhc2EgZ3JhbmRlXCI6e1wibmFtZVwiOlwiQ2FzYSBHcmFuZGVcIixcImxhdFwiOjMyLjg3OTUwMjIsXCJsbmdcIjotMTExLjc1NzM1MjF9LFwiY2FzYXMgYWRvYmVzXCI6e1wibmFtZVwiOlwiQ2FzYXMgQWRvYmVzXCIsXCJsYXRcIjozMi4zMjM0MDc4LFwibG5nXCI6LTExMC45OTUwOTY2fSxcImNhdGFsaW5hIGZvb3RoaWxsc1wiOntcIm5hbWVcIjpcIkNhdGFsaW5hIEZvb3RoaWxsc1wiLFwibGF0XCI6MzIuMjk3ODUzLFwibG5nXCI6LTExMC45MTg3MDM3fSxcImNoYW5kbGVyXCI6e1wibmFtZVwiOlwiQ2hhbmRsZXJcIixcImxhdFwiOjMzLjMwNjE2MDUsXCJsbmdcIjotMTExLjg0MTI1MDJ9LFwiZmxhZ3N0YWZmXCI6e1wibmFtZVwiOlwiRmxhZ3N0YWZmXCIsXCJsYXRcIjozNS4yMDEzNTE2LFwibG5nXCI6LTExMS42MzkyNDl9LFwiZ2lsYmVydFwiOntcIm5hbWVcIjpcIkdpbGJlcnRcIixcImxhdFwiOjMzLjM1MjgyNjQsXCJsbmdcIjotMTExLjc4OTAyN30sXCJnbGVuZGFsZVwiOntcIm5hbWVcIjpcIkdsZW5kYWxlXCIsXCJsYXRcIjozMy41Mzg2NTIzLFwibG5nXCI6LTExMi4xODU5ODY2fSxcImdvb2R5ZWFyXCI6e1wibmFtZVwiOlwiR29vZHllYXJcIixcImxhdFwiOjMzLjQ0OTgwNixcImxuZ1wiOi0xMTIuMzU4MjEzNn0sXCJsYWtlIGhhdmFzdSBjaXR5XCI6e1wibmFtZVwiOlwiTGFrZSBIYXZhc3UgQ2l0eVwiLFwibGF0XCI6MzQuNDgzOTAxLFwibG5nXCI6LTExNC4zMjI0NTQ4fSxcIm1hcmljb3BhXCI6e1wibmFtZVwiOlwiTWFyaWNvcGFcIixcImxhdFwiOjMzLjA1ODEwNjMsXCJsbmdcIjotMTEyLjA0NzY0MjN9LFwibWVzYVwiOntcIm5hbWVcIjpcIk1lc2FcIixcImxhdFwiOjMzLjQxNTE4NDMsXCJsbmdcIjotMTExLjgzMTQ3MjR9LFwib3JvIHZhbGxleVwiOntcIm5hbWVcIjpcIk9ybyBWYWxsZXlcIixcImxhdFwiOjMyLjM5MDkwNzEsXCJsbmdcIjotMTEwLjk2NjQ4OH0sXCJwZW9yaWFcIjp7XCJuYW1lXCI6XCJQZW9yaWFcIixcImxhdFwiOjMzLjU4MDU5NTUsXCJsbmdcIjotMTEyLjIzNzM3Nzl9LFwicGhvZW5peFwiOntcIm5hbWVcIjpcIlBob2VuaXhcIixcImxhdFwiOjMzLjQ0ODM3NzEsXCJsbmdcIjotMTEyLjA3NDAzNzN9LFwicHJlc2NvdHRcIjp7XCJuYW1lXCI6XCJQcmVzY290dFwiLFwibGF0XCI6MzQuNTQwMDI0MixcImxuZ1wiOi0xMTIuNDY4NTAyNX0sXCJwcmVzY290dCB2YWxsZXlcIjp7XCJuYW1lXCI6XCJQcmVzY290dCBWYWxsZXlcIixcImxhdFwiOjM0LjYxMDAyNDMsXCJsbmdcIjotMTEyLjMxNTcyMX0sXCJzYW4gdGFuIHZhbGxleVwiOntcIm5hbWVcIjpcIlNhbiBUYW4gVmFsbGV5XCIsXCJsYXRcIjozMy4xNzAyNzc4LFwibG5nXCI6LTExMS41NzIyMjIyfSxcInNjb3R0c2RhbGVcIjp7XCJuYW1lXCI6XCJTY290dHNkYWxlXCIsXCJsYXRcIjozMy40OTQxNzA0LFwibG5nXCI6LTExMS45MjYwNTE5fSxcInNpZXJyYSB2aXN0YVwiOntcIm5hbWVcIjpcIlNpZXJyYSBWaXN0YVwiLFwibGF0XCI6MzEuNTQ1NTAwMSxcImxuZ1wiOi0xMTAuMjc3Mjg1Nn0sXCJzdXJwcmlzZVwiOntcIm5hbWVcIjpcIlN1cnByaXNlXCIsXCJsYXRcIjozMy42MzkwOTksXCJsbmdcIjotMTEyLjM5NTc1NzZ9LFwidGVtcGVcIjp7XCJuYW1lXCI6XCJUZW1wZVwiLFwibGF0XCI6MzMuNDI1NTEwNCxcImxuZ1wiOi0xMTEuOTQwMDA1NH0sXCJ0dWNzb25cIjp7XCJuYW1lXCI6XCJUdWNzb25cIixcImxhdFwiOjMyLjIyMTc0MjksXCJsbmdcIjotMTEwLjkyNjQ3OX0sXCJ5dW1hXCI6e1wibmFtZVwiOlwiWXVtYVwiLFwibGF0XCI6MzIuNjkyNjUxMixcImxuZ1wiOi0xMTQuNjI3NjkxNn19LFwiTkNcIjp7XCJhcGV4XCI6e1wibmFtZVwiOlwiQXBleFwiLFwibGF0XCI6MzUuNzMyNjUyLFwibG5nXCI6LTc4Ljg1MDI4NTU5OTk5OTk5fSxcImFzaGV2aWxsZVwiOntcIm5hbWVcIjpcIkFzaGV2aWxsZVwiLFwibGF0XCI6MzUuNjAwOTQ1MixcImxuZ1wiOi04Mi41NTQwMTQ5OTk5OTk5OX0sXCJidXJsaW5ndG9uXCI6e1wibmFtZVwiOlwiQnVybGluZ3RvblwiLFwibGF0XCI6MzYuMDk1NjkxOCxcImxuZ1wiOi03OS40Mzc3OTkwOTk5OTk5OX0sXCJjYXJ5XCI6e1wibmFtZVwiOlwiQ2FyeVwiLFwibGF0XCI6MzUuNzkxNTQsXCJsbmdcIjotNzguNzgxMTE2OX0sXCJjaGFwZWwgaGlsbFwiOntcIm5hbWVcIjpcIkNoYXBlbCBIaWxsXCIsXCJsYXRcIjozNS45MTMxOTk2LFwibG5nXCI6LTc5LjA1NTg0NDV9LFwiY2hhcmxvdHRlXCI6e1wibmFtZVwiOlwiQ2hhcmxvdHRlXCIsXCJsYXRcIjozNS4yMjcwODY5LFwibG5nXCI6LTgwLjg0MzEyNjd9LFwiY29uY29yZFwiOntcIm5hbWVcIjpcIkNvbmNvcmRcIixcImxhdFwiOjM1LjQwODc1MTcsXCJsbmdcIjotODAuNTc5NTExfSxcImR1cmhhbVwiOntcIm5hbWVcIjpcIkR1cmhhbVwiLFwibGF0XCI6MzUuOTk0MDMyOSxcImxuZ1wiOi03OC44OTg2MTl9LFwiZmF5ZXR0ZXZpbGxlXCI6e1wibmFtZVwiOlwiRmF5ZXR0ZXZpbGxlXCIsXCJsYXRcIjozNS4wNTI2NjQxLFwibG5nXCI6LTc4Ljg3ODM1ODQ5OTk5OTk5fSxcImdhc3RvbmlhXCI6e1wibmFtZVwiOlwiR2FzdG9uaWFcIixcImxhdFwiOjM1LjI2MjA4MixcImxuZ1wiOi04MS4xODczMDA0OTk5OTk5OX0sXCJncmVlbnNib3JvXCI6e1wibmFtZVwiOlwiR3JlZW5zYm9yb1wiLFwibGF0XCI6MzYuMDcyNjM1NCxcImxuZ1wiOi03OS43OTE5NzU0fSxcImdyZWVudmlsbGVcIjp7XCJuYW1lXCI6XCJHcmVlbnZpbGxlXCIsXCJsYXRcIjozNS42MTI2NjEsXCJsbmdcIjotNzcuMzY2MzUzOH0sXCJoaWdoIHBvaW50XCI6e1wibmFtZVwiOlwiSGlnaCBQb2ludFwiLFwibGF0XCI6MzUuOTU1NjkyMyxcImxuZ1wiOi04MC4wMDUzMTc2fSxcImh1bnRlcnN2aWxsZVwiOntcIm5hbWVcIjpcIkh1bnRlcnN2aWxsZVwiLFwibGF0XCI6MzUuNDEwNjk0LFwibG5nXCI6LTgwLjg0Mjg1MDQwMDAwMDAyfSxcImphY2tzb252aWxsZVwiOntcIm5hbWVcIjpcIkphY2tzb252aWxsZVwiLFwibGF0XCI6MzQuNzU0MDUyNCxcImxuZ1wiOi03Ny40MzAyNDE0fSxcImthbm5hcG9saXNcIjp7XCJuYW1lXCI6XCJLYW5uYXBvbGlzXCIsXCJsYXRcIjozNS40ODczNjEzLFwibG5nXCI6LTgwLjYyMTczNDF9LFwicmFsZWlnaFwiOntcIm5hbWVcIjpcIlJhbGVpZ2hcIixcImxhdFwiOjM1Ljc3MjA5NixcImxuZ1wiOi03OC42Mzg2MTQ1fSxcInJvY2t5IG10XCI6e1wibmFtZVwiOlwiUm9ja3kgTXRcIixcImxhdFwiOjM1LjkzODIxMDMsXCJsbmdcIjotNzcuNzkwNTMzOX0sXCJ3aWxtaW5ndG9uXCI6e1wibmFtZVwiOlwiV2lsbWluZ3RvblwiLFwibGF0XCI6MzQuMjI1NzI1NSxcImxuZ1wiOi03Ny45NDQ3MTAyfSxcIndpbHNvblwiOntcIm5hbWVcIjpcIldpbHNvblwiLFwibGF0XCI6MzUuNzIxMjY4OSxcImxuZ1wiOi03Ny45MTU1Mzk1fSxcIndpbnN0b24tc2FsZW1cIjp7XCJuYW1lXCI6XCJXaW5zdG9uLVNhbGVtXCIsXCJsYXRcIjozNi4wOTk4NTk1OTk5OTk5OSxcImxuZ1wiOi04MC4yNDQyMTZ9fSxcIldJXCI6e1wiYXBwbGV0b25cIjp7XCJuYW1lXCI6XCJBcHBsZXRvblwiLFwibGF0XCI6NDQuMjYxOTMwOSxcImxuZ1wiOi04OC40MTUzODQ2OTk5OTk5OX0sXCJlYXUgY2xhaXJlXCI6e1wibmFtZVwiOlwiRWF1IENsYWlyZVwiLFwibGF0XCI6NDQuODExMzQ5LFwibG5nXCI6LTkxLjQ5ODQ5NDF9LFwiZm9uZCBkdSBsYWNcIjp7XCJuYW1lXCI6XCJGb25kIGR1IExhY1wiLFwibGF0XCI6NDMuNzczMDQ0OCxcImxuZ1wiOi04OC40NDcwNTA4fSxcImdyZWVuIGJheVwiOntcIm5hbWVcIjpcIkdyZWVuIEJheVwiLFwibGF0XCI6NDQuNTE5MTU4OTk5OTk5OTksXCJsbmdcIjotODguMDE5ODI2fSxcImphbmVzdmlsbGVcIjp7XCJuYW1lXCI6XCJKYW5lc3ZpbGxlXCIsXCJsYXRcIjo0Mi42ODI3ODg1LFwibG5nXCI6LTg5LjAxODcyMjJ9LFwia2Vub3NoYVwiOntcIm5hbWVcIjpcIktlbm9zaGFcIixcImxhdFwiOjQyLjU4NDc0MjUsXCJsbmdcIjotODcuODIxMTg1Mzk5OTk5OTl9LFwibGEgY3Jvc3NlXCI6e1wibmFtZVwiOlwiTGEgQ3Jvc3NlXCIsXCJsYXRcIjo0My44MDEzNTU2LFwibG5nXCI6LTkxLjIzOTU4MDY5OTk5OTk5fSxcIm1hZGlzb25cIjp7XCJuYW1lXCI6XCJNYWRpc29uXCIsXCJsYXRcIjo0My4wNzMwNTE3LFwibG5nXCI6LTg5LjQwMTIzMDJ9LFwibWlsd2F1a2VlXCI6e1wibmFtZVwiOlwiTWlsd2F1a2VlXCIsXCJsYXRcIjo0My4wMzg5MDI1LFwibG5nXCI6LTg3LjkwNjQ3MzZ9LFwib3Noa29zaFwiOntcIm5hbWVcIjpcIk9zaGtvc2hcIixcImxhdFwiOjQ0LjAyNDcwNjIsXCJsbmdcIjotODguNTQyNjEzNn0sXCJyYWNpbmVcIjp7XCJuYW1lXCI6XCJSYWNpbmVcIixcImxhdFwiOjQyLjcyNjEzMDksXCJsbmdcIjotODcuNzgyODUyMzAwMDAwMDJ9LFwic2hlYm95Z2FuXCI6e1wibmFtZVwiOlwiU2hlYm95Z2FuXCIsXCJsYXRcIjo0My43NTA4Mjg0LFwibG5nXCI6LTg3LjcxNDUzfSxcIndhdWtlc2hhXCI6e1wibmFtZVwiOlwiV2F1a2VzaGFcIixcImxhdFwiOjQzLjAxMTY3ODQsXCJsbmdcIjotODguMjMxNDgxM30sXCJ3YXV3YXRvc2FcIjp7XCJuYW1lXCI6XCJXYXV3YXRvc2FcIixcImxhdFwiOjQzLjA0OTQ1NzIsXCJsbmdcIjotODguMDA3NTg3NX0sXCJ3ZXN0IGFsbGlzXCI6e1wibmFtZVwiOlwiV2VzdCBBbGxpc1wiLFwibGF0XCI6NDMuMDE2NjgwNixcImxuZ1wiOi04OC4wMDcwMzE1fX0sXCJNTlwiOntcImFwcGxlIHZhbGxleVwiOntcIm5hbWVcIjpcIkFwcGxlIFZhbGxleVwiLFwibGF0XCI6NDQuNzMxOTA5NCxcImxuZ1wiOi05My4yMTc3MjAwMDAwMDAwMX0sXCJibGFpbmVcIjp7XCJuYW1lXCI6XCJCbGFpbmVcIixcImxhdFwiOjQ1LjE2MDc5ODcsXCJsbmdcIjotOTMuMjM0OTQ4ODk5OTk5OTl9LFwiYmxvb21pbmd0b25cIjp7XCJuYW1lXCI6XCJCbG9vbWluZ3RvblwiLFwibGF0XCI6NDQuODQwNzk4LFwibG5nXCI6LTkzLjI5ODI3OTl9LFwiYnJvb2tseW4gcGFya1wiOntcIm5hbWVcIjpcIkJyb29rbHluIFBhcmtcIixcImxhdFwiOjQ1LjA5NDEzMTUsXCJsbmdcIjotOTMuMzU2MzQwNX0sXCJidXJuc3ZpbGxlXCI6e1wibmFtZVwiOlwiQnVybnN2aWxsZVwiLFwibGF0XCI6NDQuNzY3NzQyNCxcImxuZ1wiOi05My4yNzc3MjI1OTk5OTk5OX0sXCJjb29uIHJhcGlkc1wiOntcIm5hbWVcIjpcIkNvb24gUmFwaWRzXCIsXCJsYXRcIjo0NS4xMTk5NjUyLFwibG5nXCI6LTkzLjI4NzcyNzY5OTk5OTk5fSxcImR1bHV0aFwiOntcIm5hbWVcIjpcIkR1bHV0aFwiLFwibGF0XCI6NDYuNzg2NjcxODk5OTk5OTksXCJsbmdcIjotOTIuMTAwNDg1Mn0sXCJlYWdhblwiOntcIm5hbWVcIjpcIkVhZ2FuXCIsXCJsYXRcIjo0NC44MDQxMzIyLFwibG5nXCI6LTkzLjE2Njg4NTh9LFwiZWRlbiBwcmFpcmllXCI6e1wibmFtZVwiOlwiRWRlbiBQcmFpcmllXCIsXCJsYXRcIjo0NC44NTQ2ODU2LFwibG5nXCI6LTkzLjQ3MDc4NTk5OTk5OTk5fSxcImVkaW5hXCI6e1wibmFtZVwiOlwiRWRpbmFcIixcImxhdFwiOjQ0Ljg4OTY4NjYsXCJsbmdcIjotOTMuMzQ5OTQ4OX0sXCJsYWtldmlsbGVcIjp7XCJuYW1lXCI6XCJMYWtldmlsbGVcIixcImxhdFwiOjQ0LjY0OTY4NjgsXCJsbmdcIjotOTMuMjQyNzE5OTk5OTk5OTl9LFwibWFwbGUgZ3JvdmVcIjp7XCJuYW1lXCI6XCJNYXBsZSBHcm92ZVwiLFwibGF0XCI6NDUuMDcyNDY0MixcImxuZ1wiOi05My40NTU3ODc3fSxcIm1pbm5lYXBvbGlzXCI6e1wibmFtZVwiOlwiTWlubmVhcG9saXNcIixcImxhdFwiOjQ0Ljk3OTk2NTQsXCJsbmdcIjotOTMuMjYzODM2MDk5OTk5OTl9LFwibWlubmV0b25rYVwiOntcIm5hbWVcIjpcIk1pbm5ldG9ua2FcIixcImxhdFwiOjQ0LjkyMTE4MzYsXCJsbmdcIjotOTMuNDY4NzQ4OX0sXCJwbHltb3V0aFwiOntcIm5hbWVcIjpcIlBseW1vdXRoXCIsXCJsYXRcIjo0NS4wMTA1MTk0LFwibG5nXCI6LTkzLjQ1NTUwOTN9LFwicm9jaGVzdGVyXCI6e1wibmFtZVwiOlwiUm9jaGVzdGVyXCIsXCJsYXRcIjo0NC4wMjE2MzA2LFwibG5nXCI6LTkyLjQ2OTg5OTJ9LFwic3QgY2xvdWRcIjp7XCJuYW1lXCI6XCJTdCBDbG91ZFwiLFwibGF0XCI6NDUuNTUzODg4OSxcImxuZ1wiOi05NC4xNzAyNzc4fSxcInN0IGxvdWlzIHBhcmtcIjp7XCJuYW1lXCI6XCJTdCBMb3VpcyBQYXJrXCIsXCJsYXRcIjo0NC45NTk3Mzc2LFwibG5nXCI6LTkzLjM3MDIxODZ9LFwic3QgcGF1bFwiOntcIm5hbWVcIjpcIlN0IFBhdWxcIixcImxhdFwiOjQ0Ljk1NDE2NjY5OTk5OTk5LFwibG5nXCI6LTkzLjExMzg4ODg5OTk5OTk5fSxcInNoYWtvcGVlXCI6e1wibmFtZVwiOlwiU2hha29wZWVcIixcImxhdFwiOjQ0Ljc5NzM5NjIsXCJsbmdcIjotOTMuNTI3Mjg2MX0sXCJ3b29kYnVyeVwiOntcIm5hbWVcIjpcIldvb2RidXJ5XCIsXCJsYXRcIjo0NC45MjM4NTUyLFwibG5nXCI6LTkyLjk1OTM3OTd9fSxcIk1BXCI6e1wiYXJsaW5ndG9uXCI6e1wibmFtZVwiOlwiQXJsaW5ndG9uXCIsXCJsYXRcIjo0Mi40MTUzOTI1LFwibG5nXCI6LTcxLjE1NjQ3Mjl9LFwiYXR0bGVib3JvXCI6e1wibmFtZVwiOlwiQXR0bGVib3JvXCIsXCJsYXRcIjo0MS45NDQ1NDQwOTk5OTk5OSxcImxuZ1wiOi03MS4yODU2MDgyfSxcImJhcm5zdGFibGVcIjp7XCJuYW1lXCI6XCJCYXJuc3RhYmxlXCIsXCJsYXRcIjo0MS43MDE0MTY3LFwibG5nXCI6LTcwLjMwMzA1NTZ9LFwiYmlsbGVyaWNhXCI6e1wibmFtZVwiOlwiQmlsbGVyaWNhXCIsXCJsYXRcIjo0Mi41NTg0MjE4LFwibG5nXCI6LTcxLjI2ODk0NjF9LFwiYm9zdG9uXCI6e1wibmFtZVwiOlwiQm9zdG9uXCIsXCJsYXRcIjo0Mi4zNTg0MzA4LFwibG5nXCI6LTcxLjA1OTc3MzJ9LFwiYnJvY2t0b25cIjp7XCJuYW1lXCI6XCJCcm9ja3RvblwiLFwibGF0XCI6NDIuMDgzNDMzNSxcImxuZ1wiOi03MS4wMTgzNzg3fSxcImJyb29rbGluZVwiOntcIm5hbWVcIjpcIkJyb29rbGluZVwiLFwibGF0XCI6NDIuMzMxNzY0MTk5OTk5OTksXCJsbmdcIjotNzEuMTIxMTYzNX0sXCJjYW1icmlkZ2VcIjp7XCJuYW1lXCI6XCJDYW1icmlkZ2VcIixcImxhdFwiOjQyLjM3MjYzOTksXCJsbmdcIjotNzEuMTA5NjUyNzk5OTk5OTl9LFwiY2hpY29wZWVcIjp7XCJuYW1lXCI6XCJDaGljb3BlZVwiLFwibGF0XCI6NDIuMTQ4NzA0MyxcImxuZ1wiOi03Mi42MDc4NjcyfSxcImV2ZXJldHRcIjp7XCJuYW1lXCI6XCJFdmVyZXR0XCIsXCJsYXRcIjo0Mi40MDg0MyxcImxuZ1wiOi03MS4wNTM2NjI1fSxcImZhbGwgcml2ZXJcIjp7XCJuYW1lXCI6XCJGYWxsIFJpdmVyXCIsXCJsYXRcIjo0MS43MDE0OTEyLFwibG5nXCI6LTcxLjE1NTA0NTF9LFwiZnJhbWluZ2hhbVwiOntcIm5hbWVcIjpcIkZyYW1pbmdoYW1cIixcImxhdFwiOjQyLjI3OTI4NixcImxuZ1wiOi03MS40MTYxNTY1fSxcImhhdmVyaGlsbFwiOntcIm5hbWVcIjpcIkhhdmVyaGlsbFwiLFwibGF0XCI6NDIuNzc2MjAxNSxcImxuZ1wiOi03MS4wNzcyNzk2fSxcImxhd3JlbmNlXCI6e1wibmFtZVwiOlwiTGF3cmVuY2VcIixcImxhdFwiOjQyLjcwNzAzNTQsXCJsbmdcIjotNzEuMTYzMTEzN30sXCJsb3dlbGxcIjp7XCJuYW1lXCI6XCJMb3dlbGxcIixcImxhdFwiOjQyLjYzMzQyNDcsXCJsbmdcIjotNzEuMzE2MTcxNzk5OTk5OTl9LFwibHlublwiOntcIm5hbWVcIjpcIkx5bm5cIixcImxhdFwiOjQyLjQ2Njc2MzAwMDAwMDAxLFwibG5nXCI6LTcwLjk0OTQ5Mzh9LFwibWFsZGVuXCI6e1wibmFtZVwiOlwiTWFsZGVuXCIsXCJsYXRcIjo0Mi40MjUwOTY0LFwibG5nXCI6LTcxLjA2NjE2M30sXCJtZWRmb3JkXCI6e1wibmFtZVwiOlwiTWVkZm9yZFwiLFwibGF0XCI6NDIuNDE4NDI5NixcImxuZ1wiOi03MS4xMDYxNjM5fSxcIm1ldGh1ZW5cIjp7XCJuYW1lXCI6XCJNZXRodWVuXCIsXCJsYXRcIjo0Mi43MjYyMDE2LFwibG5nXCI6LTcxLjE5MDg5MjR9LFwibmV3IGJlZGZvcmRcIjp7XCJuYW1lXCI6XCJOZXcgQmVkZm9yZFwiLFwibGF0XCI6NDEuNjM2MjE1MixcImxuZ1wiOi03MC45MzQyMDQ5OTk5OTk5OX0sXCJuZXd0b25cIjp7XCJuYW1lXCI6XCJOZXd0b25cIixcImxhdFwiOjQyLjMzNzA0MTMsXCJsbmdcIjotNzEuMjA5MjIxMzk5OTk5OTl9LFwibm9ydGggYXR0bGVib3JvXCI6e1wibmFtZVwiOlwiTm9ydGggQXR0bGVib3JvXCIsXCJsYXRcIjo0MS45Njk1NTE2LFwibG5nXCI6LTcxLjM1NjU0Mzg5OTk5OTk5fSxcInBlYWJvZHlcIjp7XCJuYW1lXCI6XCJQZWFib2R5XCIsXCJsYXRcIjo0Mi41Mjc4NzMxLFwibG5nXCI6LTcwLjkyODY2MDl9LFwicGl0dHNmaWVsZFwiOntcIm5hbWVcIjpcIlBpdHRzZmllbGRcIixcImxhdFwiOjQyLjQ1MDA4NDUsXCJsbmdcIjotNzMuMjQ1MzgyNH0sXCJxdWluY3lcIjp7XCJuYW1lXCI6XCJRdWluY3lcIixcImxhdFwiOjQyLjI1Mjg3NzIsXCJsbmdcIjotNzEuMDAyMjcwNX0sXCJyZXZlcmVcIjp7XCJuYW1lXCI6XCJSZXZlcmVcIixcImxhdFwiOjQyLjQwODQzMDIsXCJsbmdcIjotNzEuMDExOTk0OH0sXCJzYWxlbVwiOntcIm5hbWVcIjpcIlNhbGVtXCIsXCJsYXRcIjo0Mi41MTk1NCxcImxuZ1wiOi03MC44OTY3MTU1fSxcInNvbWVydmlsbGVcIjp7XCJuYW1lXCI6XCJTb21lcnZpbGxlXCIsXCJsYXRcIjo0Mi4zODc1OTY4LFwibG5nXCI6LTcxLjA5OTQ5Njh9LFwic3ByaW5nZmllbGRcIjp7XCJuYW1lXCI6XCJTcHJpbmdmaWVsZFwiLFwibGF0XCI6NDIuMTAxNDgzMSxcImxuZ1wiOi03Mi41ODk4MTF9LFwidGF1bnRvblwiOntcIm5hbWVcIjpcIlRhdW50b25cIixcImxhdFwiOjQxLjkwMDEwMSxcImxuZ1wiOi03MS4wODk3Njc0fSxcIndhbHRoYW1cIjp7XCJuYW1lXCI6XCJXYWx0aGFtXCIsXCJsYXRcIjo0Mi4zNzY0ODUyLFwibG5nXCI6LTcxLjIzNTYxMTN9LFwid2VzdGZpZWxkXCI6e1wibmFtZVwiOlwiV2VzdGZpZWxkXCIsXCJsYXRcIjo0Mi4xMjUwOTI5LFwibG5nXCI6LTcyLjc0OTUzOH0sXCJ3ZXltb3V0aFwiOntcIm5hbWVcIjpcIldleW1vdXRoXCIsXCJsYXRcIjo0Mi4yMTgwNzI0LFwibG5nXCI6LTcwLjk0MTAzNTU5OTk5OTk5fSxcIndvcmNlc3RlclwiOntcIm5hbWVcIjpcIldvcmNlc3RlclwiLFwibGF0XCI6NDIuMjYyNTkzMixcImxuZ1wiOi03MS44MDIyOTM0fX0sXCJJTFwiOntcImFybGluZ3RvbiBoZWlnaHRzXCI6e1wibmFtZVwiOlwiQXJsaW5ndG9uIEhlaWdodHNcIixcImxhdFwiOjQyLjA4ODM2MDMsXCJsbmdcIjotODcuOTgwNjI2NTAwMDAwMDF9LFwiYXVyb3JhXCI6e1wibmFtZVwiOlwiQXVyb3JhXCIsXCJsYXRcIjo0MS43NjA1ODQ5LFwibG5nXCI6LTg4LjMyMDA3MTUwMDAwMDAxfSxcImJhcnRsZXR0XCI6e1wibmFtZVwiOlwiQmFydGxldHRcIixcImxhdFwiOjQxLjk5NTAyNzYsXCJsbmdcIjotODguMTg1NjMwMX0sXCJiZWxsZXZpbGxlXCI6e1wibmFtZVwiOlwiQmVsbGV2aWxsZVwiLFwibGF0XCI6MzguNTIwMDUwNCxcImxuZ1wiOi04OS45ODM5OTM1fSxcImJlcnd5blwiOntcIm5hbWVcIjpcIkJlcnd5blwiLFwibGF0XCI6NDEuODUwNTg3Mzk5OTk5OTksXCJsbmdcIjotODcuNzkzNjY4NX0sXCJibG9vbWluZ3RvblwiOntcIm5hbWVcIjpcIkJsb29taW5ndG9uXCIsXCJsYXRcIjo0MC40ODQyMDI3LFwibG5nXCI6LTg4Ljk5MzY4NzI5OTk5OTk5fSxcImJvbGluZ2Jyb29rXCI6e1wibmFtZVwiOlwiQm9saW5nYnJvb2tcIixcImxhdFwiOjQxLjY5ODY0MTU5OTk5OTk5LFwibG5nXCI6LTg4LjA2ODM5NTV9LFwiYnVmZmFsbyBncm92ZVwiOntcIm5hbWVcIjpcIkJ1ZmZhbG8gR3JvdmVcIixcImxhdFwiOjQyLjE2NjI4MzEsXCJsbmdcIjotODcuOTYzMTMwOH0sXCJjaGFtcGFpZ25cIjp7XCJuYW1lXCI6XCJDaGFtcGFpZ25cIixcImxhdFwiOjQwLjExNjQyMDQsXCJsbmdcIjotODguMjQzMzgyOX0sXCJjaGljYWdvXCI6e1wibmFtZVwiOlwiQ2hpY2Fnb1wiLFwibGF0XCI6NDEuODc4MTEzNixcImxuZ1wiOi04Ny42Mjk3OTgyfSxcImNpY2Vyb1wiOntcIm5hbWVcIjpcIkNpY2Vyb1wiLFwibGF0XCI6NDEuODQ1NTg3NyxcImxuZ1wiOi04Ny43NTM5NDQ4fSxcImNyeXN0YWwgbGFrZVwiOntcIm5hbWVcIjpcIkNyeXN0YWwgTGFrZVwiLFwibGF0XCI6NDIuMjQxMTM0NCxcImxuZ1wiOi04OC4zMTYxOTY0OTk5OTk5OX0sXCJkZWNhdHVyXCI6e1wibmFtZVwiOlwiRGVjYXR1clwiLFwibGF0XCI6MzkuODQwMzE0NyxcImxuZ1wiOi04OC45NTQ4MDAxfSxcImRla2FsYlwiOntcIm5hbWVcIjpcIkRlS2FsYlwiLFwibGF0XCI6NDEuOTI5NDczNixcImxuZ1wiOi04OC43NTAzNjQ2OTk5OTk5OX0sXCJkZXMgcGxhaW5lc1wiOntcIm5hbWVcIjpcIkRlcyBQbGFpbmVzXCIsXCJsYXRcIjo0Mi4wMzMzNjIzLFwibG5nXCI6LTg3Ljg4MzM5OTA5OTk5OTk5fSxcImRvd25lcnMgZ3JvdmVcIjp7XCJuYW1lXCI6XCJEb3duZXJzIEdyb3ZlXCIsXCJsYXRcIjo0MS44MDg5MTkxLFwibG5nXCI6LTg4LjAxMTE3NDU5OTk5OTk5fSxcImVsZ2luXCI6e1wibmFtZVwiOlwiRWxnaW5cIixcImxhdFwiOjQyLjAzNzI0ODcsXCJsbmdcIjotODguMjgxMTg5NX0sXCJlbG1odXJzdFwiOntcIm5hbWVcIjpcIkVsbWh1cnN0XCIsXCJsYXRcIjo0MS44OTk0NzQ0LFwibG5nXCI6LTg3Ljk0MDM0MTh9LFwiZXZhbnN0b25cIjp7XCJuYW1lXCI6XCJFdmFuc3RvblwiLFwibGF0XCI6NDIuMDQxMTQxNCxcImxuZ1wiOi04Ny42OTAwNTg3fSxcImdsZW52aWV3XCI6e1wibmFtZVwiOlwiR2xlbnZpZXdcIixcImxhdFwiOjQyLjA2OTc1MDksXCJsbmdcIjotODcuNzg3ODQwOH0sXCJob2ZmbWFuIGVzdGF0ZXNcIjp7XCJuYW1lXCI6XCJIb2ZmbWFuIEVzdGF0ZXNcIixcImxhdFwiOjQyLjA2Mjk5MTUsXCJsbmdcIjotODguMTIyNzE5ODk5OTk5OTl9LFwiam9saWV0XCI6e1wibmFtZVwiOlwiSm9saWV0XCIsXCJsYXRcIjo0MS41MjUwMzEsXCJsbmdcIjotODguMDgxNzI1MX0sXCJsb21iYXJkXCI6e1wibmFtZVwiOlwiTG9tYmFyZFwiLFwibGF0XCI6NDEuODgwMDI5NixcImxuZ1wiOi04OC4wMDc4NDM0OTk5OTk5OX0sXCJtb2xpbmVcIjp7XCJuYW1lXCI6XCJNb2xpbmVcIixcImxhdFwiOjQxLjUwNjcwMDMsXCJsbmdcIjotOTAuNTE1MTM0MTk5OTk5OTl9LFwibXQgcHJvc3BlY3RcIjp7XCJuYW1lXCI6XCJNdCBQcm9zcGVjdFwiLFwibGF0XCI6NDIuMDY2NDE2NyxcImxuZ1wiOi04Ny45MzcyOTA4fSxcIm5hcGVydmlsbGVcIjp7XCJuYW1lXCI6XCJOYXBlcnZpbGxlXCIsXCJsYXRcIjo0MS43ODU4NjI5LFwibG5nXCI6LTg4LjE0NzI4OTN9LFwibm9ybWFsXCI6e1wibmFtZVwiOlwiTm9ybWFsXCIsXCJsYXRcIjo0MC41MTQyMDI2LFwibG5nXCI6LTg4Ljk5MDYzMTJ9LFwib2FrIGxhd25cIjp7XCJuYW1lXCI6XCJPYWsgTGF3blwiLFwibGF0XCI6NDEuNzEwODY2MixcImxuZ1wiOi04Ny43NTgxMDgxfSxcIm9hayBwYXJrXCI6e1wibmFtZVwiOlwiT2FrIFBhcmtcIixcImxhdFwiOjQxLjg4NTAzMTcsXCJsbmdcIjotODcuNzg0NTAyNX0sXCJvcmxhbmQgcGFya1wiOntcIm5hbWVcIjpcIk9ybGFuZCBQYXJrXCIsXCJsYXRcIjo0MS42MzAzMTAzLFwibG5nXCI6LTg3Ljg1Mzk0MjUwMDAwMDAyfSxcInBhbGF0aW5lXCI6e1wibmFtZVwiOlwiUGFsYXRpbmVcIixcImxhdFwiOjQyLjExMDMwNDEsXCJsbmdcIjotODguMDM0MjQwMDAwMDAwMDF9LFwicGVvcmlhXCI6e1wibmFtZVwiOlwiUGVvcmlhXCIsXCJsYXRcIjo0MC42OTM2NDg4LFwibG5nXCI6LTg5LjU4ODk4NjR9LFwicGxhaW5maWVsZFwiOntcIm5hbWVcIjpcIlBsYWluZmllbGRcIixcImxhdFwiOjQxLjYxNTkxNSxcImxuZ1wiOi04OC4yMDQwNjg5OTk5OTk5OX0sXCJyb2NrZm9yZFwiOntcIm5hbWVcIjpcIlJvY2tmb3JkXCIsXCJsYXRcIjo0Mi4yNzExMzExLFwibG5nXCI6LTg5LjA5Mzk5NTJ9LFwicm9tZW92aWxsZVwiOntcIm5hbWVcIjpcIlJvbWVvdmlsbGVcIixcImxhdFwiOjQxLjY0NzUzMDYsXCJsbmdcIjotODguMDg5NTA2MX0sXCJzY2hhdW1idXJnXCI6e1wibmFtZVwiOlwiU2NoYXVtYnVyZ1wiLFwibGF0XCI6NDIuMDMzMzYwNyxcImxuZ1wiOi04OC4wODM0MDU5fSxcInNrb2tpZVwiOntcIm5hbWVcIjpcIlNrb2tpZVwiLFwibGF0XCI6NDIuMDMzMzYzNixcImxuZ1wiOi04Ny43MzMzOTM0fSxcInNwcmluZ2ZpZWxkXCI6e1wibmFtZVwiOlwiU3ByaW5nZmllbGRcIixcImxhdFwiOjM5Ljc4MTcyMTMwMDAwMDAxLFwibG5nXCI6LTg5LjY1MDE0ODF9LFwidGlubGV5IHBhcmtcIjp7XCJuYW1lXCI6XCJUaW5sZXkgUGFya1wiLFwibGF0XCI6NDEuNTczMzY2OSxcImxuZ1wiOi04Ny43ODQ0OTQ0fSxcInVyYmFuYVwiOntcIm5hbWVcIjpcIlVyYmFuYVwiLFwibGF0XCI6NDAuMTEwNTg3NSxcImxuZ1wiOi04OC4yMDcyNjk3fSxcIndhdWtlZ2FuXCI6e1wibmFtZVwiOlwiV2F1a2VnYW5cIixcImxhdFwiOjQyLjM2MzYzMzEsXCJsbmdcIjotODcuODQ0NzkzNzk5OTk5OTl9LFwid2hlYXRvblwiOntcIm5hbWVcIjpcIldoZWF0b25cIixcImxhdFwiOjQxLjg2NjE0MDMsXCJsbmdcIjotODguMTA3MDEyN319LFwiQ09cIjp7XCJhcnZhZGFcIjp7XCJuYW1lXCI6XCJBcnZhZGFcIixcImxhdFwiOjM5LjgwMjc2NDQsXCJsbmdcIjotMTA1LjA4NzQ4NDJ9LFwiYXVyb3JhXCI6e1wibmFtZVwiOlwiQXVyb3JhXCIsXCJsYXRcIjozOS43Mjk0MzE5LFwibG5nXCI6LTEwNC44MzE5MTk1fSxcImJvdWxkZXJcIjp7XCJuYW1lXCI6XCJCb3VsZGVyXCIsXCJsYXRcIjo0MC4wMTQ5ODU2LFwibG5nXCI6LTEwNS4yNzA1NDU2fSxcImJyb29tZmllbGRcIjp7XCJuYW1lXCI6XCJCcm9vbWZpZWxkXCIsXCJsYXRcIjozOS45MjA1NDExLFwibG5nXCI6LTEwNS4wODY2NTA0fSxcImNhc3RsZSByb2NrXCI6e1wibmFtZVwiOlwiQ2FzdGxlIFJvY2tcIixcImxhdFwiOjM5LjM3MjIxMjEsXCJsbmdcIjotMTA0Ljg1NjA5MDJ9LFwiY2VudGVubmlhbFwiOntcIm5hbWVcIjpcIkNlbnRlbm5pYWxcIixcImxhdFwiOjM5LjU4MDc0NTIsXCJsbmdcIjotMTA0Ljg3NzE3MjZ9LFwiY29sb3JhZG8gc3ByaW5nc1wiOntcIm5hbWVcIjpcIkNvbG9yYWRvIFNwcmluZ3NcIixcImxhdFwiOjM4LjgzMzg4MTYsXCJsbmdcIjotMTA0LjgyMTM2MzR9LFwiY29tbWVyY2UgY2l0eVwiOntcIm5hbWVcIjpcIkNvbW1lcmNlIENpdHlcIixcImxhdFwiOjM5LjgwODMxOTYsXCJsbmdcIjotMTA0LjkzMzg2NzV9LFwiZGVudmVyXCI6e1wibmFtZVwiOlwiRGVudmVyXCIsXCJsYXRcIjozOS43MzkxNTM2LFwibG5nXCI6LTEwNC45ODQ3MDM0fSxcImZvcnQgY29sbGluc1wiOntcIm5hbWVcIjpcIkZvcnQgQ29sbGluc1wiLFwibGF0XCI6NDAuNTg1MjYwMixcImxuZ1wiOi0xMDUuMDg0NDIzfSxcImdyYW5kIGp1bmN0aW9uXCI6e1wibmFtZVwiOlwiR3JhbmQgSnVuY3Rpb25cIixcImxhdFwiOjM5LjA2Mzg3MDUsXCJsbmdcIjotMTA4LjU1MDY0ODZ9LFwiZ3JlZWxleVwiOntcIm5hbWVcIjpcIkdyZWVsZXlcIixcImxhdFwiOjQwLjQyMzMxNDIsXCJsbmdcIjotMTA0LjcwOTEzMjJ9LFwiaGlnaGxhbmRzIHJhbmNoXCI6e1wibmFtZVwiOlwiSGlnaGxhbmRzIFJhbmNoXCIsXCJsYXRcIjozOS41NDQ0NDQ0LFwibG5nXCI6LTEwNC45NjgwNTU2fSxcImxha2V3b29kXCI6e1wibmFtZVwiOlwiTGFrZXdvb2RcIixcImxhdFwiOjM5LjcwNDcwOTUsXCJsbmdcIjotMTA1LjA4MTM3MzR9LFwibGl0dGxldG9uXCI6e1wibmFtZVwiOlwiTGl0dGxldG9uXCIsXCJsYXRcIjozOS42MTMzMjEsXCJsbmdcIjotMTA1LjAxNjY0OTh9LFwibG9uZ21vbnRcIjp7XCJuYW1lXCI6XCJMb25nbW9udFwiLFwibGF0XCI6NDAuMTY3MjA2OCxcImxuZ1wiOi0xMDUuMTAxOTI3NX0sXCJsb3ZlbGFuZFwiOntcIm5hbWVcIjpcIkxvdmVsYW5kXCIsXCJsYXRcIjo0MC4zOTc3NjEyLFwibG5nXCI6LTEwNS4wNzQ5ODAxfSxcInBhcmtlclwiOntcIm5hbWVcIjpcIlBhcmtlclwiLFwibGF0XCI6MzkuNTE4NjAwMixcImxuZ1wiOi0xMDQuNzYxMzYzM30sXCJwdWVibG9cIjp7XCJuYW1lXCI6XCJQdWVibG9cIixcImxhdFwiOjM4LjI1NDQ0NzIsXCJsbmdcIjotMTA0LjYwOTE0MDl9LFwidGhvcm50b25cIjp7XCJuYW1lXCI6XCJUaG9ybnRvblwiLFwibGF0XCI6MzkuODY4MDQxMixcImxuZ1wiOi0xMDQuOTcxOTI0M30sXCJ3ZXN0bWluc3RlclwiOntcIm5hbWVcIjpcIldlc3RtaW5zdGVyXCIsXCJsYXRcIjozOS44MzY2NTI4LFwibG5nXCI6LTEwNS4wMzcyMDQ2fX0sXCJNRFwiOntcImFzcGVuIGhpbGxcIjp7XCJuYW1lXCI6XCJBc3BlbiBIaWxsXCIsXCJsYXRcIjozOS4wNzk1NTI5LFwibG5nXCI6LTc3LjA3MzAzMzc5OTk5OTk5fSxcImJhbHRpbW9yZVwiOntcIm5hbWVcIjpcIkJhbHRpbW9yZVwiLFwibGF0XCI6MzkuMjkwMzg0OCxcImxuZ1wiOi03Ni42MTIxODkzfSxcImJlbCBhaXIgc291dGhcIjp7XCJuYW1lXCI6XCJCZWwgQWlyIFNvdXRoXCIsXCJsYXRcIjozOS41MDQwMzMsXCJsbmdcIjotNzYuMzE4MX0sXCJiZXRoZXNkYVwiOntcIm5hbWVcIjpcIkJldGhlc2RhXCIsXCJsYXRcIjozOC45ODQ2NTIsXCJsbmdcIjotNzcuMDk0NzA5Mn0sXCJib3dpZVwiOntcIm5hbWVcIjpcIkJvd2llXCIsXCJsYXRcIjozOS4wMDY3NzY4LFwibG5nXCI6LTc2Ljc3OTEzNjQ5OTk5OTk5fSxcImNhdG9uc3ZpbGxlXCI6e1wibmFtZVwiOlwiQ2F0b25zdmlsbGVcIixcImxhdFwiOjM5LjI3MjA1MDksXCJsbmdcIjotNzYuNzMxOTE2MDk5OTk5OTl9LFwiY29sdW1iaWFcIjp7XCJuYW1lXCI6XCJDb2x1bWJpYVwiLFwibGF0XCI6MzkuMjA0MDIzNixcImxuZ1wiOi03Ni44NjA1NjV9LFwiZHVuZGFsa1wiOntcIm5hbWVcIjpcIkR1bmRhbGtcIixcImxhdFwiOjM5LjI1MDY2MzMsXCJsbmdcIjotNzYuNTIwNTE4NH0sXCJlbGxpY290dCBjaXR5XCI6e1wibmFtZVwiOlwiRWxsaWNvdHQgQ2l0eVwiLFwibGF0XCI6MzkuMjY3MzI4MyxcImxuZ1wiOi03Ni43OTgzMDY3fSxcImZyZWRlcmlja1wiOntcIm5hbWVcIjpcIkZyZWRlcmlja1wiLFwibGF0XCI6MzkuNDE0MjY4Nzk5OTk5OTksXCJsbmdcIjotNzcuNDEwNTQwOX0sXCJnYWl0aGVyc2J1cmdcIjp7XCJuYW1lXCI6XCJHYWl0aGVyc2J1cmdcIixcImxhdFwiOjM5LjE0MzQ0MDYsXCJsbmdcIjotNzcuMjAxMzcwNX0sXCJnZXJtYW50b3duXCI6e1wibmFtZVwiOlwiR2VybWFudG93blwiLFwibGF0XCI6MzkuMTczMTYyMSxcImxuZ1wiOi03Ny4yNzE2NTAyfSxcImdsZW4gYnVybmllXCI6e1wibmFtZVwiOlwiR2xlbiBCdXJuaWVcIixcImxhdFwiOjM5LjE2MjYwODQsXCJsbmdcIjotNzYuNjI0Njg4Nn0sXCJub3J0aCBiZXRoZXNkYVwiOntcIm5hbWVcIjpcIk5vcnRoIEJldGhlc2RhXCIsXCJsYXRcIjozOS4wNDQ1NTM1LFwibG5nXCI6LTc3LjExODg2Nzc5OTk5OTk5fSxcIm9kZW50b25cIjp7XCJuYW1lXCI6XCJPZGVudG9uXCIsXCJsYXRcIjozOS4wODM5OTgxLFwibG5nXCI6LTc2LjcwMDI0NjJ9LFwicG90b21hY1wiOntcIm5hbWVcIjpcIlBvdG9tYWNcIixcImxhdFwiOjM5LjAxODE2NTEsXCJsbmdcIjotNzcuMjA4NTkxNH0sXCJyb2NrdmlsbGVcIjp7XCJuYW1lXCI6XCJSb2NrdmlsbGVcIixcImxhdFwiOjM5LjA4Mzk5NzMsXCJsbmdcIjotNzcuMTUyNzU3OH0sXCJzZXZlcm5cIjp7XCJuYW1lXCI6XCJTZXZlcm5cIixcImxhdFwiOjM5LjEzNzA1MjgsXCJsbmdcIjotNzYuNjk4MzAyMn0sXCJzaWx2ZXIgc3ByaW5nXCI6e1wibmFtZVwiOlwiU2lsdmVyIFNwcmluZ1wiLFwibGF0XCI6MzguOTkwNjY1NzAwMDAwMDEsXCJsbmdcIjotNzcuMDI2MDg4fSxcInRvd3NvblwiOntcIm5hbWVcIjpcIlRvd3NvblwiLFwibGF0XCI6MzkuNDAxNDk1NSxcImxuZ1wiOi03Ni42MDE5MTI1fSxcIndhbGRvcmZcIjp7XCJuYW1lXCI6XCJXYWxkb3JmXCIsXCJsYXRcIjozOC42MzQzNTQ0LFwibG5nXCI6LTc2LjkwNjY4Mjg5OTk5OTk5fSxcIndoZWF0b25cIjp7XCJuYW1lXCI6XCJXaGVhdG9uXCIsXCJsYXRcIjozOS4wMzk4MzE0LFwibG5nXCI6LTc3LjA1NTI1NTUwMDAwMDAyfX0sXCJXQVwiOntcImF1YnVyblwiOntcIm5hbWVcIjpcIkF1YnVyblwiLFwibGF0XCI6NDcuMzA3MzIyNzk5OTk5OTksXCJsbmdcIjotMTIyLjIyODQ1MzJ9LFwiYmVsbGV2dWVcIjp7XCJuYW1lXCI6XCJCZWxsZXZ1ZVwiLFwibGF0XCI6NDcuNjEwMzc3LFwibG5nXCI6LTEyMi4yMDA2Nzg2fSxcImJlbGxpbmdoYW1cIjp7XCJuYW1lXCI6XCJCZWxsaW5naGFtXCIsXCJsYXRcIjo0OC43NTk1NTI5LFwibG5nXCI6LTEyMi40ODgyMjQ5fSxcImV2ZXJldHRcIjp7XCJuYW1lXCI6XCJFdmVyZXR0XCIsXCJsYXRcIjo0Ny45Nzg5ODQ4LFwibG5nXCI6LTEyMi4yMDIwNzk0fSxcImZlZGVyYWwgd2F5XCI6e1wibmFtZVwiOlwiRmVkZXJhbCBXYXlcIixcImxhdFwiOjQ3LjMyMjMyMjEsXCJsbmdcIjotMTIyLjMxMjYyMjJ9LFwia2VubmV3aWNrXCI6e1wibmFtZVwiOlwiS2VubmV3aWNrXCIsXCJsYXRcIjo0Ni4yMTEyNDU4LFwibG5nXCI6LTExOS4xMzcyMzM4fSxcImtlbnRcIjp7XCJuYW1lXCI6XCJLZW50XCIsXCJsYXRcIjo0Ny4zODA5MzM1LFwibG5nXCI6LTEyMi4yMzQ4NDMxfSxcImtpcmtsYW5kXCI6e1wibmFtZVwiOlwiS2lya2xhbmRcIixcImxhdFwiOjQ3LjY4MTQ4NzUsXCJsbmdcIjotMTIyLjIwODczNTN9LFwibGFjZXlcIjp7XCJuYW1lXCI6XCJMYWNleVwiLFwibGF0XCI6NDcuMDM0MjYyODk5OTk5OTksXCJsbmdcIjotMTIyLjgyMzE5MTV9LFwibGFrZXdvb2RcIjp7XCJuYW1lXCI6XCJMYWtld29vZFwiLFwibGF0XCI6NDcuMTcxNzY0OSxcImxuZ1wiOi0xMjIuNTE4NDU4fSxcIm1hcnlzdmlsbGVcIjp7XCJuYW1lXCI6XCJNYXJ5c3ZpbGxlXCIsXCJsYXRcIjo0OC4wNTE3NjM3LFwibG5nXCI6LTEyMi4xNzcwODE4fSxcIm9seW1waWFcIjp7XCJuYW1lXCI6XCJPbHltcGlhXCIsXCJsYXRcIjo0Ny4wMzc4NzQxLFwibG5nXCI6LTEyMi45MDA2OTUxfSxcInBhc2NvXCI6e1wibmFtZVwiOlwiUGFzY29cIixcImxhdFwiOjQ2LjIzOTU3OTMsXCJsbmdcIjotMTE5LjEwMDU2NTd9LFwicmVkbW9uZFwiOntcIm5hbWVcIjpcIlJlZG1vbmRcIixcImxhdFwiOjQ3LjY3Mzk4ODEsXCJsbmdcIjotMTIyLjEyMTUxMn0sXCJyZW50b25cIjp7XCJuYW1lXCI6XCJSZW50b25cIixcImxhdFwiOjQ3LjQ4Mjg3NzU5OTk5OTk5LFwibG5nXCI6LTEyMi4yMTcwNjYxfSxcInJpY2hsYW5kXCI6e1wibmFtZVwiOlwiUmljaGxhbmRcIixcImxhdFwiOjQ2LjI4NTY5MDcsXCJsbmdcIjotMTE5LjI4NDQ2MjF9LFwic2FtbWFtaXNoXCI6e1wibmFtZVwiOlwiU2FtbWFtaXNoXCIsXCJsYXRcIjo0Ny42NDE3NjYzOTk5OTk5OSxcImxuZ1wiOi0xMjIuMDgwMzk5OH0sXCJzZWF0dGxlXCI6e1wibmFtZVwiOlwiU2VhdHRsZVwiLFwibGF0XCI6NDcuNjA2MjA5NSxcImxuZ1wiOi0xMjIuMzMyMDcwOH0sXCJzaG9yZWxpbmVcIjp7XCJuYW1lXCI6XCJTaG9yZWxpbmVcIixcImxhdFwiOjQ3Ljc1NTY1MzEsXCJsbmdcIjotMTIyLjM0MTUxNzh9LFwic291dGggaGlsbFwiOntcIm5hbWVcIjpcIlNvdXRoIEhpbGxcIixcImxhdFwiOjQ3LjE0MTIxMjIsXCJsbmdcIjotMTIyLjI3MDExODN9LFwic3Bva2FuZVwiOntcIm5hbWVcIjpcIlNwb2thbmVcIixcImxhdFwiOjQ3LjY1ODc4MDIsXCJsbmdcIjotMTE3LjQyNjA0NjZ9LFwic3Bva2FuZSB2YWxsZXlcIjp7XCJuYW1lXCI6XCJTcG9rYW5lIFZhbGxleVwiLFwibGF0XCI6NDcuNjczMjI4MSxcImxuZ1wiOi0xMTcuMjM5Mzc0OH0sXCJ0YWNvbWFcIjp7XCJuYW1lXCI6XCJUYWNvbWFcIixcImxhdFwiOjQ3LjI1Mjg3NjgsXCJsbmdcIjotMTIyLjQ0NDI5MDZ9LFwidmFuY291dmVyXCI6e1wibmFtZVwiOlwiVmFuY291dmVyXCIsXCJsYXRcIjo0NS42Mzg3MjgxLFwibG5nXCI6LTEyMi42NjE0ODYxfSxcInlha2ltYVwiOntcIm5hbWVcIjpcIllha2ltYVwiLFwibGF0XCI6NDYuNjAyMDcxMSxcImxuZ1wiOi0xMjAuNTA1ODk4N319LFwiQUxcIjp7XCJhdWJ1cm5cIjp7XCJuYW1lXCI6XCJBdWJ1cm5cIixcImxhdFwiOjMyLjYwOTg1NjYsXCJsbmdcIjotODUuNDgwNzgyNDk5OTk5OTl9LFwiYmlybWluZ2hhbVwiOntcIm5hbWVcIjpcIkJpcm1pbmdoYW1cIixcImxhdFwiOjMzLjUyMDY2MDgsXCJsbmdcIjotODYuODAyNDg5OTk5OTk5OTl9LFwiZGVjYXR1clwiOntcIm5hbWVcIjpcIkRlY2F0dXJcIixcImxhdFwiOjM0LjYwNTkyNTMsXCJsbmdcIjotODYuOTgzMzQxN30sXCJkb3RoYW5cIjp7XCJuYW1lXCI6XCJEb3RoYW5cIixcImxhdFwiOjMxLjIyMzIzMTMsXCJsbmdcIjotODUuMzkwNDg4OH0sXCJob292ZXJcIjp7XCJuYW1lXCI6XCJIb292ZXJcIixcImxhdFwiOjMzLjQwNTM4NjcsXCJsbmdcIjotODYuODExMzc4MX0sXCJodW50c3ZpbGxlXCI6e1wibmFtZVwiOlwiSHVudHN2aWxsZVwiLFwibGF0XCI6MzQuNzMwMzY4OCxcImxuZ1wiOi04Ni41ODYxMDM3fSxcIm1hZGlzb25cIjp7XCJuYW1lXCI6XCJNYWRpc29uXCIsXCJsYXRcIjozNC42OTkyNTc5LFwibG5nXCI6LTg2Ljc0ODMzMTgwMDAwMDAyfSxcIm1vYmlsZVwiOntcIm5hbWVcIjpcIk1vYmlsZVwiLFwibGF0XCI6MzAuNjk0MzU2NixcImxuZ1wiOi04OC4wNDMwNTQwOTk5OTk5OX0sXCJtb250Z29tZXJ5XCI6e1wibmFtZVwiOlwiTW9udGdvbWVyeVwiLFwibGF0XCI6MzIuMzY2ODA1MixcImxuZ1wiOi04Ni4yOTk5Njg5fSxcInR1c2NhbG9vc2FcIjp7XCJuYW1lXCI6XCJUdXNjYWxvb3NhXCIsXCJsYXRcIjozMy4yMDk4NDA3LFwibG5nXCI6LTg3LjU2OTE3MzQ5OTk5OTk5fX0sXCJUTlwiOntcImJhcnRsZXR0XCI6e1wibmFtZVwiOlwiQmFydGxldHRcIixcImxhdFwiOjM1LjIwNDUzMjgsXCJsbmdcIjotODkuODczOTc1M30sXCJjaGF0dGFub29nYVwiOntcIm5hbWVcIjpcIkNoYXR0YW5vb2dhXCIsXCJsYXRcIjozNS4wNDU2Mjk3LFwibG5nXCI6LTg1LjMwOTY4MDF9LFwiY2xhcmtzdmlsbGVcIjp7XCJuYW1lXCI6XCJDbGFya3N2aWxsZVwiLFwibGF0XCI6MzYuNTI5NzcwNixcImxuZ1wiOi04Ny4zNTk0NTI4fSxcImNsZXZlbGFuZFwiOntcIm5hbWVcIjpcIkNsZXZlbGFuZFwiLFwibGF0XCI6MzUuMTU5NTE4MixcImxuZ1wiOi04NC44NzY2MTE1fSxcImNvbGxpZXJ2aWxsZVwiOntcIm5hbWVcIjpcIkNvbGxpZXJ2aWxsZVwiLFwibGF0XCI6MzUuMDQyMDM2LFwibG5nXCI6LTg5LjY2NDUyNjZ9LFwiZnJhbmtsaW5cIjp7XCJuYW1lXCI6XCJGcmFua2xpblwiLFwibGF0XCI6MzUuOTI1MDYzNyxcImxuZ1wiOi04Ni44Njg4ODk5fSxcImhlbmRlcnNvbnZpbGxlXCI6e1wibmFtZVwiOlwiSGVuZGVyc29udmlsbGVcIixcImxhdFwiOjM2LjMwNDc3MzUsXCJsbmdcIjotODYuNjE5OTk1N30sXCJqYWNrc29uXCI6e1wibmFtZVwiOlwiSmFja3NvblwiLFwibGF0XCI6MzUuNjE0NTE2OSxcImxuZ1wiOi04OC44MTM5NDY4OTk5OTk5OX0sXCJqb2huc29uIGNpdHlcIjp7XCJuYW1lXCI6XCJKb2huc29uIENpdHlcIixcImxhdFwiOjM2LjMxMzQzOTcsXCJsbmdcIjotODIuMzUzNDcyN30sXCJraW5nc3BvcnRcIjp7XCJuYW1lXCI6XCJLaW5nc3BvcnRcIixcImxhdFwiOjM2LjU0ODQzNCxcImxuZ1wiOi04Mi41NjE4MTg2fSxcImtub3h2aWxsZVwiOntcIm5hbWVcIjpcIktub3h2aWxsZVwiLFwibGF0XCI6MzUuOTYwNjM4NCxcImxuZ1wiOi04My45MjA3MzkyfSxcIm1lbXBoaXNcIjp7XCJuYW1lXCI6XCJNZW1waGlzXCIsXCJsYXRcIjozNS4xNDk1MzQzLFwibG5nXCI6LTkwLjA0ODk4MDF9LFwibXVyZnJlZXNib3JvXCI6e1wibmFtZVwiOlwiTXVyZnJlZXNib3JvXCIsXCJsYXRcIjozNS44NDU2MjEzLFwibG5nXCI6LTg2LjM5MDI3fSxcIm5hc2h2aWxsZVwiOntcIm5hbWVcIjpcIk5hc2h2aWxsZVwiLFwibGF0XCI6MzYuMTY1ODg5OSxcImxuZ1wiOi04Ni43ODQ0NDMyfSxcInNteXJuYVwiOntcIm5hbWVcIjpcIlNteXJuYVwiLFwibGF0XCI6MzUuOTgyODQxMixcImxuZ1wiOi04Ni41MTg2MDQ1fX0sXCJOSlwiOntcImJheW9ubmVcIjp7XCJuYW1lXCI6XCJCYXlvbm5lXCIsXCJsYXRcIjo0MC42Njg3MTQxLFwibG5nXCI6LTc0LjExNDMwOTF9LFwiY2FtZGVuXCI6e1wibmFtZVwiOlwiQ2FtZGVuXCIsXCJsYXRcIjozOS45MjU5NDYzLFwibG5nXCI6LTc1LjExOTYxOTl9LFwiY2xpZnRvblwiOntcIm5hbWVcIjpcIkNsaWZ0b25cIixcImxhdFwiOjQwLjg1ODQzMjgsXCJsbmdcIjotNzQuMTYzNzU1Mjk5OTk5OTl9LFwiZWFzdCBvcmFuZ2VcIjp7XCJuYW1lXCI6XCJFYXN0IE9yYW5nZVwiLFwibGF0XCI6NDAuNzY3MzIzLFwibG5nXCI6LTc0LjIwNDg2Nzd9LFwiZWxpemFiZXRoXCI6e1wibmFtZVwiOlwiRWxpemFiZXRoXCIsXCJsYXRcIjo0MC42NjM5OTE2LFwibG5nXCI6LTc0LjIxMDcwMDZ9LFwiaGFja2Vuc2Fja1wiOntcIm5hbWVcIjpcIkhhY2tlbnNhY2tcIixcImxhdFwiOjQwLjg4NTkzMjUsXCJsbmdcIjotNzQuMDQzNDczNn0sXCJob2Jva2VuXCI6e1wibmFtZVwiOlwiSG9ib2tlblwiLFwibGF0XCI6NDAuNzQzOTkwNSxcImxuZ1wiOi03NC4wMzIzNjI2fSxcImplcnNleSBjaXR5XCI6e1wibmFtZVwiOlwiSmVyc2V5IENpdHlcIixcImxhdFwiOjQwLjcyODE1NzQ5OTk5OTk5LFwibG5nXCI6LTc0LjA3NzY0MTd9LFwia2Vhcm55XCI6e1wibmFtZVwiOlwiS2Vhcm55XCIsXCJsYXRcIjo0MC43Njg0MzQyLFwibG5nXCI6LTc0LjE0NTQyMTR9LFwibGFrZXdvb2QgdG93bnNoaXBcIjp7XCJuYW1lXCI6XCJMYWtld29vZCBUb3duc2hpcFwiLFwibGF0XCI6NDAuMDgyMTI4OTk5OTk5OTksXCJsbmdcIjotNzQuMjA5NzAxNH0sXCJuZXdhcmtcIjp7XCJuYW1lXCI6XCJOZXdhcmtcIixcImxhdFwiOjQwLjczNTY1NyxcImxuZ1wiOi03NC4xNzIzNjY3fSxcIm5ldyBicnVuc3dpY2tcIjp7XCJuYW1lXCI6XCJOZXcgQnJ1bnN3aWNrXCIsXCJsYXRcIjo0MC40ODYyMTU3LFwibG5nXCI6LTc0LjQ1MTgxODh9LFwicGFzc2FpY1wiOntcIm5hbWVcIjpcIlBhc3NhaWNcIixcImxhdFwiOjQwLjg1Njc2NjIsXCJsbmdcIjotNzQuMTI4NDc2NH0sXCJwYXRlcnNvblwiOntcIm5hbWVcIjpcIlBhdGVyc29uXCIsXCJsYXRcIjo0MC45MTY3NjU0LFwibG5nXCI6LTc0LjE3MTgxMDk5OTk5OTk5fSxcInBlcnRoIGFtYm95XCI6e1wibmFtZVwiOlwiUGVydGggQW1ib3lcIixcImxhdFwiOjQwLjUwNjc3MjMsXCJsbmdcIjotNzQuMjY1NDIzNH0sXCJwbGFpbmZpZWxkXCI6e1wibmFtZVwiOlwiUGxhaW5maWVsZFwiLFwibGF0XCI6NDAuNjMzNzEzNixcImxuZ1wiOi03NC40MDczNzM2fSxcInNheXJldmlsbGVcIjp7XCJuYW1lXCI6XCJTYXlyZXZpbGxlXCIsXCJsYXRcIjo0MC40NTk0MDIxMDAwMDAwMSxcImxuZ1wiOi03NC4zNjA4NDZ9LFwidG9tcyByaXZlclwiOntcIm5hbWVcIjpcIlRvbXMgUml2ZXJcIixcImxhdFwiOjM5Ljk1MzczNTgsXCJsbmdcIjotNzQuMTk3OTQ1OH0sXCJ0cmVudG9uXCI6e1wibmFtZVwiOlwiVHJlbnRvblwiLFwibGF0XCI6NDAuMjE3MDUzNCxcImxuZ1wiOi03NC43NDI5Mzg0fSxcInVuaW9uIGNpdHlcIjp7XCJuYW1lXCI6XCJVbmlvbiBDaXR5XCIsXCJsYXRcIjo0MC43Nzk1NDU1LFwibG5nXCI6LTc0LjAyMzc1MTE5OTk5OTk5fSxcInVuaW9uXCI6e1wibmFtZVwiOlwiVW5pb25cIixcImxhdFwiOjQwLjYzNTc0MTksXCJsbmdcIjotNzQuOTU4MDQ5NX0sXCJ2aW5lbGFuZFwiOntcIm5hbWVcIjpcIlZpbmVsYW5kXCIsXCJsYXRcIjozOS40ODYyMjY3LFwibG5nXCI6LTc1LjAyNTczMTI5OTk5OTk5fSxcIndlc3QgbmV3IHlvcmtcIjp7XCJuYW1lXCI6XCJXZXN0IE5ldyBZb3JrXCIsXCJsYXRcIjo0MC43ODc4Nzg4LFwibG5nXCI6LTc0LjAxNDMwNjR9fSxcIk5FXCI6e1wiYmVsbGV2dWVcIjp7XCJuYW1lXCI6XCJCZWxsZXZ1ZVwiLFwibGF0XCI6NDEuMTU4NjExMSxcImxuZ1wiOi05NS45MzQxNjY2OTk5OTk5OX0sXCJncmFuZCBpc2xhbmRcIjp7XCJuYW1lXCI6XCJHcmFuZCBJc2xhbmRcIixcImxhdFwiOjQwLjkyMjIyMjIsXCJsbmdcIjotOTguMzU4MDU1NjAwMDAwMDF9LFwibGluY29sblwiOntcIm5hbWVcIjpcIkxpbmNvbG5cIixcImxhdFwiOjQwLjgwNjg2MixcImxuZ1wiOi05Ni42ODE2Nzl9LFwib21haGFcIjp7XCJuYW1lXCI6XCJPbWFoYVwiLFwibGF0XCI6NDEuMjUyMzYzNCxcImxuZ1wiOi05NS45OTc5ODgyOTk5OTk5OX19LFwiTVRcIjp7XCJiaWxsaW5nc1wiOntcIm5hbWVcIjpcIkJpbGxpbmdzXCIsXCJsYXRcIjo0NS43ODMyODU2LFwibG5nXCI6LTEwOC41MDA2OTA0fSxcImdyZWF0IGZhbGxzXCI6e1wibmFtZVwiOlwiR3JlYXQgRmFsbHNcIixcImxhdFwiOjQ3LjUwMDIzNTQsXCJsbmdcIjotMTExLjMwMDgwODN9LFwibWlzc291bGFcIjp7XCJuYW1lXCI6XCJNaXNzb3VsYVwiLFwibGF0XCI6NDYuODYwNTE4OSxcImxuZ1wiOi0xMTQuMDE5NTAxfX0sXCJNU1wiOntcImJpbG94aVwiOntcIm5hbWVcIjpcIkJpbG94aVwiLFwibGF0XCI6MzAuMzk2MDMxOCxcImxuZ1wiOi04OC44ODUzMDc3OTk5OTk5OX0sXCJndWxmcG9ydFwiOntcIm5hbWVcIjpcIkd1bGZwb3J0XCIsXCJsYXRcIjozMC4zNjc0MTk4LFwibG5nXCI6LTg5LjA5MjgxNTV9LFwiaGF0dGllc2J1cmdcIjp7XCJuYW1lXCI6XCJIYXR0aWVzYnVyZ1wiLFwibGF0XCI6MzEuMzI3MTE4OSxcImxuZ1wiOi04OS4yOTAzMzkxOTk5OTk5OX0sXCJqYWNrc29uXCI6e1wibmFtZVwiOlwiSmFja3NvblwiLFwibGF0XCI6MzIuMjk4NzU3MyxcImxuZ1wiOi05MC4xODQ4MTAzfSxcIm1lcmlkaWFuXCI6e1wibmFtZVwiOlwiTWVyaWRpYW5cIixcImxhdFwiOjMyLjM2NDMwOTgsXCJsbmdcIjotODguNzAzNjU2fSxcInNvdXRoYXZlblwiOntcIm5hbWVcIjpcIlNvdXRoYXZlblwiLFwibGF0XCI6MzQuOTg4OTgxOCxcImxuZ1wiOi05MC4wMTI1OTEzfX0sXCJORFwiOntcImJpc21hcmNrXCI6e1wibmFtZVwiOlwiQmlzbWFyY2tcIixcImxhdFwiOjQ2LjgwODMyNjgsXCJsbmdcIjotMTAwLjc4MzczOTJ9LFwiZmFyZ29cIjp7XCJuYW1lXCI6XCJGYXJnb1wiLFwibGF0XCI6NDYuODc3MTg2MyxcImxuZ1wiOi05Ni43ODk4MDM0fSxcImdyYW5kIGZvcmtzXCI6e1wibmFtZVwiOlwiR3JhbmQgRm9ya3NcIixcImxhdFwiOjQ3LjkyNTI1NjgsXCJsbmdcIjotOTcuMDMyODU0N30sXCJtaW5vdFwiOntcIm5hbWVcIjpcIk1pbm90XCIsXCJsYXRcIjo0OC4yMzI1MDk1LFwibG5nXCI6LTEwMS4yOTYyNzMyfX0sXCJNT1wiOntcImJsdWUgc3ByaW5nc1wiOntcIm5hbWVcIjpcIkJsdWUgU3ByaW5nc1wiLFwibGF0XCI6MzkuMDE2OTUwOSxcImxuZ1wiOi05NC4yODE2MTQ4fSxcImNoZXN0ZXJmaWVsZFwiOntcIm5hbWVcIjpcIkNoZXN0ZXJmaWVsZFwiLFwibGF0XCI6MzguNjYzMTA4MyxcImxuZ1wiOi05MC41NzcwNjc1fSxcImNvbHVtYmlhXCI6e1wibmFtZVwiOlwiQ29sdW1iaWFcIixcImxhdFwiOjM4Ljk1MTcwNTMsXCJsbmdcIjotOTIuMzM0MDcyNH0sXCJmbG9yaXNzYW50XCI6e1wibmFtZVwiOlwiRmxvcmlzc2FudFwiLFwibGF0XCI6MzguNzg5MjE3LFwibG5nXCI6LTkwLjMyMjYxNH0sXCJpbmRlcGVuZGVuY2VcIjp7XCJuYW1lXCI6XCJJbmRlcGVuZGVuY2VcIixcImxhdFwiOjM5LjA5MTExNjEsXCJsbmdcIjotOTQuNDE1NTA2Nzk5OTk5OTl9LFwiamVmZmVyc29uIGNpdHlcIjp7XCJuYW1lXCI6XCJKZWZmZXJzb24gQ2l0eVwiLFwibGF0XCI6MzguNTc2NzAxNzAwMDAwMDEsXCJsbmdcIjotOTIuMTczNTE2NH0sXCJqb3BsaW5cIjp7XCJuYW1lXCI6XCJKb3BsaW5cIixcImxhdFwiOjM3LjA4NDIyNzEwMDAwMDAxLFwibG5nXCI6LTk0LjUxMzI4MDk5OTk5OTk5fSxcImthbnNhcyBjaXR5XCI6e1wibmFtZVwiOlwiS2Fuc2FzIENpdHlcIixcImxhdFwiOjM5LjA5OTcyNjUsXCJsbmdcIjotOTQuNTc4NTY2N30sXCJsZWUncyBzdW1taXRcIjp7XCJuYW1lXCI6XCJMZWUncyBTdW1taXRcIixcImxhdFwiOjM4LjkxNjM0MyxcImxuZ1wiOi05NC4zODM1MTZ9LFwibydmYWxsb25cIjp7XCJuYW1lXCI6XCJPJ0ZhbGxvblwiLFwibGF0XCI6MzguODEwNjA3NSxcImxuZ1wiOi05MC42OTk4NDc2OTk5OTk5OX0sXCJzdCBjaGFybGVzXCI6e1wibmFtZVwiOlwiU3QgQ2hhcmxlc1wiLFwibGF0XCI6MzguNzgzMzMzMyxcImxuZ1wiOi05MC41MTY2NjY3fSxcInN0IGpvc2VwaFwiOntcIm5hbWVcIjpcIlN0IEpvc2VwaFwiLFwibGF0XCI6MzkuNzU3Nzc3OCxcImxuZ1wiOi05NC44MzYzODg4OTk5OTk5OX0sXCJzdCBsb3Vpc1wiOntcIm5hbWVcIjpcIlN0IExvdWlzXCIsXCJsYXRcIjozOC42MjcwMDI1LFwibG5nXCI6LTkwLjE5OTQwNDE5OTk5OTk5fSxcInN0IHBldGVyc1wiOntcIm5hbWVcIjpcIlN0IFBldGVyc1wiLFwibGF0XCI6MzguNzc4NDc1LFwibG5nXCI6LTkwLjYwNTI4MDk5OTk5OTk5fSxcInNwcmluZ2ZpZWxkXCI6e1wibmFtZVwiOlwiU3ByaW5nZmllbGRcIixcImxhdFwiOjM3LjIwODk1NzIsXCJsbmdcIjotOTMuMjkyMjk4ODk5OTk5OTl9fSxcIklEXCI6e1wiYm9pc2VcIjp7XCJuYW1lXCI6XCJCb2lzZVwiLFwibGF0XCI6NDMuNjEyNjMxLFwibG5nXCI6LTExNi4yMTEwNzZ9LFwiY2FsZHdlbGxcIjp7XCJuYW1lXCI6XCJDYWxkd2VsbFwiLFwibGF0XCI6NDMuNjYyOTM4Mzk5OTk5OTksXCJsbmdcIjotMTE2LjY4NzM1OTZ9LFwiY29ldXIgZCdhbGVuZVwiOntcIm5hbWVcIjpcIkNvZXVyIGQnQWxlbmVcIixcImxhdFwiOjQ3LjY3NzY4MzIsXCJsbmdcIjotMTE2Ljc4MDQ2NjR9LFwiaWRhaG8gZmFsbHNcIjp7XCJuYW1lXCI6XCJJZGFobyBGYWxsc1wiLFwibGF0XCI6NDMuNDkxNjUxMzk5OTk5OTksXCJsbmdcIjotMTEyLjAzMzk2NDV9LFwibWVyaWRpYW5cIjp7XCJuYW1lXCI6XCJNZXJpZGlhblwiLFwibGF0XCI6NDMuNjEyMTA4NyxcImxuZ1wiOi0xMTYuMzkxNTEzMX0sXCJuYW1wYVwiOntcIm5hbWVcIjpcIk5hbXBhXCIsXCJsYXRcIjo0My41NDA3MTcyLFwibG5nXCI6LTExNi41NjM0NjI0fSxcInBvY2F0ZWxsb1wiOntcIm5hbWVcIjpcIlBvY2F0ZWxsb1wiLFwibGF0XCI6NDIuODcxMzAzMixcImxuZ1wiOi0xMTIuNDQ1NTM0NH0sXCJ0d2luIGZhbGxzXCI6e1wibmFtZVwiOlwiVHdpbiBGYWxsc1wiLFwibGF0XCI6NDIuNTYyOTY2OCxcImxuZ1wiOi0xMTQuNDYwODcxMX19LFwiVVRcIjp7XCJib3VudGlmdWxcIjp7XCJuYW1lXCI6XCJCb3VudGlmdWxcIixcImxhdFwiOjQwLjg4OTM4OTUsXCJsbmdcIjotMTExLjg4MDc3MX0sXCJkcmFwZXJcIjp7XCJuYW1lXCI6XCJEcmFwZXJcIixcImxhdFwiOjQwLjUyNDY3MTEsXCJsbmdcIjotMTExLjg2MzgyMjZ9LFwibGF5dG9uXCI6e1wibmFtZVwiOlwiTGF5dG9uXCIsXCJsYXRcIjo0MS4wNjAyMjE2LFwibG5nXCI6LTExMS45NzEwNTI5fSxcImxlaGlcIjp7XCJuYW1lXCI6XCJMZWhpXCIsXCJsYXRcIjo0MC4zOTE2MTcyLFwibG5nXCI6LTExMS44NTA3NjYyfSxcImxvZ2FuXCI6e1wibmFtZVwiOlwiTG9nYW5cIixcImxhdFwiOjQxLjczNTQ4NjEsXCJsbmdcIjotMTExLjgzNDM4OH0sXCJtaWxsY3JlZWtcIjp7XCJuYW1lXCI6XCJNaWxsY3JlZWtcIixcImxhdFwiOjQwLjY4Njg5MTQsXCJsbmdcIjotMTExLjg3NTQ5MDd9LFwibXVycmF5XCI6e1wibmFtZVwiOlwiTXVycmF5XCIsXCJsYXRcIjo0MC42NjY4OTE2LFwibG5nXCI6LTExMS44ODc5OTA5fSxcIm9nZGVuXCI6e1wibmFtZVwiOlwiT2dkZW5cIixcImxhdFwiOjQxLjIyMyxcImxuZ1wiOi0xMTEuOTczODMwNH0sXCJvcmVtXCI6e1wibmFtZVwiOlwiT3JlbVwiLFwibGF0XCI6NDAuMjk2ODk3OSxcImxuZ1wiOi0xMTEuNjk0NjQ3NX0sXCJwcm92b1wiOntcIm5hbWVcIjpcIlByb3ZvXCIsXCJsYXRcIjo0MC4yMzM4NDM4LFwibG5nXCI6LTExMS42NTg1MzM3fSxcInJpdmVydG9uXCI6e1wibmFtZVwiOlwiUml2ZXJ0b25cIixcImxhdFwiOjQwLjUyMTg5MyxcImxuZ1wiOi0xMTEuOTM5MTAyM30sXCJzdCBnZW9yZ2VcIjp7XCJuYW1lXCI6XCJTdCBHZW9yZ2VcIixcImxhdFwiOjM3LjA5NTI3NzgsXCJsbmdcIjotMTEzLjU3ODA1NTZ9LFwic2FsdCBsYWtlIGNpdHlcIjp7XCJuYW1lXCI6XCJTYWx0IExha2UgQ2l0eVwiLFwibGF0XCI6NDAuNzYwNzc5MyxcImxuZ1wiOi0xMTEuODkxMDQ3NH0sXCJzYW5keVwiOntcIm5hbWVcIjpcIlNhbmR5XCIsXCJsYXRcIjo0MC41NzI1MDAwMDAwMDAwMSxcImxuZ1wiOi0xMTEuODU5NzIyMn0sXCJzb3V0aCBqb3JkYW5cIjp7XCJuYW1lXCI6XCJTb3V0aCBKb3JkYW5cIixcImxhdFwiOjQwLjU2MjE3MDQsXCJsbmdcIjotMTExLjkyOTY1OH0sXCJ0YXlsb3JzdmlsbGVcIjp7XCJuYW1lXCI6XCJUYXlsb3JzdmlsbGVcIixcImxhdFwiOjQwLjY2NzcyNDc5OTk5OTk5LFwibG5nXCI6LTExMS45Mzg4MjU4fSxcIndlc3Qgam9yZGFuXCI6e1wibmFtZVwiOlwiV2VzdCBKb3JkYW5cIixcImxhdFwiOjQwLjYwOTY2OTgsXCJsbmdcIjotMTExLjkzOTEwMzF9LFwid2VzdCB2YWxsZXkgY2l0eVwiOntcIm5hbWVcIjpcIldlc3QgVmFsbGV5IENpdHlcIixcImxhdFwiOjQwLjY5MTYxMzIsXCJsbmdcIjotMTEyLjAwMTA1MDF9fSxcIktZXCI6e1wiYm93bGluZyBncmVlblwiOntcIm5hbWVcIjpcIkJvd2xpbmcgR3JlZW5cIixcImxhdFwiOjM2Ljk5MDMxOTksXCJsbmdcIjotODYuNDQzNjAxOH0sXCJsZXhpbmd0b25cIjp7XCJuYW1lXCI6XCJMZXhpbmd0b25cIixcImxhdFwiOjM4LjA0MDU4MzcsXCJsbmdcIjotODQuNTAzNzE2NH0sXCJsb3Vpc3ZpbGxlXCI6e1wibmFtZVwiOlwiTG91aXN2aWxsZVwiLFwibGF0XCI6MzguMjUyNjY0NyxcImxuZ1wiOi04NS43NTg0NTU3fSxcIm93ZW5zYm9yb1wiOntcIm5hbWVcIjpcIk93ZW5zYm9yb1wiLFwibGF0XCI6MzcuNzcxOTA3NCxcImxuZ1wiOi04Ny4xMTExNjc2fX0sXCJDVFwiOntcImJyaWRnZXBvcnRcIjp7XCJuYW1lXCI6XCJCcmlkZ2Vwb3J0XCIsXCJsYXRcIjo0MS4xODY1NDc4LFwibG5nXCI6LTczLjE5NTE3NjY5OTk5OTk5fSxcImJyaXN0b2xcIjp7XCJuYW1lXCI6XCJCcmlzdG9sXCIsXCJsYXRcIjo0MS42NzE3NjQ4MDAwMDAwMSxcImxuZ1wiOi03Mi45NDkyNzAzfSxcImRhbmJ1cnlcIjp7XCJuYW1lXCI6XCJEYW5idXJ5XCIsXCJsYXRcIjo0MS4zOTQ4MTcsXCJsbmdcIjotNzMuNDU0MDExMX0sXCJlYXN0IGhhcnRmb3JkXCI6e1wibmFtZVwiOlwiRWFzdCBIYXJ0Zm9yZFwiLFwibGF0XCI6NDEuNzYzNDIxOSxcImxuZ1wiOi03Mi42MTI4MzM5fSxcImhhcnRmb3JkXCI6e1wibmFtZVwiOlwiSGFydGZvcmRcIixcImxhdFwiOjQxLjc2MzcxMTA5OTk5OTk5LFwibG5nXCI6LTcyLjY4NTA5MzJ9LFwibWVyaWRlblwiOntcIm5hbWVcIjpcIk1lcmlkZW5cIixcImxhdFwiOjQxLjUzODE1MzUsXCJsbmdcIjotNzIuODA3MDQzNDk5OTk5OTl9LFwibWlkZGxldG93blwiOntcIm5hbWVcIjpcIk1pZGRsZXRvd25cIixcImxhdFwiOjQxLjU2MjMyMDksXCJsbmdcIjotNzIuNjUwNjQ4OH0sXCJtaWxmb3JkXCI6e1wibmFtZVwiOlwiTWlsZm9yZFwiLFwibGF0XCI6NDEuMjMwODk0NSxcImxuZ1wiOi03My4wNjM1ODQ0fSxcIm5ldyBicml0YWluXCI6e1wibmFtZVwiOlwiTmV3IEJyaXRhaW5cIixcImxhdFwiOjQxLjY2MTIxMDQsXCJsbmdcIjotNzIuNzc5NTQxOX0sXCJuZXcgaGF2ZW5cIjp7XCJuYW1lXCI6XCJOZXcgSGF2ZW5cIixcImxhdFwiOjQxLjMwODE1MjcsXCJsbmdcIjotNzIuOTI4MTU3N30sXCJub3J3YWxrXCI6e1wibmFtZVwiOlwiTm9yd2Fsa1wiLFwibGF0XCI6NDEuMTE3NTk2NixcImxuZ1wiOi03My40MDc4OTY4MDAwMDAwMn0sXCJzdGFtZm9yZFwiOntcIm5hbWVcIjpcIlN0YW1mb3JkXCIsXCJsYXRcIjo0MS4wNTM0MzAyLFwibG5nXCI6LTczLjUzODczNDF9LFwic3RyYXRmb3JkXCI6e1wibmFtZVwiOlwiU3RyYXRmb3JkXCIsXCJsYXRcIjo0MS4xODQ1NDE0OTk5OTk5OSxcImxuZ1wiOi03My4xMzMxNjUxfSxcIndhdGVyYnVyeVwiOntcIm5hbWVcIjpcIldhdGVyYnVyeVwiLFwibGF0XCI6NDEuNTU4MTUyNSxcImxuZ1wiOi03My4wNTE0OTY1fSxcIndlc3QgaGFydGZvcmRcIjp7XCJuYW1lXCI6XCJXZXN0IEhhcnRmb3JkXCIsXCJsYXRcIjo0MS43NjIwODQyLFwibG5nXCI6LTcyLjc0MjAxNTF9LFwid2VzdCBoYXZlblwiOntcIm5hbWVcIjpcIldlc3QgSGF2ZW5cIixcImxhdFwiOjQxLjI3MDY1MjcsXCJsbmdcIjotNzIuOTQ3MDQ3MDk5OTk5OTl9fSxcIk9LXCI6e1wiYnJva2VuIGFycm93XCI6e1wibmFtZVwiOlwiQnJva2VuIEFycm93XCIsXCJsYXRcIjozNi4wNTI1OTkzLFwibG5nXCI6LTk1Ljc5MDgxOTV9LFwiZWRtb25kXCI6e1wibmFtZVwiOlwiRWRtb25kXCIsXCJsYXRcIjozNS42NTI4MzIzLFwibG5nXCI6LTk3LjQ3ODA5NTQwMDAwMDAyfSxcImVuaWRcIjp7XCJuYW1lXCI6XCJFbmlkXCIsXCJsYXRcIjozNi4zOTU1ODkxLFwibG5nXCI6LTk3Ljg3ODM5MTF9LFwibGF3dG9uXCI6e1wibmFtZVwiOlwiTGF3dG9uXCIsXCJsYXRcIjozNC42MDg2ODU0LFwibG5nXCI6LTk4LjM5MDMzMDQ5OTk5OTk5fSxcIm1pZHdlc3QgY2l0eVwiOntcIm5hbWVcIjpcIk1pZHdlc3QgQ2l0eVwiLFwibGF0XCI6MzUuNDQ5NTA2NSxcImxuZ1wiOi05Ny4zOTY3MDE5fSxcIm1vb3JlXCI6e1wibmFtZVwiOlwiTW9vcmVcIixcImxhdFwiOjM1LjMzOTUwNzksXCJsbmdcIjotOTcuNDg2NzAyNzk5OTk5OTl9LFwibm9ybWFuXCI6e1wibmFtZVwiOlwiTm9ybWFuXCIsXCJsYXRcIjozNS4yMjI1NjY4LFwibG5nXCI6LTk3LjQzOTQ3Nzd9LFwib2tsYWhvbWEgY2l0eVwiOntcIm5hbWVcIjpcIk9rbGFob21hIENpdHlcIixcImxhdFwiOjM1LjUwMDYyNTYsXCJsbmdcIjotOTcuNjExNDIxN30sXCJzdGlsbHdhdGVyXCI6e1wibmFtZVwiOlwiU3RpbGx3YXRlclwiLFwibGF0XCI6MzYuMTE1NjA3MSxcImxuZ1wiOi05Ny4wNTgzNjgxfSxcInR1bHNhXCI6e1wibmFtZVwiOlwiVHVsc2FcIixcImxhdFwiOjM2LjE1Mzk4MTYsXCJsbmdcIjotOTUuOTkyNzc1MDAwMDAwMDF9fSxcIlZUXCI6e1wiYnVybGluZ3RvblwiOntcIm5hbWVcIjpcIkJ1cmxpbmd0b25cIixcImxhdFwiOjQ0LjQ3NTg4MjUsXCJsbmdcIjotNzMuMjEyMDcxOTk5OTk5OTl9fSxcIldZXCI6e1wiY2FzcGVyXCI6e1wibmFtZVwiOlwiQ2FzcGVyXCIsXCJsYXRcIjo0Mi44NjY2MzIsXCJsbmdcIjotMTA2LjMxMzA4MX0sXCJjaGV5ZW5uZVwiOntcIm5hbWVcIjpcIkNoZXllbm5lXCIsXCJsYXRcIjo0MS4xMzk5ODE0LFwibG5nXCI6LTEwNC44MjAyNDYyfX0sXCJTQ1wiOntcImNoYXJsZXN0b25cIjp7XCJuYW1lXCI6XCJDaGFybGVzdG9uXCIsXCJsYXRcIjozMi43NzY1NjU2LFwibG5nXCI6LTc5LjkzMDkyMTU5OTk5OTk5fSxcImNvbHVtYmlhXCI6e1wibmFtZVwiOlwiQ29sdW1iaWFcIixcImxhdFwiOjM0LjAwMDcxMDQsXCJsbmdcIjotODEuMDM0ODE0NH0sXCJncmVlbnZpbGxlXCI6e1wibmFtZVwiOlwiR3JlZW52aWxsZVwiLFwibGF0XCI6MzQuODUyNjE3NTk5OTk5OTksXCJsbmdcIjotODIuMzk0MDEwNH0sXCJtdCBwbGVhc2FudFwiOntcIm5hbWVcIjpcIk10IFBsZWFzYW50XCIsXCJsYXRcIjozMi43OTQwNjUxLFwibG5nXCI6LTc5Ljg2MjU4NTF9LFwibm9ydGggY2hhcmxlc3RvblwiOntcIm5hbWVcIjpcIk5vcnRoIENoYXJsZXN0b25cIixcImxhdFwiOjMyLjg1NDYxOTcsXCJsbmdcIjotNzkuOTc0ODEwM30sXCJyb2NrIGhpbGxcIjp7XCJuYW1lXCI6XCJSb2NrIEhpbGxcIixcImxhdFwiOjM0LjkyNDg2NjcsXCJsbmdcIjotODEuMDI1MDc4NDAwMDAwMDF9LFwic3VtbWVydmlsbGVcIjp7XCJuYW1lXCI6XCJTdW1tZXJ2aWxsZVwiLFwibGF0XCI6MzMuMDE4NTAzOSxcImxuZ1wiOi04MC4xNzU2NDgwOTk5OTk5OX19LFwiV1ZcIjp7XCJjaGFybGVzdG9uXCI6e1wibmFtZVwiOlwiQ2hhcmxlc3RvblwiLFwibGF0XCI6MzguMzQ5ODE5NSxcImxuZ1wiOi04MS42MzI2MjM0fSxcImh1bnRpbmd0b25cIjp7XCJuYW1lXCI6XCJIdW50aW5ndG9uXCIsXCJsYXRcIjozOC40MTkyNDk2LFwibG5nXCI6LTgyLjQ0NTE1NDAwMDAwMDAyfX0sXCJOSFwiOntcImNvbmNvcmRcIjp7XCJuYW1lXCI6XCJDb25jb3JkXCIsXCJsYXRcIjo0My4yMDgxMzY2LFwibG5nXCI6LTcxLjUzNzU3MTh9LFwibWFuY2hlc3RlclwiOntcIm5hbWVcIjpcIk1hbmNoZXN0ZXJcIixcImxhdFwiOjQyLjk5NTYzOTcsXCJsbmdcIjotNzEuNDU0Nzg5MX0sXCJuYXNodWFcIjp7XCJuYW1lXCI6XCJOYXNodWFcIixcImxhdFwiOjQyLjc2NTM2NjIsXCJsbmdcIjotNzEuNDY3NTY1OTk5OTk5OTl9fSxcIkFSXCI6e1wiY29ud2F5XCI6e1wibmFtZVwiOlwiQ29ud2F5XCIsXCJsYXRcIjozNS4wODg2OTYzLFwibG5nXCI6LTkyLjQ0MjEwMTF9LFwiZmF5ZXR0ZXZpbGxlXCI6e1wibmFtZVwiOlwiRmF5ZXR0ZXZpbGxlXCIsXCJsYXRcIjozNi4wNjI1Nzk1LFwibG5nXCI6LTk0LjE1NzQyNjN9LFwiZm9ydCBzbWl0aFwiOntcIm5hbWVcIjpcIkZvcnQgU21pdGhcIixcImxhdFwiOjM1LjM4NTkyNDIsXCJsbmdcIjotOTQuMzk4NTQ3NDk5OTk5OTl9LFwiam9uZXNib3JvXCI6e1wibmFtZVwiOlwiSm9uZXNib3JvXCIsXCJsYXRcIjozNS44NDIyOTY3MDAwMDAwMSxcImxuZ1wiOi05MC43MDQyNzl9LFwibGl0dGxlIHJvY2tcIjp7XCJuYW1lXCI6XCJMaXR0bGUgUm9ja1wiLFwibGF0XCI6MzQuNzQ2NDgwOSxcImxuZ1wiOi05Mi4yODk1OTQ3OTk5OTk5OX0sXCJub3J0aCBsaXR0bGUgcm9ja1wiOntcIm5hbWVcIjpcIk5vcnRoIExpdHRsZSBSb2NrXCIsXCJsYXRcIjozNC43Njk1MzYsXCJsbmdcIjotOTIuMjY3MDk0MX0sXCJwaW5lIGJsdWZmXCI6e1wibmFtZVwiOlwiUGluZSBCbHVmZlwiLFwibGF0XCI6MzQuMjI4NDMxMixcImxuZ1wiOi05Mi4wMDMxOTU0OTk5OTk5OX0sXCJyb2dlcnNcIjp7XCJuYW1lXCI6XCJSb2dlcnNcIixcImxhdFwiOjM2LjMzMjAxOTYsXCJsbmdcIjotOTQuMTE4NTM2Nn0sXCJzcHJpbmdkYWxlXCI6e1wibmFtZVwiOlwiU3ByaW5nZGFsZVwiLFwibGF0XCI6MzYuMTg2NzQ0MjAwMDAwMDEsXCJsbmdcIjotOTQuMTI4ODE0MX19LFwiUklcIjp7XCJjcmFuc3RvblwiOntcIm5hbWVcIjpcIkNyYW5zdG9uXCIsXCJsYXRcIjo0MS43Nzk4MjI2LFwibG5nXCI6LTcxLjQzNzI3OTZ9LFwiZWFzdCBwcm92aWRlbmNlXCI6e1wibmFtZVwiOlwiRWFzdCBQcm92aWRlbmNlXCIsXCJsYXRcIjo0MS44MTM3MTE2LFwibG5nXCI6LTcxLjM3MDA1NDV9LFwicGF3dHVja2V0XCI6e1wibmFtZVwiOlwiUGF3dHVja2V0XCIsXCJsYXRcIjo0MS44Nzg3MTEsXCJsbmdcIjotNzEuMzgyNTU1Nzk5OTk5OTl9LFwicHJvdmlkZW5jZVwiOntcIm5hbWVcIjpcIlByb3ZpZGVuY2VcIixcImxhdFwiOjQxLjgyMzk4OTEsXCJsbmdcIjotNzEuNDEyODM0M30sXCJ3YXJ3aWNrXCI6e1wibmFtZVwiOlwiV2Fyd2lja1wiLFwibGF0XCI6NDEuNzAwMTAwOSxcImxuZ1wiOi03MS40MTYxNjcxfSxcIndvb25zb2NrZXRcIjp7XCJuYW1lXCI6XCJXb29uc29ja2V0XCIsXCJsYXRcIjo0Mi4wMDI4NzYwOTk5OTk5OSxcImxuZ1wiOi03MS41MTQ3ODM5MDAwMDAwMX19LFwiSElcIjp7XCJob25vbHVsdVwiOntcIm5hbWVcIjpcIkhvbm9sdWx1XCIsXCJsYXRcIjoyMS4zMDY5NDQ0LFwibG5nXCI6LTE1Ny44NTgzMzMzfSxcImhpbG9cIjp7XCJuYW1lXCI6XCJIaWxvXCIsXCJsYXRcIjoxOS41NDI5MTUxLFwibG5nXCI6LTE1NS42NjU4NTY4fSxcInBlYXJsIGNpdHlcIjp7XCJuYW1lXCI6XCJQZWFybCBDaXR5XCIsXCJsYXRcIjoyMS4zOTcyMjIyLFwibG5nXCI6LTE1Ny45NzMzMzMzfX0sXCJOVlwiOntcImVudGVycHJpc2VcIjp7XCJuYW1lXCI6XCJFbnRlcnByaXNlXCIsXCJsYXRcIjozNi4wMjUyNTAzLFwibG5nXCI6LTExNS4yNDE5NDE5fSxcImhlbmRlcnNvblwiOntcIm5hbWVcIjpcIkhlbmRlcnNvblwiLFwibGF0XCI6MzYuMDM5NTI0NyxcImxuZ1wiOi0xMTQuOTgxNzIxM30sXCJsYXMgdmVnYXNcIjp7XCJuYW1lXCI6XCJMYXMgVmVnYXNcIixcImxhdFwiOjM2LjExNDY0NixcImxuZ1wiOi0xMTUuMTcyODE2fSxcIm5vcnRoIGxhcyB2ZWdhc1wiOntcIm5hbWVcIjpcIk5vcnRoIExhcyBWZWdhc1wiLFwibGF0XCI6MzYuMTk4ODU5MixcImxuZ1wiOi0xMTUuMTE3NTAxM30sXCJwYXJhZGlzZVwiOntcIm5hbWVcIjpcIlBhcmFkaXNlXCIsXCJsYXRcIjozNi4wOTcxOTQ1LFwibG5nXCI6LTExNS4xNDY2NjQ4fSxcInJlbm9cIjp7XCJuYW1lXCI6XCJSZW5vXCIsXCJsYXRcIjozOS41Mjk2MzI5LFwibG5nXCI6LTExOS44MTM4MDI3fSxcInNwYXJrc1wiOntcIm5hbWVcIjpcIlNwYXJrc1wiLFwibGF0XCI6MzkuNTM0OTExMixcImxuZ1wiOi0xMTkuNzUyNjg4Nn0sXCJzcHJpbmcgdmFsbGV5XCI6e1wibmFtZVwiOlwiU3ByaW5nIFZhbGxleVwiLFwibGF0XCI6MzYuMTA4MDI1OCxcImxuZ1wiOi0xMTUuMjQ1MDAwNn0sXCJzdW5yaXNlIG1hbm9yXCI6e1wibmFtZVwiOlwiU3VucmlzZSBNYW5vclwiLFwibGF0XCI6MzYuMjExMDgxOSxcImxuZ1wiOi0xMTUuMDczMDU2M30sXCJ3aGl0bmV5XCI6e1wibmFtZVwiOlwiV2hpdG5leVwiLFwibGF0XCI6MzYuMDk2Njg5NyxcImxuZ1wiOi0xMTUuMDQwNzQxMn19LFwiS1NcIjp7XCJodXRjaGluc29uXCI6e1wibmFtZVwiOlwiSHV0Y2hpbnNvblwiLFwibGF0XCI6MzguMDYwODQ0NSxcImxuZ1wiOi05Ny45Mjk3NzQyOTk5OTk5OX0sXCJrYW5zYXMgY2l0eVwiOntcIm5hbWVcIjpcIkthbnNhcyBDaXR5XCIsXCJsYXRcIjozOS4xMTQwNTMsXCJsbmdcIjotOTQuNjI3NDYzNn0sXCJsYXdyZW5jZVwiOntcIm5hbWVcIjpcIkxhd3JlbmNlXCIsXCJsYXRcIjozOC45NzE2Njg5LFwibG5nXCI6LTk1LjIzNTI1MDF9LFwibGVuZXhhXCI6e1wibmFtZVwiOlwiTGVuZXhhXCIsXCJsYXRcIjozOC45NTM2MTc0LFwibG5nXCI6LTk0LjczMzU3MDg5OTk5OTk5fSxcIm1hbmhhdHRhblwiOntcIm5hbWVcIjpcIk1hbmhhdHRhblwiLFwibGF0XCI6MzkuMTgzNjA4MTk5OTk5OTksXCJsbmdcIjotOTYuNTcxNjY5Mzk5OTk5OTl9LFwib2xhdGhlXCI6e1wibmFtZVwiOlwiT2xhdGhlXCIsXCJsYXRcIjozOC44ODEzOTU4LFwibG5nXCI6LTk0LjgxOTEyODQ5OTk5OTk5fSxcIm92ZXJsYW5kIHBhcmtcIjp7XCJuYW1lXCI6XCJPdmVybGFuZCBQYXJrXCIsXCJsYXRcIjozOC45ODIyMjgyLFwibG5nXCI6LTk0LjY3MDc5MTd9LFwic2FsaW5hXCI6e1wibmFtZVwiOlwiU2FsaW5hXCIsXCJsYXRcIjozOC44NDAyODA1LFwibG5nXCI6LTk3LjYxMTQyMzY5OTk5OTk5fSxcInNoYXduZWVcIjp7XCJuYW1lXCI6XCJTaGF3bmVlXCIsXCJsYXRcIjozOS4wMjI4NDg0OTk5OTk5OSxcImxuZ1wiOi05NC43MTUxODY1fSxcInRvcGVrYVwiOntcIm5hbWVcIjpcIlRvcGVrYVwiLFwibGF0XCI6MzkuMDU1ODIzNSxcImxuZ1wiOi05NS42ODkwMTg0OTk5OTk5OX0sXCJ3aWNoaXRhXCI6e1wibmFtZVwiOlwiV2ljaGl0YVwiLFwibGF0XCI6MzcuNjkyMjIyMixcImxuZ1wiOi05Ny4zMzcyMjIyfX0sXCJNRVwiOntcInBvcnRsYW5kXCI6e1wibmFtZVwiOlwiUG9ydGxhbmRcIixcImxhdFwiOjQzLjY2MTQ3MTAwMDAwMDAxLFwibG5nXCI6LTcwLjI1NTMyNTl9fSxcIlNEXCI6e1wicmFwaWQgY2l0eVwiOntcIm5hbWVcIjpcIlJhcGlkIENpdHlcIixcImxhdFwiOjQ0LjA4MDU0MzQsXCJsbmdcIjotMTAzLjIzMTAxNDl9LFwic2lvdXggZmFsbHNcIjp7XCJuYW1lXCI6XCJTaW91eCBGYWxsc1wiLFwibGF0XCI6NDMuNTQ5OTc0OSxcImxuZ1wiOi05Ni43MDAzMjd9fSxcIkRDXCI6e1wid2FzaGluZ3RvblwiOntcIm5hbWVcIjpcIldhc2hpbmd0b25cIixcImxhdFwiOjM4Ljg5NTExMTgsXCJsbmdcIjotNzcuMDM2MzY1OH19LFwiREVcIjp7XCJ3aWxtaW5ndG9uXCI6e1wibmFtZVwiOlwiV2lsbWluZ3RvblwiLFwibGF0XCI6MzkuNzQ1ODMzMyxcImxuZ1wiOi03NS41NDY2NjY3fX19OyJdfQ==
