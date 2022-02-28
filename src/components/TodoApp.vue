<template>
  <div class="container">
    <div class="card mt-3 shadow w-100">
      <div class="card-body">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6 col-sm-12">
            <div class="TodoStyle mt-3">
              <h2 class="text-center text-white">Todo App</h2>
            </div>
            <div class="d-flex">
              <input
                v-model="task"
                type="text"
                placeholder="Enter Todo"
                class="form-control mt-3 input-style"
              />

              <button
                @click="AddTodo"
                class="btn btn-success rounded mt-3 add-button"
              >
                ADD TODO
              </button>
            </div>

            <datepicker
              v-model="TaskDate"
              type="datetime"
              placeholder="Enter your time"
              inputClass="input-datepicker"
              class="form-control mt-3"
              v-if="Check"
              :format="customFormatter"
            ></datepicker>
            <div class="form-check mt-2 mb-4">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="Check"
                id="flexCheckDefault"
              />
              <label class="form-check-label text-white" for="flexCheckDefault">
                set reminder for this todo
              </label>
            </div>
            <div class="text-white" v-if="loading">Loading...</div>
            <ul class="task-item p-0">
              <li
                class="task-list-item d-flex"
                v-for="(task, index) in tasks"
                :key="index"
                v-on:dblclick="Highlight(index)"
                :class="{ highlighted: task.isHighlighted }"
              >
                <div class="d-flex" style="flex-direction: column; width: 100%">
                  <h5 class="TitleFont">{{ task.title }}</h5>

                  <span class="TitleFont">{{ task.description }}</span>
                </div>

                <button class="Buttons">
                  <span @click="CloseTask(index)">
                    <span class="fa fa-close"></span>
                  </span>
                </button>

                <button
                  class="Buttons"
                  v-if="
                    task.TaskDate !== null &&
                    task.TaskDate !== '' &&
                    task.TaskDate !== undefined
                  "
                >
                  <span @click="ShowModal(task.TaskDate)">
                    <span class="fa-solid fa-bell"></span>
                  </span>
                </button>
              </li>
            </ul>
            <Modal
              v-show="isModalVisible"
              @close="closeModal"
              v-bind:TaskDate="ModalValue"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
import Datepicker from "vuejs-datepicker";
import axios from "axios";
export default {
  name: "App",
  components: {
    Modal,
    Datepicker,
  },
  created() {
    this.loading = true;
    axios
      .get("https://swapi.dev/api/people/")
      .then((Response) => {
        Response.data.results.forEach((element) => {
          this.loading = false;
          this.tasks.push({
            title: element.name,
            description:
              "hair-color:" +
              element.hair_color +
              "  |  " +
              "haight:" +
              element.height +
              "  |  " +
              "skin_color:" +
              element.skin_color,
            isHighlighted: false,
          });
          // console.log(element);
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  },

  data() {
    return {
      Check: false,
      isModalVisible: false,
      ModalValue: "",
      task: "",
      TaskDate: "",
      loading: false,
      tasks: [],
    };
  },
  methods: {
    AddTodo() {
      this.tasks.push({
        TaskDate: this.TaskDate,
        title: this.task,
        isHighlighted: false,
      });
      this.task = "";
      this.TaskDate = "";
    },
    CloseTask(index) {
      this.tasks.splice(index, 1);
    },
    Highlight: function (index) {
      this.tasks[index].isHighlighted = !this.tasks[index].isHighlighted;
    },
    ShowModal(TaskDate) {
      this.isModalVisible = true;
      this.ModalValue = TaskDate;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    customFormatter(newDate) {
      newDate = Date.parse(newDate);
      this.TaskDate = new Intl.DateTimeFormat("en").format(newDate);
      return this.TaskDate;
    },
  },
};
</script>