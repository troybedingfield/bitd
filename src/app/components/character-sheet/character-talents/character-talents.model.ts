export class CharacterTalents {
  public hunt: hunt;
  public study: study;
  public survey: survey;
  public tinker: tinker;
  public finesse: finesse;
  public prowl: prowl;
  public skirmish: skirmish;
  public wreck: wreck;
  public attune: attune;
  public command: command;
  public consort: consort;
  public sway: sway;
  public id?: string;

  constructor(
    hunt: hunt,
    study: study,
    survey: survey,
    tinker: tinker,
    finesse: finesse,
    prowl: prowl,
    skirmish: skirmish,
    wreck: wreck,
    attune: attune,
    command: command,
    consort: consort,
    sway: sway,
    id?: string) {
    this.hunt = hunt;
    this.study = study;
    this.survey = survey;
    this.tinker = tinker;
    this.finesse = finesse;
    this.prowl = prowl;
    this.skirmish = skirmish;
    this.wreck = wreck;
    this.attune = attune;
    this.command = command;
    this.consort = consort;
    this.sway = sway;
    this.id = id;
  }

}

export class hunt {
  constructor(
    public level1: boolean,
    public level2: boolean,
    public level3: boolean,
    public level4: boolean,
    // public level5: boolean,
  ) { }
}
export class study {
  constructor(
    public level1: boolean,
    public level2: boolean,
    public level3: boolean,
    public level4: boolean,
    // public level5: boolean,
  ) { }
}
export class survey {
  constructor(
    public level1: boolean,
    public level2: boolean,
    public level3: boolean,
    public level4: boolean,
    // public level5: boolean,
  ) { }
}
export class tinker {
  constructor(
    public level1: boolean,
    public level2: boolean,
    public level3: boolean,
    public level4: boolean,
    // public level5: boolean,
  ) { }
}
export class finesse {
  constructor(
    public level1: boolean,
    public level2: boolean,
    public level3: boolean,
    public level4: boolean,
    // public level5: boolean,
  ) { }
}
export class prowl {
  constructor(
    public level1: boolean,
    public level2: boolean,
    public level3: boolean,
    public level4: boolean,
    // public level5: boolean,
  ) { }
}
export class skirmish {
  constructor(
    public level1: boolean,
    public level2: boolean,
    public level3: boolean,
    public level4: boolean,
    // public level5: boolean,
  ) { }
}
export class wreck {
  constructor(
    public level1: boolean,
    public level2: boolean,
    public level3: boolean,
    public level4: boolean,
    // public level5: boolean,
  ) { }
}
export class attune {
  constructor(
    public level1: boolean,
    public level2: boolean,
    public level3: boolean,
    public level4: boolean,
    // public level5: boolean,
  ) { }
}
export class command {
  constructor(
    public level1: boolean,
    public level2: boolean,
    public level3: boolean,
    public level4: boolean,
    // public level5: boolean,
  ) { }
}
export class consort {
  constructor(
    public level1: boolean,
    public level2: boolean,
    public level3: boolean,
    public level4: boolean,
    // public level5: boolean,
  ) { }
}
export class sway {
  constructor(
    public level1: boolean,
    public level2: boolean,
    public level3: boolean,
    public level4: boolean,
    // public level5: boolean,
  ) { }
}


