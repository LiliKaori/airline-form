import { Text, Select } from "@/styles/style";

export default function SelectC({
    label="",
    options={}
}){
    return (
        <>
            <Text>{label}</Text>
            <Select>
                {options.map((op)=>{
                    <option>{op}</option>
                })}
            </Select>
        </>
        
        
    )
}