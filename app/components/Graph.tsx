"use client"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";



const data=[
    {date:"Nov 5",amount:10},
    {date:"Nov 7",amount:100},
    {date:"Nov 8",amount:500},
]

interface iAppProps{
    data:{
        date:string;
        amount:string;
    }[]
}


export function Graph({data}:iAppProps){
    return(
        <ChartContainer 
            config={{
                amount:{
                    label:"Amount",
                    color:"hsl(var(--primary))"
                }
            }}
            className="min-h-[300px]"
        
        >
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <XAxis dataKey="date"/>
                    <YAxis/>
                    <ChartTooltip 
                        content={<ChartTooltipContent indicator="line"/>}
                    />
                    <Line 
                        type="monotone" 
                        dataKey="amount" 
                        stroke="var(--color-amount)"
                        strokeWidth={2}
                    />

                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>
    )
}