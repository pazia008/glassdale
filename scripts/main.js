import { CriminalList } from "./criminals/CriminalList.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { NoteForm, } from "./notes/NoteForm.js"
import { ShowNotesButton } from "./notes/ShowNotesButton.js"
import "./notes/NoteList.js"
import "./criminals/alibi/AlibiList.js"
import { ShowWitnessButton } from "./witnesses/ShowWitnessButton.js"
import "./witnesses/WitnessList.js"



OfficerSelect()
ConvictionSelect()
CriminalList()
NoteForm()
ShowNotesButton()
ShowWitnessButton()