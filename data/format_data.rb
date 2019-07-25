require 'csv'

rows = CSV.parse(open("geoByYear.csv"))
rows.map do |state, year, rate, ccount, rank, count|
  {
    state: state,
    year: year.to_i,
    rate: rate.to_f.round(4),
    ccount: ccount.split(",").join.to_i,
    rank: rank.to_i,
    count: count.split(",").join.to_i,
  }
end

rows = CSV.parse(open("geoCount.csv"))
rows.map do |state, rank, count|
  {
    state: state,
    rank: rank.to_i,
    count: count.split(",").join.to_i,
  }
end

rows = CSV.parse(open("geo.csv"))
rows.map do |cause, state, rate, rank, count|
  {
    cause: cause,
    state: state,
    rate: rate.to_f.round(4),
    rank: rank.to_i,
    count: count.split(",").join.to_i,
  }
end
