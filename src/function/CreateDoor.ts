import DoorModel from "@/model/Door";

export function CreateDoor( amount: number , selected: number): DoorModel[]{
    return Array.from({ length: amount }, (_ , index) => {
        const number = index + 1
        const present = number === selected
        return new DoorModel(number , present)
    })
}


export function updateDoor( doors: DoorModel[] , modified: DoorModel ): DoorModel[]{
    return doors.map(door => {
        const sameModified = door.number === modified.number

        if(sameModified){
            return modified
        }else{
            return modified.open ? door : door.deselect()
        }
    })


}