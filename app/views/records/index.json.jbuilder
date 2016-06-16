json.array!(@records) do |record|
  json.extract! record, :id, :title, :date, :amount
  json.url record_url(record, format: :json)
end
