import boxen from 'boxen'

/**
 * ConfigOptions
 * @desc Type representing configuration options
 */
export type ConfigOptions = {
    /**
     * Style configuration options
     */
    readonly styleOptions: StyleOptions
    /**
     * Repo configuration options
     */
    readonly repoOptions: RepoOptions
    /**
     * Resource configuration options
     */
    readonly resourceOptions: ResourceOptions
}
//--------------------------------------------------------------------------------------------------
/**
 * PayloadOptions
 * @desc Type representing payload configuration options
 */
export type PayloadOptions = {
    /**
     * Comment configuration options
     */
    readonly commentOptions: CommentOptions
    /**
     * Repo configuration options
     */
    readonly repoOptions: RepoOptions
    /**
     * Resource configuration options
     */
    readonly resourceOptions: ResourceOptions
}

//--------------------------------------------------------------------------------------------------
/**
 * RequestOptions
 * @desc Type representing request options
 */
export type RequestOptions = {
    /**
     * Request url
     */
    readonly url: string
}
//--------------------------------------------------------------------------------------------------
/**
 * CommentOptions
 * @desc Type representing comment options
 */
export type CommentOptions = {
    /**
     * Comment text
     */
    readonly message: string
}
//--------------------------------------------------------------------------------------------------
/**
 * StyleOptions
 * @desc Type representing style options
 */
export type StyleOptions = {
    /**
     * Comment quote theme
     */
    readonly theme: string
    /**
     * Comment quote layout
     */
    readonly layout: string
}

//--------------------------------------------------------------------------------------------------
/**
 * ResourceOptions
 * @desc Type representing resource options
 */
export type RepoOptions = {
    /**
     * Repo owner
     */
    readonly owner: string
    /**
     * Repo name
     */
    readonly repo: string
}

//--------------------------------------------------------------------------------------------------
/**
 * ResourceOptions
 * @desc Type representing resource options
 */
export type ResourceOptions = {
    /**
     * Request identifier
     */
    readonly requestId: number
}

//--------------------------------------------------------------------------------------------------
/**
 * ProfileOptions
 * @desc Type representing profiles options
 */
export type ProfileOptions = {
    /**
     * Request configuration options
     */
    readonly requestOptions: RequestOptions
    /**
     * Output configuration options
     */
    readonly outputOptions?: boxen.Options
}

//--------------------------------------------------------------------------------------------------
