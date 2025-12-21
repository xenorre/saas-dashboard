import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from './ui/chart';
import { VENDOR_MONITORED } from '@/constants';

const chartConfig = {
  monitored: {
    label: 'Total monitored',
    color: 'var(--chart-3)',
  },
  limit: {
    label: 'Available limit',
    color: 'var(--color-secondary)',
  },
} satisfies ChartConfig;

function AppRadialChart() {
  const totalLimits = VENDOR_MONITORED[0].monitored + VENDOR_MONITORED[0].limit;

  return (
    <ChartContainer
      config={chartConfig}
      className='w-[200px] h-[110px]'
    >
      <RadialBarChart
        data={VENDOR_MONITORED}
        startAngle={0}
        innerRadius={90}
        cy={104}
        outerRadius={140}
        endAngle={180}
      >
        <RadialBar
          dataKey='limit'
          stackId='a'
          fill='var(--color-limit)'
          cornerRadius={20}
          className='stroke-2 stroke-transparent'
        />

        <RadialBar
          dataKey='monitored'
          stackId='a'
          fill='var(--color-monitored)'
          cornerRadius={20}
          className='stroke-2 stroke-transparent'
        />

        <PolarRadiusAxis
          tick={false}
          tickLine={false}
          axisLine={false}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor='middle'
                  >
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) - 16}
                      className='fill-foreground text-2xl font-bold'
                    >
                      {totalLimits.toLocaleString()}
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>

        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent />}
        ></ChartTooltip>
      </RadialBarChart>
    </ChartContainer>
  );
}

export default AppRadialChart;
