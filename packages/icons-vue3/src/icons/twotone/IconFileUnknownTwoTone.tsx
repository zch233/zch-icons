// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileUnknownTwotoneSvg from 'icons-base/es/asn/FileUnknownTwotone';

export interface FileUnknownTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileUnknownTwotone: FileUnknownTwotoneIconType = (props, context) => (
    <Icon name='FileUnknownTwotone' {...{ ...props, ...context.attrs }} icon={FileUnknownTwotoneSvg} />
);

IconFileUnknownTwotone.displayName = 'IconFileUnknownTwotone';
IconFileUnknownTwotone.theme = 'twotone';
IconFileUnknownTwotone.originName = 'file-unknown';

export default IconFileUnknownTwotone;
