import $ from 'jquery'

export default function eventProxy () {

  const event = arguments[0]
  const selector = arguments[1]
  if (selector && !$(event.target).is(selector)) {
    if (event.target === event.currentTarget) {
      return event
    }
    var events = {}
    for (var i in event) {
      events[i] = event[i]
    }
    events.target = event.target.parentElement
    return eventProxy(events, selector)
  }
  return event
}