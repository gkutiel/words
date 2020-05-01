/** @jsx createElement */
import { createElement } from 'typed-html'
import shuffle from 'shuffle-array'

document.addEventListener('DOMContentLoaded', () => {
    const icons = shuffle([
        'dog'
        , 'cat'
        , 'ambulance'
        , 'apple-alt'
        , 'baby'
        , 'baby-carriage'
        , 'band-aid'
        , 'battery-full'
        , 'bed'
        , 'beer'
        , 'bell'
        , 'bicycle'
        , 'birthday-cake'
        , 'bolt'
        , 'bomb'
        , 'bone'
        , 'book'
        , 'box-open'
        , 'bread-slice'
        , 'briefcase'
        , 'bug'
        , 'building'
        , 'bus'
        , 'camera'
        , 'campground'
        , 'car'
        , 'carrot'
        , 'chair'
        , 'child'
        , 'clock'
        , 'coffee'
        , 'couch'
        , 'crow'
        , 'crown'
        , 'cut'
        , 'dice-six'
        , 'egg'
        , 'eye'
        , 'faucet'
        , 'fighter-jet'
        , 'fish'
        , 'flag'
        , 'frog'
        , 'fun'
        , 'gem'
        , 'guitar'
        , 'hamburger'
    ])

    const tbody = document.getElementById('tbody') as HTMLElement

    for (const icon of icons.slice(0, 10)) {
        tbody.innerHTML += <tr>
            <td><i class={`fas fa-${icon}`}></i></td>
            <td></td>
        </tr>
    }
})