class TodosController < ApplicationController

  before_action :set_params, only: [:show, :destroy, :update]

  def index
    @todo = Todo.all.order(created_at: :desc)
    render json: @todo
  end

  def show
    render json: @todo
  end

  def create
    @todo = Todo.new(todo_params)
    @todo.save!
    render json: @todo
  end

  def update
    @todo.update!(todo_params)
    render json: @todo
  end

  def destroy
    @todo.destroy!
    render json: @todo
  end

  private

  def set_params
    @todo = Todo.find(params[:id])
  end

  def todo_params
    params.require(:todo).permit(:task)
  end

end
