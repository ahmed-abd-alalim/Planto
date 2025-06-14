// ################
// --> stete context
// ################
export type props = {
  children: React.ReactNode
}

export type dataType = object[]

export type stateType = {
  appData: dataType
  setAppData : React.Dispatch<React.SetStateAction<dataType>>
}