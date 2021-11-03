import { useRef, useCallback } from 'react'
import PropTypes from 'prop-types'

const Debounce = (fn, delay = 1) => {
    // Creating a ref to keep track of latest things
    const ref = useRef({ id: 0 })

    // Always use the latest funcion that is passped
    ref.current.fn = fn

    // Create the debounced function
    const debouncer = useCallback(
        // Proxy all arguments to our debounced function
        (...args) => {
            // Create a new promise
            ref.current.promise = new Promise((resolve, reject) => {
                // Keep track of resolve and reject
                ref.current.resolve = resolve
                ref.current.reject = reject
            })

            // Clear the old timeout if one exists!
            if (ref.current.timeout) {
                clearTimeout(ref.current.timeout)
            }

            ref.current.timeout = setTimeout(async () => {
                ref.current.timeout = undefined

                // Make a checkLatest function
                const checkLatest = () => id === ref.current.id

                try {
                    // Run the debounced function
                    const response = await ref.current.fn(...args)
                    // If the request is latest, resolve
                    if (checkLatest()) ref.current.resolve(response)
                } catch (err) {
                    // If the request is latest, reject
                    if (checkLatest()) ref.current.reject(err)
                }

                // Get a new ID for this async request
                const id = ref.current.id + 1

                // Update the hook with the latest request ID
                ref.current.id = id
            }, delay)

            // Always return the promise!
            return ref
        },
        [delay],
    )

    return debouncer
}

Debounce.propTypes = {
    object: PropTypes.object.isRequired,
    boolWidth: PropTypes.bool,
    boolHeight: PropTypes.bool,
    boolDiameter: PropTypes.bool,
}

export default Debounce
