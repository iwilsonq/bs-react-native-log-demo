open BsReactNative;

let str = ReasonReact.string;

/* here we define some styles */
module Styles = {
  open Style;

  let screenContainer =
    style([
      flex(1.),
      justifyContent(FlexStart),
      alignItems(FlexStart),
      backgroundColor(String("#fff")),
      width(Pct(100.)),
    ]);

  let headerText =
    style([
      color(String("#000")),
      fontSize(Float(24.)),
      fontWeight(`Bold),
      marginTop(Pt(16.)),
      marginBottom(Pt(24.)),
      marginHorizontal(Pt(24.)),
    ]);

  let screenContent =
    style([
      width(Pct(100.)),
      height(Pct(98.)),
      justifyContent(SpaceBetween),
    ]);

  let form = style([borderTopWidth(1.), borderColor(String("#d3d3d3"))]);
  let listItem =
    style([
      flexDirection(Row),
      justifyContent(SpaceBetween),
      borderColor(String("#d3d3d3")),
      borderBottomWidth(1.),
      paddingHorizontal(Pt(24.)),
      paddingVertical(Pt(16.)),
    ]);

  let textInput = style([flex(1.), textAlign(Right)]);

  let saveButton =
    style([
      justifyContent(Center),
      alignItems(Center),
      backgroundColor(String("#000")),
      width(Pct(100.)),
      paddingVertical(Pt(16.)),
    ]);

  let saveButtonText = style([color(String("#fff")), fontWeight(`Bold)]);
};

type log = {
  pushups: int,
  situps: int,
  milesRan: float,
  notes: string,
};

module ListItem = {
  type itemValue = [ | `String(string) | `Int(int) | `Float(float)];

  let component = ReasonReact.statelessComponent("ListItem");
  let make =
      (
        ~value=?,
        ~onChangeText,
        ~label,
        ~placeholder,
        ~keyboardType,
        _children,
      ) => {
    /* makeValue coerces the `value` prop from a string, float, or int into a type-safe string value */
    let makeValue = value =>
      switch (value) {
      | Some(value) =>
        switch (value) {
        | `String(s) => s
        | `Float(f) =>
          switch (f) {
          | 0. => "" /* Catch zero case */
          | f => f |> string_of_float
          }
        | `Int(i) =>
          switch (i) {
          | 0 => ""
          | i => i |> string_of_int
          }
        }
      | None => ""
      };

    {
      ...component,
      render: _self =>
        <View style=Styles.listItem>
          <Text> {label |> str} </Text>
          <TextInput
            style=Styles.textInput
            placeholder
            keyboardType
            onChangeText
            value={makeValue(value)}
          />
        </View>,
    };
  };
};

type state = {
  logs: list(log),
  notes: string,
  milesRan: float,
  pushups: int,
  situps: int,
};

type action =
  | CreateLog
  | UpdateNotes(string)
  | UpdateMilesRan(float)
  | UpdatePushUps(int)
  | UpdateSitUps(int);

let component = ReasonReact.reducerComponent("EditLog");

let make = _children => {
  ...component,
  initialState: () => {
    logs: [],
    notes: "",
    milesRan: 0.,
    pushups: 0,
    situps: 0,
  },
  reducer: (action, state) =>
    switch (action) {
    | CreateLog =>
      let newLog = {
        notes: state.notes,
        milesRan: state.milesRan,
        pushups: state.pushups,
        situps: state.situps,
      };
      ReasonReact.Update({
        notes: "",
        milesRan: 0.,
        pushups: 0,
        situps: 0,
        logs: state.logs @ [newLog],
      });
    | UpdateNotes(notes) => ReasonReact.Update({...state, notes})
    | UpdateMilesRan(milesRan) => ReasonReact.Update({...state, milesRan})
    | UpdatePushUps(pushups) => ReasonReact.Update({...state, pushups})
    | UpdateSitUps(situps) => ReasonReact.Update({...state, situps})
    },
  render: ({state, send}) =>
    <SafeAreaView style=Styles.screenContainer>
      <View style=Styles.screenContent>
        <View style=Styles.form>
          <ListItem
            label="Distance"
            placeholder="Miles Ran"
            keyboardType=`numeric
            value={`Float(state.milesRan)}
            onChangeText={
              value => {
                Js.log2("miles", value);
                switch (value) {
                | "" => send(UpdateMilesRan(0.))
                | value =>
                  if (Validate.float(value)) {
                    send(UpdateMilesRan(float_of_string(value)));
                  }
                };
              }
            }
          />
          <ListItem
            label="Sit Ups"
            placeholder="Sit Up Count"
            keyboardType=`numeric
            value={`Int(state.situps)}
            onChangeText={
              value =>
                switch (value) {
                | "" => send(UpdateSitUps(0))
                | value =>
                  if (Validate.int(value)) {
                    send(UpdateSitUps(int_of_string(value)));
                  }
                }
            }
          />
          <ListItem
            label="Push Ups"
            placeholder="Push Up Count"
            keyboardType=`numeric
            value={`Int(state.pushups)}
            onChangeText={
              value =>
                switch (value) {
                | "" => send(UpdatePushUps(0))
                | value =>
                  if (Validate.int(value)) {
                    send(UpdatePushUps(int_of_string(value)));
                  }
                }
            }
          />
          <ListItem
            label="Notes"
            placeholder="Notes"
            keyboardType=`default
            value={`String(state.notes)}
            onChangeText={notes => send(UpdateNotes(notes))}
          />
        </View>
        <View>
          <TouchableHighlight
            style=Styles.saveButton onPress={_event => send(CreateLog)}>
            <Text style=Styles.saveButtonText> {"Save" |> str} </Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>,
};