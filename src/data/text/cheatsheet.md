# Docker cheatsheet

```
The --rm switch will remove the container again, after it ran.
                This is something that we dearly want in our set of one-off
                commands below. If we omit it, Docker will fill its local store
                with new containers over and over again with each call. <br />
                The -i parameter tells Docker, that we want to interact with the
                container, e.g., because we start a shell, where we want to type
                something.
                <br /> The -t parameter allocates a pseudo-terminal, i.e.,
                Docker will communicate special sequences back and forth, that
                are needed for command-line editing.
```
