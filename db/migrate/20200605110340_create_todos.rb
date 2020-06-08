class CreateTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.text :task, null: false

      t.timestamps
    end
  end
end
