class Api::V1::MessagesController < ApplicationController
  def index
    @messages = Message.order(Arel.sql('RANDOM()')).first
    render json: @messages, status: :ok
  end
end
