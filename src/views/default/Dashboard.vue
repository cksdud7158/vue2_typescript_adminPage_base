<template>
  <v-main>
    <v-container>
      <canvas ref="myChart" />
      <v-btn @click="downImage">Chart 이미지 다운로드</v-btn>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import Vue from "vue";
import html2canvas from "html2canvas";
import { trackingData } from "@/constants/data";

interface chartData {
  x: number;
  y: number;
}

export default Vue.extend({
  name: "Dashboard",
  mounted() {
    this.drawChart();
  },
  methods: {
    downImage() {
      const canvasArea = this.$refs.myChart as HTMLCanvasElement;
      html2canvas(canvasArea).then((canvas) => {
        const myImage = canvas.toDataURL();
        const link = document.createElement("a");
        link.download = "myImage2";
        link.href = myImage;
        link.click();
      });
    },

    drawChart() {
      const ctx = this.$refs.myChart as HTMLCanvasElement;
      const myChart = new this.$_Chart(ctx, {
        type: "scatter",
        data: {
          datasets: [
            {
              label: "# of Votes",
              data: this.dataSet(),
              backgroundColor: "rgb(255, 99, 132)",
              borderWidth: 1,
              showLine: true,
              borderColor: "rgba(0, 200, 0, 1)",
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
            x: {
              type: "linear",
              position: "bottom",
            },
          },
        },
      });
    },
    dataSet() {
      const tempData: chartData[] = [];
      trackingData.map((value) => {
        tempData.push({
          x: value.eyeX,
          y: value.eyeY,
        });
      });
      return tempData;
    },
  },
});
</script>

<style scoped></style>
