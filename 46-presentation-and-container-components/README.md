# Presentation and Container Components

## TODO APP

Component Heirarchy

Presentation and Container components
  - read about this mentality

no communication between siblings
except through their parents

App
  Header vs. header
  >TodosSection - manage all of this state.
    TodoForm - callbacks for creating a todo
      has internal state
    TodoList - list of todos
      Todo - needs to know about a single todo
      Todo
