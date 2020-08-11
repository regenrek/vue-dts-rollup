import { ref, Ref } from 'vue-demi'

export function useToggle<T>() {
  const active: Ref<boolean> = ref(false) as Ref<boolean>

  const toggle = () => {
    active.value = !active.value
  }

  return { active, toggle }
}
