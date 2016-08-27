class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(params[:bounds])
    render :index
  end

  def show
    @bench = Bench.find_by(id: params[:id])
    if @bench
      render :show
    else
      render json: {errors: ["It doesn't exists"] }
    end
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render :show
    else
      render json: { errors: @bench.errors.full_messages }
    end
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
end
