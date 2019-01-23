#!/bin/bash
set -e

#/usr/sbin/nginx


case ${1} in
  nginx|help)

    case ${1} in
      nginx)
        /usr/sbin/nginx
        ;;
    esac
    ;;
  help)
    echo "Available options:"
    echo " nginx            - Starts nginx (default)"
    echo " help             - Displays the help"
    echo " [command]        - Execute the specified command, eg. bash."
    ;;
  *)
    exec "$@"
    ;;
esac